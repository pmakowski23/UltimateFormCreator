import mongoose, { Schema, Document } from 'mongoose'

export interface SelectData {
  whichSelect: number,
  values: [string];
  defaultCheck: [boolean];
}

export interface ISelect extends SelectData, Document {
}

export const SelectSchema: Schema = new Schema({
  whichSelect: { type: Number, required: true }, // TODO: can be only 1-3
  values: { type: [String], required: true }, // TODO: values.lenght must be euqal to defaultCheck.lenght
  defaultCheck: { type: [Boolean], required: true }
})

export default mongoose.model<ISelect>("Selects", SelectSchema)