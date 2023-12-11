require('dotenv').config()
const mongoose = require('mongoose');
const Location = require('./models/Location');
const locationsJSON = require("./location.json")
const fs = require('fs/promises');
const Technician = require('./models/Technician');
const technicians = require('./users.json')

const addToDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        await Technician.deleteMany();
        await Technician.create(technicians)
        console.log('success!!!')
        process.exit(0)
    }catch (error) {
        console.log(error)
        process.exit(1)
    }
}

//addToDB()
const fetchAndSaveUsers = async () => {
    try {
      // Connect to MongoDB
      await mongoose.connect(process.env.MONGO_URI);
  
      // Fetch users from the database
      const users = await Technician.find();
  
      // Convert users array to JSON string
      const usersJSON = JSON.stringify(users, null, 2);
  
      // Write JSON data to a file (users.json in this example)
      await fs.writeFile('./users.json', usersJSON);
  
      console.log('Users data successfully fetched and saved to users.json');
    } catch (error) {
      console.error('Error fetching and saving users data:', error);
    } finally {
      // Disconnect from MongoDB
      await mongoose.disconnect();
    }
  };


//   fetchAndSaveUsers()