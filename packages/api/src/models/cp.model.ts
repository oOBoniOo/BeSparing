import mongoose, { Document, Schema } from 'mongoose';

export interface iCodPostal extends Document {
  cp: number;
  municipio: string;
}
const schema = new Schema({
  cp: Number,
  municipio: String,
});

export const CodPostal = mongoose.model<iCodPostal>('CodPostal', schema);
