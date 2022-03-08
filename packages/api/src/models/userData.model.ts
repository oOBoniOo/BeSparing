import mongoose, { Document, Schema } from 'mongoose';

export interface UserDocument extends Document {
  email: string;
  userId: string;
  cp: number;
  municipio?: string;
  carbData?: {
    capacidad: number;
    consumo: number;
    modelo: '';
    tipo: '';
  };
  eData?: {
    coste: number[];
  };
}

const schema = new Schema(
  {
    email: { type: String, unique: true, required: true },
    userId: { type: String },
    cp: { type: Number, default: 0 },
    municipio: { type: String, default: '' },
    carbData: {
      capacidad: { type: Number, default: 0 },
      consumo: { type: Number, default: 0 },
      modelo: { type: String, default: '' },
      tipo: { type: String, enum: ['diesel', 'gasolina', 'electricidad'], defaut: 'gasolina' },
    },
    eData: {
      coste: [],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const User = mongoose.model<UserDocument>('User', schema);
