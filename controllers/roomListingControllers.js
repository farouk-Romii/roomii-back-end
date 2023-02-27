const roomListingsModels = require("../models/roomListingModels.js");

const getlist = async (req,res)=> {
    const data = await roomListingsModels.getListing();
    return data ? res.status(200).send(data) : res.sendStatus(404);
}



const  createList = async (req,res) => {
    const {description,photos,price,location} = req.body;
    const data = await roomListingsModels.createListing(description,photos,price,location);
    return data ? res.status(200).send(data) : res.sendStatus(404);


}


const changeList = async (req,res) => {
    const {description,photos,price,location,id} = req.body;
    const data = await roomListingsModels.changeListing(description,photos,price,location,id);
    return data ? res.status(200).send(data) : res.sendStatus(404);

}

const deletList = async (req,res) => {
    let id = req.params.id;
    let data = await roomListingsModels.deleteListing(id);
    return data ? res.status(200).send(data) : res.sendStatus(404);
}

module.exports = {
    getlist,
    createList,
    changeList,
    deletList
}