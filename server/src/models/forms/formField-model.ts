import mongoose, { Schema, Document } from 'mongoose'
import { ISelect, SelectSchema } from './select-model'

export interface FormFieldData {
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

export interface IFormField extends FormFieldData, Document {
}

export const FormFieldSchema: Schema = new Schema({
  label: { type: String, required: true },
  field_type: { type: String, required: true }, // TODO: must be one of html types 
  isRequired: { type: Boolean, required: true },

  placeholder: { type: String, required: false }, // TODO: less than 40 characters
  target: { type: String, required: false }, // TODO: must be only one of html types
  isDisabled: { type: Boolean, required: false },
  minValue: { type: Number, required: false },
  maxValue: { type: Number, required: false },
  Select: { type: SelectSchema, required: false }, // TODO: is required when field_type === select | checkbox | radio
  pattern: { type: String, required: false } // TODO: must be valid regex
})

export default mongoose.model<ISelect>("FormFields", FormFieldSchema)