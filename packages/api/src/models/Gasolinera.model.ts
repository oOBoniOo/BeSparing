import mongoose, { Document, Schema } from 'mongoose';
import { iPoint } from './Point.model';

export interface iGasolinera extends Document {
  cp: number;
  direccion: string;
  horario: string;
  localidad: string;
  municipio: string;
  coords: iPoint;
  gasoleo: number;
  gasolina_95: number;
  gasolina_98: number;
  provincia: string;
  ideess: number;
  idmunicipio: number;
  idprovincia: number;
  idccaa: number;
}
const schema = new Schema({
  cp: Number,
  direccion: String,
  horario: String,
  localidad: String,
  municipio: String,
  coords: Object,
  gasoleo: Number,
  gasolina_95: Number,
  gasolina_98: Number,
  provincia: String,
  ideess: Number,
  idmunicipio: Number,
  idprovincia: Number,
  idccaa: Number,
});

export const Gasolinera = mongoose.model<iGasolinera>('Gasolinera', schema);
