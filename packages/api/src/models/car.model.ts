import mongoose, { Document, Schema } from 'mongoose';

export interface iCar extends Document {
  marca: string;
  modelo: string;
  generacion: string;
  version: string;
  consumo: number;
  capacidad: number;
  tipo: string;
  estado: string;
}

const schema = new Schema(
  {
    marca: { type: String },
    modelo: { type: String },
    generacion: { type: String },
    version: { type: String },
    consumo: { type: Number },
    capacidad: { type: Number },
    tipo: { type: String, enum: ['gasolina', 'diesel', 'electricidad'], default: 'gasolina' },
    estado: { type: String, required: ['activo', 'validacion'], default: 'activo' },
  },
  {
    timestamps: true,
  },
);

export const Car = mongoose.model<iCar>('Car', schema);
