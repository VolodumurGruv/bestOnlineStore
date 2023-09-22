import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  googleId: { type: String, required: false },
  name: { type: String, required: true },
  password: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: false },
  isAdmin: { type: Boolean, required: true, default: false },
  isAnonymous: { type: Boolean, default: false },
  resetPasswordToken: { type: String, default: '' },
  resetPasswordExpires: { type: Number, default: 0 },
  shippingAddresses: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ShippingAddress',
  }
}, { timestamps: true }
);

userSchema.virtual('firstName').get(function () {
  const [firstName] = this.name.split(' ');
  return firstName;
});

userSchema.virtual('lastName').get(function () {
  const [, lastName] = this.name.split(' ');
  return lastName;
});

const User = mongoose.model('User', userSchema);

export default User;
