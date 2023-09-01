import {Category} from "@interfaces/catalog.interface";

export const mainCategories: Category[] = [
  {
    name: 'Меблі',
    routerLink: 'furniture',
    showSubcategories: false,
    subcategories: [
      {
        name: 'Столи',
        routerLink: 'tables',
      },
      {
        name: 'Пуфи',
        routerLink: 'ottomans',
      },
      {
        name: 'Стільці',
        routerLink: 'chairs',
      },
      {
        name: 'Крісла',
        routerLink: 'armchairs',
      },
      {
        name: 'Ліжка',
        routerLink: 'beds',
      },
      {
        name: 'Дивани',
        routerLink: 'sofas',
      },
      {
        name: 'Стелажі',
        routerLink: 'shelves',
      },
      {
        name: 'Тумби',
        routerLink: 'nightstands',
      },
      {
        name: 'Комоди',
        routerLink: 'dressers',
      },
    ],
  },
  {
    name: 'Освітлення',
    routerLink: 'lighting',
    showSubcategories: false,
    subcategories: [
      {
        name: 'Люстри',
        routerLink: 'chandeliers',
      },
      {
        name: 'Лампи',
        routerLink: 'lamps',
      },
    ],
  },
  {
    name: 'Сантехніка',
    routerLink: 'plumbing',
    showSubcategories: false,
    subcategories: [
      {
        name: 'Ванни',
        routerLink: 'bathtubs',
      },
      {
        name: 'Душі',
        routerLink: 'showers',
      },
    ],
  },
  {
    name: 'Аксесуари',
    routerLink: 'accessories',
    showSubcategories: false,
    subcategories: [
      {
        name: 'Подушки',
        routerLink: 'cushions',
      },
      {
        name: 'Килими',
        routerLink: 'rugs',
      },
    ],
  },
  {
    name: 'Інше',
    routerLink: 'other',
    showSubcategories: false,
    subcategories: [
      {
        name: 'Декор',
        routerLink: 'decor',
      },
      {
        name: 'Посуд',
        routerLink: 'tableware',
      },
    ],
  },
  {
    name: 'Новинки',
    routerLink: 'new',
    showSubcategories: false,
  },
  {
    name: 'Популярне',
    routerLink: 'popular',
    showSubcategories: false,
  },
  {
    name: 'Акції',
    routerLink: 'shares',
    showSubcategories: false,
  },
];
