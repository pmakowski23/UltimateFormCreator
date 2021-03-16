import { Request, Response } from 'express'
import Website, { IWebsite } from '../models/website-model'

// POST /api/websites
export const createWebsite = async (req: Request, res: Response) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide website."
    })
  }

  try {
    var website = new Website(body);
  } catch (error) {
    return res.status(400).json({ success: false, error })
  }

  website.save().then(() => {
    return res.status(201).json({
      success: true,
      id: website._id,
      message: "Website created."
    })
  }).catch((error) => {
    return res.status(400).json({
      error,
      message: "Website not created due to error."
    })
  })
}

// GET /api/websites
export const getWebsites = async (_: Request, res: Response) => {
  await Website.find({}, (error, websites) => {
    if (error) {
      return res.status(400).json({ success: false, error })
    }
    if (!websites.length) {
      return res.status(404).json({ success: false, error: "No websites found." })
    }

    return res.status(200).json({ success: false, data: websites })
  }).catch(error => console.log(error))
}

// GET /api/websites/:id
export const getWebsiteById = async (req: Request, res: Response) => {
  await Website.findOne({ _id: req.params.id }, (error: Error, website: IWebsite) => {
    if (error) {
      return res.status(400).json({ success: false, error })
    }
    if (!website) {
      return res.status(404).json({ success: false, error: "Website with this Id not found." })
    }

    return res.status(200).json({ success: true, data: website })
  }).catch(error => console.log(error))
}

// PUT /api/websites/:id
export const updateWebsite = async (req: Request, res: Response) => {
  await Website.findOne({ _id: req.params.id }, (error: Error, websiteToUpdate: IWebsite) => {
    if (error) {
      return res.status(400).json({ success: false, error })
    }
    if (!websiteToUpdate) {
      return res.status(404).json({ success: false, error: "Website with this Id not found." })
    }

    const { user, name, url } = req.body;

    if (user) {
      websiteToUpdate.user = user
    }
    if (name) {
      websiteToUpdate.name = name
    }
    if (url) {
      websiteToUpdate.url = url
    }

    websiteToUpdate.save().then(() => {
      return res.status(200).json({ success: true, data: websiteToUpdate })
    }).catch(error => console.log(error))
  })
}

// DELETE /api/websites/:id
export const deleteWebsite = async (req: Request, res: Response) => {
  await Website.findByIdAndDelete(req.params.id, req.body, (error, website) => {
    if (error) {
      return res.status(400).json({ success: false, error })
    }

    return res.status(204).json({ success: true, message: "website deleted succesfully" })
  })
}