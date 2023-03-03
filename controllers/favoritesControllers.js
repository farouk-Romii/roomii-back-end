const favoritesModels = require("../models/favoritesModels.js");


const addFav = async(req,res) => {
    const {userId,listId} = req.body;
    const data = await favoritesModels.addToFav(userId,listId)
    return data ? res.status(200).send(data) : res.sendStatus(404)


}


const removeFav = async (req,res) => {
    const listId = req.params.listId;
    const userId = req.params.userId;
    const data = await favoritesModels.removeFromFav(listId,userId);
    console.log(data)
    return data ? res.status(200).send({message: "data deleted"}) : res.sendStatus(404);
    
}

const viewFav = async (req,res) => {
    const id = req.params.id;
    const data = await favoritesModels.viewYourFav(id);
    return data ? res.status(200).send(data) : res.sendStatus(404)

}





module.exports = {
    addFav,
    removeFav,
    viewFav
}