import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String }, 
  image: { type: String },    
});

export const User = mongoose.models.User || mongoose.model('User', UserSchema);
