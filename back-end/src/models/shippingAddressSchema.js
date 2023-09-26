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
    default: 'Самовивіз'
  },
  novaPoshtaAddress: {
    type: String,
    required: function() {
      return this.deliveryMethod === 'Нова пошта';
    },
  },
}, { timestamps: true });

const ShippingAddress = mongoose.model('ShippingAddress', shippingAddressSchema);

export default ShippingAddress;
