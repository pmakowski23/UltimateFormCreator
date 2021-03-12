import mongoose, {Schema, Document} from 'mongoose';

export interface IUser extends Document {
  name: string;
  website_urls: Array<String>;
  forms: Array<String>;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  website_urls: { type: [String],  required: false},
  forms: {type: [String], required: false}
})

module.exports = mongoose.model<IUser>("Users", UserSchema);