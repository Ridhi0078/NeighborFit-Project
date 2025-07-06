const express = require('express');
//const isLoggedIn=require("./../middlewares/isLoggedIn");

const {
    handleGetAllNeighbours,
    getNeighbourhoodById,
    handleDeleteById,
    handleCreateNeighbourhood,
} = require('../controllers/neighbour');
const router = express.Router();

router
    .route("/")
    .get(handleGetAllNeighbours)
    .post(handleCreateNeighbourhood);

router
    .route("/:id")
    .get(getNeighbourhoodById)
    .delete(handleDeleteById);


module.exports = router;
