import mongoose, { Schema, Document } from 'mongoose'
import { ISelect, SelectSchema } from './select-model'

export interface FormFieldData {
  label: string;
  field_type: "text" | "select" | "checkbox" | "radio" | "textarea" |
  "password" | "email" | "number" | "date" | "time" | "button" | "phone";
  isRequired: boolean;
  placeholder?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  isDisabled?: boolean;
  minValue?: string;
  maxValue?: string;
  Select?: ISelect;
  pattern?: string;
}

export interface IFormField extends FormFieldData, Document {
}

export const FormFieldSchema: Schema = new Schema({
  label: { type: String, required: [true, "Label is required"] },
  field_type:
  {
    type: String,
    enum: [
      "text",
      "select",
      "checkbox",
      "radio",
      "textarea",
      "password",
      "email",
      "number",
      "date",
      "time",
      "button",
      "phone"
    ],
    required: [true, "FieldType is required"]
  },
  isRequired: { type: Boolean, required: [true, "IsRequired is required"] },

  placeholder: { type: String, required: false },
  target: { type: String, enum: ["_blank", "_self", "_parent", "_top"], required: false },
  isDisabled: { type: Boolean, required: false },
  minValue: { type: Number, required: false },
  maxValue: { type: Number, required: false, },
  Select: {
    type: SelectSchema, required: function (this: IFormField) {
      return this.field_type === ("select" || "checkbox" || "radio");
    }
  },
  pattern: { type: String, required: false }
})

export default mongoose.model<ISelect>("Formfields", FormFieldSchema)