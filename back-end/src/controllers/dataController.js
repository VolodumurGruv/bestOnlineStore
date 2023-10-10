import Order from '../models/orderSchema.js';
import User from '../models/userSchema.js';
import {
  HTTP_STATUS_CODES,
  MESSAGES
} from '../utils/constants.js';
import sendRes from '../utils/handleResponse.js';

const fetchDataForPeriod = async (startDate, endDate) => {
  const orders = await Order.find({
    createdAt: { $gte: startDate, $lte: endDate },
  });

  const users = await User.find({
    createdAt: { $gte: startDate, $lte: endDate },
  });

  const revenue = orders.reduce((total, order) => total + order.itemsPrice, 0);

  return {
    numberOfUsers: users.length || 0,
    totalRevenue: revenue || 0,
    numberOfOrders: orders.length || 0,
  };
};

const getLastWeekDailyData = async () => {
  const currentDate = new Date();
  const lastWeekStartDate = new Date(currentDate);
  lastWeekStartDate.setDate(currentDate.getDate() - 7);

  const dailyData = [];

  for (let i = 0; i < 7; i++) {
    const startDate = new Date(lastWeekStartDate);
    startDate.setDate(lastWeekStartDate.getDate() + i);
    startDate.setHours(0, 0, 0, 0);

    const endDate = new Date(startDate);
    endDate.setHours(23, 59, 59, 999);

    const data = await fetchDataForPeriod(startDate, endDate);

    dailyData.push({
      date: startDate,
      ...data,
    });
  }

  const totalUsersLastWeek = dailyData.reduce((total, day) => total + day.numberOfUsers, 0);
  const totalRevenueLastWeek = dailyData.reduce((total, day) => total + day.totalRevenue, 0);
  const totalOrdersLastWeek = dailyData.reduce((total, day) => total + day.numberOfOrders, 0);

  return {
    dailyData,
    weeklyData: {
      numberOfUsers: totalUsersLastWeek,
      totalRevenue: totalRevenueLastWeek.toFixed(2),
      numberOfOrders: totalOrdersLastWeek,
    },
  };
};

const getLastMonthData = async () => {
  const currentDate = new Date();
  const lastMonthStartDate = new Date(currentDate);
  lastMonthStartDate.setMonth(currentDate.getMonth() - 1);
  lastMonthStartDate.setDate(1);

  const lastMonthEndDate = new Date(lastMonthStartDate);
  lastMonthEndDate.setMonth(lastMonthStartDate.getMonth() + 1);
  lastMonthEndDate.setDate(0);

  const [ordersLastMonth, usersLastMonth] = await Promise.all([
    Order.find({
      createdAt: { $gte: lastMonthStartDate, $lte: lastMonthEndDate },
    }),
    User.find({
      createdAt: { $gte: lastMonthStartDate, $lte: lastMonthEndDate },
    }),
  ]);

  const revenueLastMonth = ordersLastMonth
    .reduce((totalRevenue, order) => totalRevenue + order.itemsPrice, 0);

  return {
    numberOfUsersLastMonth: usersLastMonth.length || 0,
    numberOfOrdersLastMonth: ordersLastMonth.length || 0,
    totalRevenue: revenueLastMonth.toFixed(2) || 0,
  };
};

const compareData = async () => {
  const dataLastWeek = await getLastWeekDailyData();
  const dataLastMonth = await getLastMonthData();

  const diffInUsers = dataLastWeek.weeklyData.numberOfUsers - dataLastMonth.numberOfUsersLastMonth;
  const diffInOrders = dataLastWeek.weeklyData.numberOfOrders - dataLastMonth.numberOfOrdersLastMonth;

  const revenueLastWeek = dataLastWeek.weeklyData.totalRevenue;
  const revenueLastMonth = dataLastMonth.totalRevenue;

  const diffInRevenue = revenueLastWeek - revenueLastMonth;
  const percentDiffInRevenue = (diffInRevenue / revenueLastMonth) * 100;

  return {
    dataLastWeek,
    dataLastMonth,
    diffInUsers,
    diffInOrders,
    diffInRevenue,
    percentDiffInRevenue,
  };
};

const fetchAndSendData = async (req, res) => {
  try {
    const data = await compareData();
    return sendRes(res, HTTP_STATUS_CODES.OK, MESSAGES.DATA_RETRIEVED, data);
  } catch (error) {
    return sendRes(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, MESSAGES.DATABASE_ERROR, error);
  }
};

export { fetchAndSendData };
