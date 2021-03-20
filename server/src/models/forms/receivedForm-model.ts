import mongoose, { Schema, Document } from 'mongoose'

export interface ReceivedFormData {
  form: string,
  inputName: [string]; // [name of the input element]
  inputValue: [string]; // [value sent by user]
}

export interface IReceivedForm extends ReceivedFormData, Document {
}

export const ReceivedFormSchema: Schema = new Schema({
  form: { type: mongoose.Schema.Types.ObjectId, ref: "Forms", required: true },
  inputName: { type: [String], required: true },
  inputValue: { type: [String], required: true }
})

export default mongoose.model<IReceivedForm>("ReceivedForms", ReceivedFormSchema)