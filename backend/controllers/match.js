const Neighbourhood = require('../models/neighbour');
const User = require('../models/user');

async function matchNeighbourhoods(req, res) {
    const userId = req.params.id;

    try {
        const user = await User.findById(userId);

        if (!user || !user.preferences) {
            return res.status(404).json({ msg: " User or preferences not found " });
        }
        const preferences = user.preferences;

        const allNeighborhoods = await Neighbourhood.find({});

        const score = allNeighborhoods.map((n) => {
            const distance = Math.sqrt(
                (preferences.safety - n.safety) ** 2 +
                (preferences.affordability - n.affordability) ** 2 +
                (preferences.public_transport - n.public_transport) ** 2 +
                (preferences.walkability - n.walkability) ** 2 +
                (preferences.noise_level - n.noise_level) ** 2 +
                (preferences.green_space - n.green_space) ** 2 +
                (preferences.internet_speed - n.internet_speed) ** 2 +
                (preferences.climate_score - n.climate_score) ** 2
            );

            return {neighborhood:n,distance};
        });

        score.sort((a,b)=> a.distance-b.distance);

        const top=score.slice(0,5).map((s)=> s.neighborhood);
        return res.json({ matches: top});
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ msg: "Matching Failed", error: err.message});
    }
}

module.exports ={
    matchNeighbourhoods
};