import mongoose, { Schema, Document } from 'mongoose'

export interface IUser extends Document {
  name: string;
  token: string;
}

export const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  token: { type: String, required: true }
})

export default mongoose.model<IUser>("Users", UserSchema)