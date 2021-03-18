import { Request, Response } from 'express'
import FormField, { IFormField } from '../models/forms/formField-model'

// POST /api/formFields
export const createFormField = async (req: Request, res: Response) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide formField."
    })
  }

  try {
    var formField = new FormField(body);
  } catch (error) {
    return res.status(400).json({ success: false, error })
  }

  formField.save().then(() => {
    return res.status(201).json({
      success: true,
      id: formField._id,
      message: "FormField created."
    })
  }).catch((error) => {
    return res.status(400).json({
      error,
      message: "FormField not created due to error."
    })
  })
}

// GET /api/formFields
export const getFormFields = async (_: Request, res: Response) => {
  await FormField.find({}, (error, formFields) => {
    if (error) {
      return res.status(400).json({ success: false, error })
    }
    if (!formFields.length) {
      return res.status(404).json({ success: false, error: "No formFields found." })
    }

    return res.status(200).json({ success: false, data: formFields })
  }).catch(error => console.log(error))
}

// GET /api/formFields/:id
export const getFormFieldById = async (req: Request, res: Response) => {
  await FormField.findOne({ _id: req.params.id }, (error: Error, formField: IFormField) => {
    if (error) {
      return res.status(400).json({ success: false, error })
    }
    if (!formField) {
      return res.status(404).json({ success: false, error: "FormField with this Id not found." })
    }

    return res.status(200).json({ success: true, data: formField })
  }).catch(error => console.log(error))
}

// PUT /api/formFields/:id
export const updateFormField = async (req: Request, res: Response) => {
  await FormField.findOne({ _id: req.params.id }, (error: Error, formFieldToUpdate: IFormField) => {
    if (error) {
      return res.status(400).json({ success: false, error })
    }
    if (!formFieldToUpdate) {
      return res.status(404).json({ success: false, error: "FormField with this Id not found." })
    }

    const { label, field_type, isRequired, placeholder, target, isDisabled, minValue, maxValue, Select, pattern } = req.body;

    if (label) {
      formFieldToUpdate.label = label
    }
    if (field_type) {
      formFieldToUpdate.field_type = field_type
    }
    if (isRequired) {
      formFieldToUpdate.isRequired = isRequired
    }
    if (placeholder) {
      formFieldToUpdate.placeholder = placeholder
    }
    if (target) {
      formFieldToUpdate.target = target
    }
    if (isDisabled) {
      formFieldToUpdate.isDisabled = isDisabled
    }
    if (minValue) {
      formFieldToUpdate.minValue = minValue
    }
    if (maxValue) {
      formFieldToUpdate.maxValue = maxValue
    }
    if (Select) {
      formFieldToUpdate.Select = Select
    }
    if (pattern) {
      formFieldToUpdate.pattern = pattern
    }

    formFieldToUpdate.save().then(() => {
      return res.status(200).json({ success: true, data: formFieldToUpdate })
    }).catch(error => console.log(error))
  })
}

// DELETE /api/formFields/:id
export const deleteFormField = async (req: Request, res: Response) => {
  await FormField.findByIdAndDelete(req.params.id, req.body, (error, formField) => {
    if (error) {
      return res.status(400).json({ success: false, error })
    }

    return res.status(204).json({ success: true, message: "formField deleted succesfully" })
  })
}