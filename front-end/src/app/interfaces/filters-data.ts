const material = ['Дерево', 'Метал', 'ДСП', 'Пластик'];
const woodType = ['Дуб', 'Горіх', 'Липа', 'Клен'];
const designFeatures = ['Розкладні', 'Нерозкладні'];

interface FilterCategory {
  material?: string[];
  upholsteryMaterial?: string[];
  woodType?: string[];
  designFeatures?: string[];
  size?: string[];
  category?: string[];
}

interface Filter {
  chairs: FilterCategory;
  tables: FilterCategory;
  beds: FilterCategory;
  bathTubes: FilterCategory;
  shelves: FilterCategory;
}

export const filters: Filter = {
  chairs: {
    material,
    upholsteryMaterial: ['Тканина', 'Єко-шкіра', 'Замша'],
    woodType,
    designFeatures,
  },
  tables: {
    category: ['Обідні набори', 'Кавові столики'],
    material,
    woodType,
    designFeatures,
  },
  beds: {
    size: ['160см/200см', '160см/220см'],
    material,
    woodType,
    designFeatures,
  },
  bathTubes: {
    size: ['160см/80см', '130см/80см'],
    material: ['Акрил', 'Кераміка', 'Пластик'],
  },
  shelves: {
    size: ['60см', '80см'],
    material,
    woodType,
  },
};
