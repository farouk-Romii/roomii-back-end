const pool = require("../db.js");

const addToFav = async(userId,listId)=> {
    let data = await pool.query("INSERT INTO public.favorites (user_id,room_listing_id) VALUES($1,$2) RETURNING *",[userId,listId]).then(result => {return result.rows[0]})
    return data;
};


const removeFromFav = async(id)=> {
    let data = await pool.query('DELETE FROM public.favorites  WHERE id = $1',[id]).then(result => {return result.rows[0]});
    return data;
};


const viewYourFav = async(userId) => {
    let data = await pool.query('SELECT * FROM public.favorites JOIN public.room_listings ON public.room_listings.id = public.favorites.room_listing_id WHERE favorites.user_id = $1',[userId]).then(result => {return result.rows});
    return data
};


module.exports = {
    removeFromFav,
    viewYourFav,
    addToFav
}