import mongoose, { Schema, Document } from 'mongoose'

export interface SelectData {
  whichSelect: number,
  values: [string];
  defaultCheck: [boolean];
}

export interface ISelect extends SelectData, Document {
}

export const SelectSchema: Schema = new Schema({
  whichSelect:
  {
    type: Number,
    required: [true, "WhichSelect is required"],
    min: [1, "Can be ony 1-3"],
    max: [3, "Can be ony 1-3"]
  },
  values:
  {
    type: [String],
    required: [true, "Values are required"],
  },
  defaultCheck:
  {
    type: [Boolean],
    required: [true, "DefaultCheck array is required"]
  },
})

export default mongoose.model<ISelect>("Selects", SelectSchema)