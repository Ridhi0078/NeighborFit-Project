const Neighbourhood = require('../models/neighbour');

async function handleGetAllNeighbours(req, res) {
    const allDbNeighbours = await Neighbourhood.find({});
    return res.json(allDbNeighbours);
}

async function getNeighbourhoodById(req, res) {
    const neighbour = await Neighbourhood.findById(req.params.id);
    if (!neighbour) {
        return res.status(404).json({ error: "user not found" });
    }
    return res.json(neighbour);
}

async function handleDeleteById(req, res) {
    // Todo: Delete the user with id
    await Neighbourhood.findByIdAndDelete(req.params.id);
    return res.json({ status: "Success" });
}

async function handleCreateNeighbourhood(req, res) {
    const body = req.body;

    if (
        !body.name ||
        !body.city ||
        !body.safety ||
        !body.affordability ||
        !body.public_transport ||
        !body.walkability ||
        !body.noise_level ||
        !body.green_space ||
        !body.internet_speed ||
        !body.climate_score ||
        !body.description
    ) {
        return res.status(400).json({ msg: "All fields are required..." });
    }

    const result = await Neighbourhood.create({
        name: body.name,
        city: body.city,
        safety: body.safety,
        affordability: body.affordability,
        public_transport: body.public_transport,
        walkability: body.walkability,
        noise_level: body.noise_level,
        green_space: body.green_space,
        internet_speed: body.internet_speed,
        climate_score: body.climate_score,
        description: body.description,
    });

    console.log(result);
    return res.status(201).json({ msg: "success", data: result });
    
}

module.exports = {
    handleGetAllNeighbours,
    getNeighbourhoodById,
    handleDeleteById,
    handleCreateNeighbourhood
}

