import mongoose, { Document, Schema } from 'mongoose';

export interface iCar extends Document {
  marca: string;
  modelo: string;
  generacion: string;
  version: string;
  consumo: number;
  capacidad: number;
};

const schema = new Schema({
  marca: {type: String},
  modelo: {type: String},
  generacion: {type: String},
  version: {type: String},
  consumo: {type: Number},
  capacidad: {type: Number},
});

export const Car = mongoose.model<iCar>('Car', schema);
