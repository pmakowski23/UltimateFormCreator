import mongoose, { Model } from 'mongoose';
import { IForm } from '../models/form-model'
import { IFormField } from '../models/formField-model'
import { IReceivedForm } from '../models/receivedForm-model'
import { ISelect } from '../models/select-model'
import { IUser } from '../models/user-model'
import { IWebsite } from '../models/website-model'

export interface IModel {
  form: mongoose.Model<IForm, {}>;
  formField: mongoose.Model<IFormField, {}>;
  receivedForm: mongoose.Model<IReceivedForm, {}>;
  select: mongoose.Model<ISelect, {}>;
  user: mongoose.Model<IUser, {}>;
  website: mongoose.Model<IWebsite, {}>;
}

export const checkIfUnique = async (model: IModel[keyof IModel], key: string, value: string) => {
  const query = await model.findOne({ [key]: value })
  return !query
}