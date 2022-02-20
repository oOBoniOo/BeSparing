import mongoose, { Document, Schema } from 'mongoose';

export interface iGasolinera extends Document {
  'C.P.':Number;
  'Dirección': String;
  'Horario': String;
  'Latitud': String;
  'Localidad': String;
  'Longitud (WGS84)': String;
  'Margen': String;
  'Municipio': String;
  'Precio Biodiesel': String;
  'Precio Bioetanol': String;
  'Precio Gas Natural Comprimido': String;
  'Precio Gas Natural Licuado': String;
  'Precio Gases licuados del petróleo': String;
  'Precio Gasoleo A': String;
  'Precio Gasoleo B': String;
  'Precio Gasoleo Premium': String;
  'Precio Gasolina 95 E10': String;
  'Precio Gasolina 95 E5': String;
  'Precio Gasolina 95 E5 Premium': String;
  'Precio Gasolina 98 E10': String;
  'Precio Gasolina 98 E5': String;
  'Precio Hidrogeno': String;
  'Provincia': String;
  'Remisión': String;
  'Rótulo': String;
  'Tipo Venta': String;
  '% BioEtanol': String;
  '% Éster metílico': String;
  'IDEESS': String;
  'IDMunicipio': String;
  'IDProvincia': String;
  'IDCCAA': String;
}
const schema = new Schema({
  'C.P.': Number,
  'Dirección': String,
  'Horario': String,
  'Latitud': String,
  'Localidad': String,
  'Longitud (WGS84)': String,
  'Margen': String,
  'Municipio': String,
  'Precio Biodiesel': String,
  'Precio Bioetanol': String,
  'Precio Gas Natural Comprimido': String,
  'Precio Gas Natural Licuado': String,
  'Precio Gases licuados del petróleo': String,
  'Precio Gasoleo A': String,
  'Precio Gasoleo B': String,
  'Precio Gasoleo Premium': String,
  'Precio Gasolina 95 E10': String,
  'Precio Gasolina 95 E5': String,
  'Precio Gasolina 95 E5 Premium': String,
  'Precio Gasolina 98 E10': String,
  'Precio Gasolina 98 E5': String,
  'Precio Hidrogeno': String,
  'Provincia': String,
  'Remisión': String,
  'Rótulo': String,
  'Tipo Venta': String,
  '% BioEtanol': String,
  '% Éster metílico': String,
  'IDEESS': String,
  'IDMunicipio': String,
  'IDProvincia': String,
  'IDCCAA': String,
});

export const Gasolinera = mongoose.model<iGasolinera>('Gasolinera', schema)