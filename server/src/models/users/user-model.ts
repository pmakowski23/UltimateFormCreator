import mongoose, { Schema, Document } from 'mongoose'

export interface UserData {
  name: string;
  token: string;
}

export interface IUser extends UserData, Document {
}

export const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  token: { type: String, required: true }
})

export default mongoose.model<IUser>("Users", UserSchema)