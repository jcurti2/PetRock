const Rock = require('../models/rock');
const Owner = require('../models/owner');

const getOwnerByOwnerName = async (req, res) => {
    try{
        const  id  = req.params.name
        
        // const query = { owner_id:id }
        const owner = await Owner.findOne({ name:id  });
        if(owner) {
            return res.status(200).json({ owner });
        } 
        return res.status(404).send('Owner with that Owner ID does not exist');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getRockByOwnerId = async (req, res) => {
    try{
        const  id  = req.params.owner_id
        
        // const query = { owner_id:id }
        const rock = await Rock.find({ owner_id:id  });
        if(rock) {
            return res.status(200).json({ rock });
        } 
        return res.status(404).send('Rock with that Owner ID does not exist');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

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

const getAllRocks = async (req, res) => {
    try {
        const rocks = await Rock.find()
        return res.status(200).json({ rocks })
    } catch (error) {
        return res.status(400).send(error.message)
    }
}

const getRockById = async (req, res) => {

    console.log("get rock by id");

    try{
        const { id } = req.params;
        const rock = await Rock.findById(id)
        if(rock) {
            return res.status(200).json({ rock });
        } 
        return res.status(404).send('Rock with that ID does not exist');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}



const updateRock = async (req,res) => {
    try {
        const rock = await Rock.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.status(200).json(rock)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteRock = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Rock.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Rock smashed into oblivion');
        }
        throw new Error('Rock not found');
    } catch (error) {
        return res.status(400).send(error.message);
    }
}

const newOwner = async (req, res) => {
    try{
        const owner = await new Owner(req.body)
        await owner.save()
        return res.status(201).json({
            owner,
        });
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

const getAllOwners = async (req, res) => {
    try {
        const owner = await Owner.find()
        return res.status(200).json({ owner })
    } catch (error) {
        return res.status(400).send(error.message)
    }
}

const getOwnerById = async (req, res) => {
    try{
        const { id } = req.params;
        const owner = await Owner.findById(id)
        if(owner) {
            return res.status(200).json({ owner });
        } 
        return res.status(404).send('Owner with that ID does not exist');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateOwner = async (req,res) => {
    try {
        const owner = await Owner.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.status(200).json(owner)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteOwner = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Owner.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Owner smashed into oblivion');
        }
        throw new Error('Owner not found');
    } catch (error) {
        return res.status(400).send(error.message);
    }
}



module.exports = {
    digUpNewRock,
    getAllRocks,
    getRockById,
    updateRock,
    deleteRock,
    newOwner,
    getAllOwners,
    getOwnerById,
    updateOwner,
    deleteOwner,
    getRockByOwnerId,
    getOwnerByOwnerName
}