import { Request, Response } from 'express'
import Select, { ISelect } from '../models/forms/select-model'

// POST /api/selects
export const createSelect = async (req: Request, res: Response) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide select."
    })
  }

  try {
    var select = new Select(body);
  } catch (error) {
    return res.status(400).json({ success: false, error })
  }

  select.save().then(() => {
    return res.status(201).json({
      success: true,
      id: select._id,
      message: "Select created."
    })
  }).catch((error) => {
    return res.status(400).json({
      error,
      message: "Select not created due to error."
    })
  })
}

// GET /api/selects
export const getSelects = async (_: Request, res: Response) => {
  await Select.find({}, (error, selects) => {
    if (error) {
      return res.status(400).json({ success: false, error })
    }
    if (!selects.length) {
      return res.status(404).json({ success: false, error: "No selects found." })
    }

    return res.status(200).json({ success: false, data: selects })
  }).catch(error => console.log(error))
}

// GET /api/selects/:id
export const getSelectById = async (req: Request, res: Response) => {
  await Select.findOne({ _id: req.params.id }, (error: Error, select: ISelect) => {
    if (error) {
      return res.status(400).json({ success: false, error })
    }
    if (!select) {
      return res.status(404).json({ success: false, error: "Select with this Id not found." })
    }

    return res.status(200).json({ success: true, data: select })
  }).catch(error => console.log(error))
}

// PUT /api/selects/:id
export const updateSelect = async (req: Request, res: Response) => {
  await Select.findOne({ _id: req.params.id }, (error: Error, selectToUpdate: ISelect) => {
    if (error) {
      return res.status(400).json({ success: false, error })
    }
    if (!selectToUpdate) {
      return res.status(404).json({ success: false, error: "Select with this Id not found." })
    }

    const { whichSelect, values, defaultCheck } = req.body;

    if (whichSelect) {
      selectToUpdate.whichSelect = whichSelect
    }
    if (values) {
      selectToUpdate.values = values
    }
    if (defaultCheck) {
      selectToUpdate.defaultCheck = defaultCheck
    }

    selectToUpdate.save().then(() => {
      return res.status(200).json({ success: true, data: selectToUpdate })
    }).catch(error => console.log(error))
  })
}

// DELETE /api/selects/:id
export const deleteSelect = async (req: Request, res: Response) => {
  await Select.findByIdAndDelete(req.params.id, req.body, (error, select) => {
    if (error) {
      return res.status(400).json({ success: false, error })
    }

    return res.status(204).json({ success: true, message: "select deleted succesfully" })
  })
}