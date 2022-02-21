import mongoose, { Document, Schema } from 'mongoose';
import { iPoint } from './Point.model';

export interface iMunicipio extends Document {
  nombre: string;
  coords: iPoint;
  prov: string;
  // aut: string;
};
const schema = new Schema({
  nombre: String,
  coords: Object,
  prov: { type: Schema.Types.ObjectId, ref: 'Provincia' },
  // aut: { type: Schema.Types.ObjectId, ref: 'Autonomia' },
});

export const Municipio = mongoose.model<iMunicipio>('Municipio', schema);
