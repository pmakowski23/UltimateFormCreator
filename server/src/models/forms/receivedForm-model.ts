import mongoose, { Schema, Document } from 'mongoose'

export interface ReceivedFormData {
  form: string,
  inputName: Array<string>; // [name of the input element]
  inputValue: Array<string>; // [name of the input element]; // [value sent by user]
}

export interface IReceivedForm extends ReceivedFormData, Document {
}

export const ReceivedFormSchema: Schema = new Schema({
  form: { type: mongoose.Schema.Types.ObjectId, ref: "Forms", required: [true, "Form is required"] },
  inputName: { type: [String], required: [true, "InputName is required"] },
  inputValue: { type: [String], required: [true, "InputValue is required"] } // TODO: check if length is equal to input name len
})

export default mongoose.model<IReceivedForm>("Receivedforms", ReceivedFormSchema)