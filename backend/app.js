require('dotenv').config()
require('express-async-errors')

//express
const express = require('express')
const app = express()

//rest of the packages
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const rateLimiter = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss-clean');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const bodyParser = require('body-parser');



//database
const connectDB = require('./database/connectDB')

//routers
const authRouter = require('./routes/authRoutes')
const technicianRouter = require('./routes/technicianRoutes')
const customerRouter = require('./routes/customerRoutes') 
const postRouter = require('./routes/postRoutes')
const bidRouter = require('./routes/bidRoutes')
//middleware
const notFoundMiddleWare = require('./middleware/not-found')
const errorHandlerMiddleWare = require('./middleware/error-handler');
const Location = require('./models/Location');


app.set('trust proxy', 1);
/* app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 60,
  })
); */
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_SIDE_URL, credentials: true}));
app.use(xss());
app.use(mongoSanitize());


app.use(cookieParser(process.env.JWT_SECRET));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(express.json())

//routes
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/technicians', technicianRouter)
 app.use('/api/v1/customers', customerRouter) 
 app.use('/api/v1/posts', postRouter) 
 app.use('/api/v1/bids', bidRouter) 
//  app.get('/api/v1/trial', async(req,res)=>{
//      const locations = await Location.find()
//       res.status(200).json({locations})
//  })


app.use(errorHandlerMiddleWare)
app.use(notFoundMiddleWare)


const port = process.env.PORT || 4000

//server
const start = async()=>{
    try {
        connectDB(process.env.MONGO_URI)
        app.listen(port,()=>{console.log(`server listening on port ${port}`)})
    } catch (error) {
        console.log(error)        
    }
}

start()