import mongoose, { Schema, Document } from 'mongoose'

export interface WebsiteData {
  user: string;
  name: string;
  url: string;
}

export interface IWebsite extends WebsiteData, Document {
}

export const WebsiteSchema: Schema = new Schema({
  user: { type: [mongoose.Schema.Types.ObjectId], ref: 'Users', required: true },
  name: { type: String, required: true }, // TODO: must be unique
  url: { type: String, required: true } // TODO: must be unique
})

export default mongoose.model<IWebsite>("Websites", WebsiteSchema)