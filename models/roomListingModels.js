const pool = require("../db.js");

const getListing = async() => {
      let data = await pool.query("SELECT * FROM public.room_listings").then(result => { return result.rows });
      return data;
}


const createListing = async (description,photos,price,location) => {
    let data = await pool.query("INSERT INTO public.room_listings (description,photos,price,location) VALUES($1,$2,$3,$4) RETURNING *",[description,photos,price,location]).then(result => {return result.rows[0]})
    return data;
}


const changeListing = async (description,photos,price,location,id) => {
    let data = await pool.query('UPDATE public.room_listings SET description = $1 photos = $2 price = $3 location = $4 WHERE id = $2 RETURNING *',[description,photos,price,location,id]).then(result => {return result.rows[0]});
    return data;
}

const deleteListing = async (id) => {
    let data=  pool.query('DELETE FROM public.room_listings  WHERE id = $1',[id]).then(result => {return result.rows[0]});
    return data;
}

const getRoomById = async (id) => {
    let data = await pool.query("SELECT * FROM public.room_listings WHERE id = $1",[id]).then(result => { return result.rows[0] });
    return data;
}

module.exports = {
    getListing,
    createListing,
    changeListing,
    deleteListing,
    getRoomById
}