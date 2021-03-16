import mongoose, { Schema, Document } from 'mongoose'

export interface ISelect extends Document {
  whichSelect: number,
  values: [string];
  defaultCheck: [boolean];
}

export const SelectSchema: Schema = new Schema({
  whichSelect: { type: Number, required: true },
  values: { type: [String], required: true },
  defaultCheck: { type: [Boolean], required: true }
})

export default mongoose.model<ISelect>("Selects", SelectSchema)