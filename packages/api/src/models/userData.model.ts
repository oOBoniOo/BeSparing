import mongoose, { Document, Schema } from 'mongoose';

export interface iUser extends Document {
  userId: string;
  nombre: string;
  cp?: number;
  carbData: {
    tipo: string;
    capacidad: number;
  };
  eData: {
    coste: number[];
  };
}

const schema = new Schema(
    {
      userId: String,
      nombre: String,
      cp: Number,
      carbData: {
        tipo: String,
        capacidad: Number,
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
