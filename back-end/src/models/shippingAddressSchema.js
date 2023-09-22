import mongoose from 'mongoose';

const shippingAddressSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  address: { type: String, required: false },
  city: { type: String, required: false },
  country: { type: String, required: false },
  postalCode: { type: String, required: false },
  deliveryMethod: {
    type: String,
    enum: ['Нова пошта', 'Укрпошта', 'Самовивіз', 'Кур\'єрська доставка'],
    required: true,
  },
  novaPoshtaAddress: {
    type: String,
    required: function() {
      return this.deliveryMethod === 'Нова пошта';
    },
  },
}, { timestamps: true });

shippingAddressSchema.path('address').validate(function(value) {
  return this.deliveryMethod === 'Укрпошта' || this.deliveryMethod === 'Кур\'єрська доставка'
    ? typeof value === 'string' && value.length > 0
    : true;
}, 'Поле "address" обов\'язкове для методів доставки "Укрпошта" та "Кур\'єрська доставка"');

shippingAddressSchema.path('city').validate(function(value) {
  return this.deliveryMethod === 'Укрпошта' || this.deliveryMethod === 'Кур\'єрська доставка'
    ? typeof value === 'string' && value.length > 0
    : true;
}, 'Поле "city" обов\'язкове для методів доставки "Укрпошта" та "Кур\'єрська доставка"');

shippingAddressSchema.path('country').validate(function(value) {
  return this.deliveryMethod === 'Укрпошта' || this.deliveryMethod === 'Кур\'єрська доставка'
    ? typeof value === 'string' && value.length > 0
    : true;
}, 'Поле "country" обов\'язкове для методів доставки "Укрпошта" та "Кур\'єрська доставка"');

shippingAddressSchema.path('postalCode').validate(function(value) {
  return this.deliveryMethod === 'Укрпошта' || this.deliveryMethod === 'Кур\'єрська доставка'
    ? typeof value === 'string' && value.length > 0
    : true;
}, 'Поле "postalCode" обов\'язкове для методів доставки "Укрпошта" та "Кур\'єрська доставка"');

const ShippingAddress = mongoose.model('ShippingAddress', shippingAddressSchema);

export default ShippingAddress;
