const express=require('express');

const {matchNeighbourhoods}=require('../controllers/match');

const router=express.Router();

router.get('/:id', matchNeighbourhoods);

module.exports=router;