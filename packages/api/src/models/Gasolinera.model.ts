import mongoose, { Document, Schema } from 'mongoose';

export interface iGasolinera extends Document {
    c_p_: Number;
    direccion: String;
    horario: String;
    latitud: String;
    localidad: String;
    longitud: String;
    margen: String;
    municipio: String;
    coords?: Object;
    precio_biodiesel: String;
    precio_bioetanol: String;
    precio_gas_natural_comprimido: String;
    precio_gas_natural_licuado: String;
    precio_gases_licuados_del_petroleo: String;
    precio_gasoleo_a: String;
    precio_gasoleo_b: String;
    precio_gasoleo_premium: String;
    precio_gasolina_95_e10: String;
    precio_gasolina_95_e5: String;
    precio_gasolina_95_e5_premium: String;
    precio_gasolina_98_e10: String;
    precio_gasolina_98_e5: String;
    precio_hidrogeno: String;
    provincia: String;
    remision: String;
    rotulo: String;
    tipo_venta: String;
    _bioetanol: String;
    _ester_metilico: String;
    ideess: String;
    idmunicipio: String;
    idprovincia: String;
    idccaa: String;
}
const schema = new Schema({
  c_p_: Number,
  direccion: String,
  horario: String,
  latitud: String,
  localidad: String,
  longitud: String,
  margen: String,
  municipio: String,
  coords: Object,
  precio_biodiesel: String,
  precio_bioetanol: String,
  precio_gas_natural_comprimido: String,
  precio_gas_natural_licuado: String,
  precio_gases_licuados_del_petroleo: String,
  precio_gasoleo_a: String,
  precio_gasoleo_b: String,
  precio_gasoleo_premium: String,
  precio_gasolina_95_e10: String,
  precio_gasolina_95_e5: String,
  precio_gasolina_95_e5_premium: String,
  precio_gasolina_98_e10: String,
  precio_gasolina_98_e5: String,
  precio_hidrogeno: String,
  provincia: String,
  remision: String,
  rotulo: String,
  tipo_venta: String,
  _bioetanol: String,
  _ester_metilico: String,
  ideess: String,
  idmunicipio: String,
  idprovincia: String,
  idccaa: String,
});


export const Gasolinera = mongoose.model<iGasolinera>('Gasolinera', schema);
