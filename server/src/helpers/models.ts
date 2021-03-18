import Form from '../models/forms/form-model'
import FormField from '../models/forms/formField-model'
import ReceivedForm from '../models/forms/receivedForm-model'
import Select from '../models/forms/select-model'
import User from '../models/users/user-model'
import Website from '../models/users/website-model'

export interface IModel {
  form: typeof Form;
  formField: typeof FormField;
  receivedForm: typeof ReceivedForm;
  select: typeof Select;
  user: typeof User;
  website: typeof Website;
}