import mongoose, { Schema, Document } from 'mongoose'

export interface FormData {
  website: string;
  genId: string;
  name: string;
  formField: [string];
}

export interface IForm extends FormData, Document {
}

export const FormSchema: Schema = new Schema({
  website: { type: mongoose.Schema.Types.ObjectId, ref: 'Websites', required: [true, "Website is required"] },
  genId: { type: String, required: true },
  name: { type: String, required: true },
  formField: { type: [mongoose.Schema.Types.ObjectId], required: [true, "FormField is required"] }
})

export default mongoose.model<IForm>("Forms", FormSchema)