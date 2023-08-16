import bcrypt from 'bcrypt';

const data = {
  users: [
    {
      name: 'X',
      password: '*$#34_&-',
      phone: '123-45-67',
      email: '#@$',
      isAdmin: true
    }
  ],
  products: [
    {
      name: 'Qwerty',
      descr: 'best product',
      shortDescr: 'product',
      price: 100,
      image: 'url.png',
      category: 'stuff',
      brand: 'Gucci',
      countInStock: 5,
      instock: true
    }
  ]
};

export default data;
