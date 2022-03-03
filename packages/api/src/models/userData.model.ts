import mongoose, { Document, Schema } from 'mongoose';

export interface iUser extends Document {
  email: string;
  userId: string;
  cp?: number;
  municipio?: string;
  carbData?: {
    capacidad: number;
    consumo: number;
  };
  eData?: {
    coste: number[];
  };
}

const schema = new Schema(
  {
    email: { type: String, unique: true, required: true },
    userId: { type: String, unique: true },
    cp: { type: Number, default: 0 },
    municipio: { type: String, default: '' },
    carbData: {
      capacidad: { type: Number, default: 0 },
      consumo: { type: Number, default: 0 },
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

export const User = mongoose.model<iUser>('User', schema);
