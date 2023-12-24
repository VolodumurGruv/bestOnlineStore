export interface DeliveryData {
  id: number;
  name: string;
  logoUrl?: string;
  price?: number;
  isChecked: boolean;
}

export const deliveryData: DeliveryData[] = [
  {
    id: 1,
    name: 'Самовивіз з Нової Пошти',
    logoUrl: './assets/pics/png/delivery/logochat.png',
    isChecked: false,
  },
  {
    id: 2,
    name: 'Самовивіз з УКРПОШТИ',
    logoUrl: './assets/pics/png/delivery/logoposhta.png',
    isChecked: false,
  },
  {
    id: 3,
    name: 'Кур’єрська доставка від магазину (тільки по м.Київ)',
    price: 700,
    isChecked: false,
  },
  {
    id: 4,
    name: 'Самовивіз з магазину ( м. Київ, вул. Саксаганського, 121 )',
    isChecked: false,
  },
];
