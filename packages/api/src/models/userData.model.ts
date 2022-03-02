import mongoose, { Document, Schema } from 'mongoose';

export interface iUser extends Document {
  userId: string;
  cp?: number;
  municipio: string;
  carbData: {
    tipo: string;
    capacidad: number;
    consumo: number;
  };
  eData: {
    coste: number[];
  };
}

const schema = new Schema(
  {
    userId: { type: String, unique: true, required: true },
    cp: { type: Number, default: 0 },
    municipio: { type: String, default: '' },
    carbData: {
      tipo: { type: String, default: '' },
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
