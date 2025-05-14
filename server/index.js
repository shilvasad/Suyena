import express from 'express'
import cors from 'cors'
import { configDotenv } from 'dotenv'

// Dotenv configuration
// This will load environment variables from a .env file into process.env
configDotenv()

// Express app initialization
const app = express()
const PORT = process.env.PORT || 3000
// Middleware
// CORS middleware to allow cross-origin requests
app.use(cors())
// Body parser middleware to parse JSON request bodies
// This middleware is used to parse incoming request bodies in a middleware before your handlers, which allows you to access the parsed data in req.body.
app.use(express.json())


// First route to test the server
app.get('/', (req, res)=>{
    res.status(200).send(
        `Server api is running.`
    )
})


// Starting the server
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
    console.log(`http://localhost:${PORT}`)
})

// Exporting the app for testing
export default app