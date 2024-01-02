export interface DeliveryData {
  id: number;
  name: string;
  logoUrl?: string;
  price?: number;
  isChecked: boolean;
  isClosed: boolean;
  department: string;
}

export const deliveryData: DeliveryData[] = [
  {
    id: 0,
    name: 'Самовивіз з Нової Пошти',
    logoUrl: './assets/pics/png/delivery/logochat.png',
    isChecked: false,
    isClosed: true,
    department: 'NovaPoshta',
  },
  {
    id: 1,
    name: 'Самовивіз з УКРПОШТИ',
    logoUrl: './assets/pics/png/delivery/logoposhta.png',
    isChecked: false,
    isClosed: true,
    department: 'UkrPoshta',
  },
  {
    id: 2,
    name: 'Кур’єрська доставка від магазину (тільки по м.Київ)',
    price: 700,
    isChecked: false,
    isClosed: true,
    department: 'Courier',
  },
  {
    id: 3,
    name: 'Самовивіз з магазину ( м. Київ, вул. Саксаганського, 121 )',
    isChecked: false,
    isClosed: true,
    department: 'SelfPickUp',
  },
];
