import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import listEndpoints from "express-list-endpoints"

const server = express()
const port = process.env.PORT || 3001

// ****************************************************** MIDDLEWARES **********************************************

server.use(cors())
server.use(express.json())

// ******************************************************* ENDPOINTS ***********************************************

// ***************************************************** ERROR HANDLERS ********************************************

mongoose.connect(process.env.MONGO_CONNECTION_URL)

mongoose.connection.on("connected", () => {
  console.log("Successfully connected to Mongo!")
  server.listen(port, () => {
    console.table(listEndpoints(server))
    console.log(`Server is running on port ${port}`)
  })
})
