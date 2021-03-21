import mongoose, { Schema, Document } from 'mongoose'

export interface UserData {
  name: string;
  token: string;
}

export interface IUser extends UserData, Document {
}

export const UserSchema: Schema = new Schema({
  name: { type: String, required: [true, "Name is required"] },
  token: { type: String, required: [true, "Token is required"] }
})

export default mongoose.model<IUser>("Users", UserSchema)