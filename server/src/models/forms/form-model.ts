import mongoose, { Schema, Document } from 'mongoose'

export interface IForm extends Document {
  website: string;
  genId: string;
  name: string;
  formField: [string];
}

export const FormSchema: Schema = new Schema({
  website: { type: mongoose.Schema.Types.ObjectId, ref: 'Websites', required: true },
  genId: { type: String, required: true }, // TODO: must be generated and unique among forms in webiste ()
  name: { type: String, required: true }, // TODO: must be unique
  formField: { type: [mongoose.Schema.Types.ObjectId], required: true }
})

export default mongoose.model<IForm>("Forms", FormSchema)