import mongoose, { Document, Schema } from 'mongoose';

export interface iGasolinera extends Document {
  cp: Number;
  direccion: String;
  horario: String;
  localidad: String;
  municipio: String;
  coords: Object;
  gasoleo: Number;
  gasolina_95: Number;
  gasolina_98: Number;
  provincia: String;
  ideess: Number;
  idmunicipio: Number;
  idprovincia: Number;
  idccaa: Number;
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
