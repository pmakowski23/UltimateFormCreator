import Form, { FormData, IForm } from '../models/forms/form-model'
import FormField, { FormFieldData, IFormField } from '../models/forms/formField-model'
import ReceivedForm, { IReceivedForm, ReceivedFormData } from '../models/forms/receivedForm-model'
import Select, { ISelect, SelectData } from '../models/forms/select-model'
import User, { IUser, UserData } from '../models/users/user-model'
import Website, { IWebsite, WebsiteData } from '../models/users/website-model'

export interface IModelTypes {
  form: typeof Form;
  formField: typeof FormField;
  receivedForm: typeof ReceivedForm;
  select: typeof Select;
  user: typeof User;
  website: typeof Website;
}

export type anyOfTypes<T> = T[keyof T]

export interface IModelKeys {
  form: keyof FormData;
  formField: keyof FormFieldData;
  receivedForm: keyof ReceivedFormData;
  select: keyof SelectData;
  user: keyof UserData;
  website: keyof WebsiteData;
}

export interface IModelData {
  form: FormData;
  formField: FormFieldData;
  receivedForm: ReceivedFormData;
  select: SelectData;
  user: UserData;
  website: WebsiteData;
}

export interface IModel {
  form: IForm;
  formField: IFormField;
  receivedForm: IReceivedForm;
  select: ISelect;
  user: IUser;
  website: IWebsite;
}