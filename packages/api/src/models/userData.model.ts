import mongoose, { Document, Schema } from 'mongoose';

export interface iUser extends Document {
  userId: string;
  cp?: number;
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
    cp: Number,
    carbData: {
      tipo: String,
      capacidad: Number,
      consumo: Number,
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
