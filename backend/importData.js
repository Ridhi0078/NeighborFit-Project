const mongoose=require('mongoose');
const fs=require('fs');
const dotenv = require('dotenv');
const Neighbourhood=require('./models/neighbour');

dotenv.config({ path: './config.env' });

mongoose.connect(process.env.MONGO_URL);

const data = JSON.parse(fs.readFileSync('./delhi_neighborhoodsfile.json', 'utf-8'));

Neighbourhood.insertMany(data)
.then(()=>{
    console.log('Neighbourhood data imported successfully');
    mongoose.disconnect();
})
.catch((err)=>{
    console.error('Error importing data: ', err);
    mongoose.disconnect();
});
