import express from "express"
import UsersModel from "./model.js"

const usersRouter = express.Router()

usersRouter.post("/", async (req, res, next) => {
  try {
    const newUser = new UsersModel(req.body) // here it happens the validation of req.body, if it is not ok Mongoose will throw an error (if it is ok it is NOT saved yet)
    const { _id } = await newUser.save()
    res.status(201).send({ _id })
  } catch (error) {
    next(error)
  }
})

usersRouter.get("/", async (req, res, next) => {
  try {
  } catch (error) {
    next(error)
  }
})

usersRouter.get("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    next(error)
  }
})

usersRouter.put("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    next(error)
  }
})

usersRouter.delete("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    next(error)
  }
})

export default usersRouter
