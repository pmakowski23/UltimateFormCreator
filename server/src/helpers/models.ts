import Form, { IForm } from '../models/forms/form-model'
import FormField, { IFormField } from '../models/forms/formField-model'
import ReceivedForm, { IReceivedForm } from '../models/forms/receivedForm-model'
import Select, { ISelect } from '../models/forms/select-model'
import User, { IUser } from '../models/users/user-model'
import Website, { IWebsite } from '../models/users/website-model'

export interface IModelTypes {
  form: typeof Form;
  formField: typeof FormField;
  receivedForm: typeof ReceivedForm;
  select: typeof Select;
  user: typeof User;
  website: typeof Website;
}

export interface IModelKeys {
  form: keyof IForm;
  formField: keyof IFormField;
  receivedForm: keyof IReceivedForm;
  select: keyof ISelect;
  user: keyof IUser;
  website: keyof IWebsite;
}

export interface IModel {
  form: IForm;
  formField: IFormField;
  receivedForm: IReceivedForm;
  select: ISelect;
  user: IUser;
  website: IWebsite;
}