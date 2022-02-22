import mongoose, { Document, Schema } from 'mongoose';

export interface iAutonomia extends Document {
  codigo: number;
  nombre: string
};

const schema = new Schema({
  codigo: Number,
  nombre: String,
});

export const Autonomia = mongoose.model<iAutonomia>('Autonomia', schema);
