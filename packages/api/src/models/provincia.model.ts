import mongoose, { Document, Schema } from 'mongoose';


export interface iProvincia extends Document {
  codigo: number;
  nombre: string;
  aut: string;
};
const schema = new Schema({
  codigo: {type: Number},
  nombre: String,
  aut: { type: Schema.Types.ObjectId, ref: 'Autonomia' },
});

export const Provincia = mongoose.model<iProvincia>('Provincia', schema);
