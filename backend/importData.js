const mongoose=require('mongoose');
const fs=require('fs');
const Neighbourhood=require('./models/neighbour');

mongoose.connect('mongodb://127.0.0.1:27017/NeighborFit');

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
