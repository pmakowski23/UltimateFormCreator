import mongoose, { Schema, Document } from 'mongoose'

export interface WebsiteData {
  user: string;
  name: string;
  url: string;
}

export interface IWebsite extends WebsiteData, Document {
}

export const WebsiteSchema: Schema = new Schema({
  user:
  {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Users',
    required: [true, "User is required"]
  },
  name: { type: String, required: [true, "Name is required"] },
  url: { type: String, required: [true, "URL is required"] }
})

export default mongoose.model<IWebsite>("Websites", WebsiteSchema)