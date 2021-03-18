import { Request, Response } from 'express'
import ReceivedForm, { IReceivedForm } from '../models/forms/receivedForm-model'

// POST /api/receivedForms
export const createReceivedForm = async (req: Request, res: Response) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide receivedForm."
    })
  }

  try {
    var receivedForm = new ReceivedForm(body);
  } catch (error) {
    return res.status(400).json({ success: false, error })
  }

  receivedForm.save().then(() => {
    return res.status(201).json({
      success: true,
      id: receivedForm._id,
      message: "ReceivedForm created."
    })
  }).catch((error) => {
    return res.status(400).json({
      error,
      message: "ReceivedForm not created due to error."
    })
  })
}

// GET /api/receivedForms
export const getReceivedForms = async (_: Request, res: Response) => {
  await ReceivedForm.find({}, (error, receivedForms) => {
    if (error) {
      return res.status(400).json({ success: false, error })
    }
    if (!receivedForms.length) {
      return res.status(404).json({ success: false, error: "No receivedForms found." })
    }

    return res.status(200).json({ success: false, data: receivedForms })
  }).catch(error => console.log(error))
}

// GET /api/receivedForms/:id
export const getReceivedFormById = async (req: Request, res: Response) => {
  await ReceivedForm.findOne({ _id: req.params.id }, (error: Error, receivedForm: IReceivedForm) => {
    if (error) {
      return res.status(400).json({ success: false, error })
    }
    if (!receivedForm) {
      return res.status(404).json({ success: false, error: "ReceivedForm with this Id not found." })
    }

    return res.status(200).json({ success: true, data: receivedForm })
  }).catch(error => console.log(error))
}

// PUT /api/receivedForms/:id
export const updateReceivedForm = async (req: Request, res: Response) => {
  await ReceivedForm.findOne({ _id: req.params.id }, (error: Error, receivedFormToUpdate: IReceivedForm) => {
    if (error) {
      return res.status(400).json({ success: false, error })
    }
    if (!receivedFormToUpdate) {
      return res.status(404).json({ success: false, error: "ReceivedForm with this Id not found." })
    }

    const { form, inputName, inputValue } = req.body;

    if (form) {
      receivedFormToUpdate.form = form
    }
    if (inputName) {
      receivedFormToUpdate.inputName = inputName
    }
    if (inputValue) {
      receivedFormToUpdate.inputValue = inputValue
    }

    receivedFormToUpdate.save().then(() => {
      return res.status(200).json({ success: true, data: receivedFormToUpdate })
    }).catch(error => console.log(error))
  })
}

// DELETE /api/receivedForms/:id
export const deleteReceivedForm = async (req: Request, res: Response) => {
  await ReceivedForm.findByIdAndDelete(req.params.id, req.body, (error, receivedForm) => {
    if (error) {
      return res.status(400).json({ success: false, error })
    }

    return res.status(204).json({ success: true, message: "receivedForm deleted succesfully" })
  })
}