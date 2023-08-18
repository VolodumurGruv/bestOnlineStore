import { Category } from './catalog.interface';

export const mainCategories: Category[] = [
  {
    id: 1,
    name: 'Меблі',
    routerLink: '/catalog/furniture',
    showSubcategories: false,
    subcategories: [
      { id: 11, name: 'Столи', routerLink: 'tables' },
      { id: 12, name: 'Пуфи', routerLink: 'ottomans' },
      { id: 13, name: 'Стільці', routerLink: 'chairs' },
      { id: 14, name: 'Крісла', routerLink: 'armchairs' },
      { id: 15, name: 'Ліжка', routerLink: 'beds' },
      { id: 16, name: 'Дивани', routerLink: 'sofas' },
      { id: 17, name: 'Стелажі', routerLink: 'shelves' },
      { id: 18, name: 'Тумби', routerLink: 'nightstands' },
      { id: 19, name: 'Комоди', routerLink: 'dressers' }
    ]
  },
  {
    id: 2,
    name: 'Освітлення',
    routerLink: '/catalog/lighting',
    showSubcategories: false,
    subcategories: [
      { id: 21, name: 'Люстри', routerLink: 'chandeliers' },
      { id: 22, name: 'Лампи', routerLink: 'lamps' }
    ]
  },
  {
    id: 3,
    name: 'Сантехніка',
    routerLink: '/catalog/plumbing',
    showSubcategories: false,
    subcategories: [
      { id: 31, name: 'Ванни', routerLink: 'bathtubs' },
      { id: 32, name: 'Душі', routerLink: 'showers' }
    ]
  },
  {
    id: 4,
    name: 'Аксесуари',
    routerLink: '/catalog/accessories',
    showSubcategories: false,
    subcategories: [
      { id: 41, name: 'Подушки', routerLink: 'cushions' },
      { id: 42, name: 'Килими', routerLink: 'rugs' }
    ]
  },
  {
    id: 5,
    name: 'Інше',
    routerLink: '/catalog/other',
    showSubcategories: false,
    subcategories: [
      { id: 51, name: 'Декор', routerLink: 'decor' },
      { id: 52, name: 'Посуд', routerLink: 'tableware' }
    ]
  }
];
