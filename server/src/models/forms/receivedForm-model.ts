import mongoose, { Schema, Document } from 'mongoose'

export interface IReceivedForm extends Document {
  form: string,
  inputName: [string]; // [name of the input element]
  inputValue: [string]; // [value sent by user]
}

export const ReceivedFormSchema: Schema = new Schema({
  form: { type: mongoose.Schema.Types.ObjectId, ref: "Forms", required: true },
  inputName: { type: [String], required: true },
  inputValue: { type: [String], required: true }
})

export default mongoose.model<IReceivedForm>("ReceivedForms", ReceivedFormSchema)