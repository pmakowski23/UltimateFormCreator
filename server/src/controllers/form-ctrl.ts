import { Request, Response } from 'express'
import Form, { IForm } from '../models/forms/form-model'

// POST /api/forms
export const createForm = async (req: Request, res: Response) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide form."
    })
  }

  try {
    var form = new Form(body);
  } catch (error) {
    return res.status(400).json({ success: false, error })
  }

  form.save().then(() => {
    return res.status(201).json({
      success: true,
      id: form._id,
      message: "Form created."
    })
  }).catch((error) => {
    return res.status(400).json({
      error,
      message: "Form not created due to error."
    })
  })
}

// GET /api/forms
export const getForms = async (_: Request, res: Response) => {
  await Form.find({}, (error, forms) => {
    if (error) {
      return res.status(400).json({ success: false, error })
    }
    if (!forms.length) {
      return res.status(404).json({ success: false, error: "No forms found." })
    }

    return res.status(200).json({ success: false, data: forms })
  }).catch(error => console.log(error))
}

// GET /api/forms/:id
export const getFormById = async (req: Request, res: Response) => {
  await Form.findOne({ _id: req.params.id }, (error: Error, form: IForm) => {
    if (error) {
      return res.status(400).json({ success: false, error })
    }
    if (!form) {
      return res.status(404).json({ success: false, error: "Form with this Id not found." })
    }

    return res.status(200).json({ success: true, data: form })
  }).catch(error => console.log(error))
}

// PUT /api/forms/:id
export const updateForm = async (req: Request, res: Response) => {
  await Form.findOne({ _id: req.params.id }, (error: Error, formToUpdate: IForm) => {
    if (error) {
      return res.status(400).json({ success: false, error })
    }
    if (!formToUpdate) {
      return res.status(404).json({ success: false, error: "Form with this Id not found." })
    }

    const { website, genId, name, formField } = req.body;

    if (website) {
      formToUpdate.website = website
    }
    if (genId) {
      formToUpdate.genId = genId
    }
    if (name) {
      formToUpdate.name = name
    }
    if (formField) {
      formToUpdate.formField = formField
    }

    formToUpdate.save().then(() => {
      return res.status(200).json({ success: true, data: formToUpdate })
    }).catch(error => console.log(error))
  })
}

// DELETE /api/forms/:id
export const deleteForm = async (req: Request, res: Response) => {
  await Form.findByIdAndDelete(req.params.id, req.body, (error, form) => {
    if (error) {
      return res.status(400).json({ success: false, error })
    }

    return res.status(204).json({ success: true, message: "form deleted succesfully" })
  })
}