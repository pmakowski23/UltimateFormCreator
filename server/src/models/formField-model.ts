import mongoose, { Schema, Document } from 'mongoose'
import { ISelect, SelectSchema } from './select-model'

export interface IFormField extends Document {
  label: string;
  field_type: string;
  isRequired: boolean;
  placeholder: string;
  target: string;
  isDisabled: boolean;
  minValue: string;
  maxValue: string;
  Select: ISelect;
  pattern: string;
}

export const FormFieldSchema: Schema = new Schema({
  label: { type: String, required: true },
  field_type: { type: String, required: true },
  isRequired: { type: Boolean, required: true },
  placeholder: { type: String, required: false },
  target: { type: String, required: false },
  isDisabled: { type: Boolean, required: false },
  minValue: { type: String, required: false },
  maxValue: { type: String, required: false },
  Select: { type: SelectSchema, required: false },
  pattern: { type: String, required: false }
})

export default mongoose.model<ISelect>("FormFields", FormFieldSchema)