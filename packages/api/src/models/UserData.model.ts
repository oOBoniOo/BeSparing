import mongoose, { Document, Schema } from 'mongoose';

export interface iUser extends Document {
  user_id: string;
  nombre: string;
  cp?: number;
  carbData : {
    tipo: string;
    capacidad: number;
  }
  eData: {
    coste: number[]
  }

};
const schema = new Schema({
  email: String,
  nombre: String,
  cp: Number,
  carbData: {
    tipo: String,
    capacidad: Number,
  },
  eData: {
    coste: [],
  },
});

export const User = mongoose.model<iUser>('User', schema);