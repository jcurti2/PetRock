const Rock = require('../models/rock');
const Owner = require('../models/owner');

const digUpNewRock = async (req, res) => {
    try{
        const rock = await new Rock(req.body)
        await rock.save()
        return res.status(201).json({
            rock,
        });
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

module.exports = {
    digUpNewRock,
}