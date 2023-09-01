import {Category} from "@interfaces/catalog.interface";

export const categoriesArray: Category[]  = [
  {
    category: 'Меблі',
    showSubcategories: false,
    subcategories: ['Столи', 'Пуфи', 'Стільці', 'Крісла', 'Ліжка', 'Дивани', 'Стелажі', 'Тумби', 'Комоди']
  },
  {
    category: 'Освітлення',
    showSubcategories: false,
    subcategories: ['Люстри', 'Лампи']
  },
  {
    category: 'Сантехніка',
    showSubcategories: false,
    subcategories: ['Ванни', 'Душі']
  },
  {
    category: 'Аксесуари',
    showSubcategories: false,
    subcategories: ['Подушки', 'Килими']
  },
  {
    category: 'Інше',
    showSubcategories: false,
  },
  {
    category: 'Новинки',
    showSubcategories: false,
  },
  {
    category: 'Популярне',
    showSubcategories: false,
  },
  {
    category: 'Акції',
    showSubcategories: false,
  }
];
