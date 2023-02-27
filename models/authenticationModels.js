const pool = require("../db.js");

const registerInfo = async (firstName,lastName,email,type,userName,password) => {
    const register = await pool.query("INSERT INTO public.users (first_name,last_name,email,type,username,password) VALUES($1,$2,$3,$4,$5,$6) RETURNING *",[firstName,lastName,email,type,userName,password]).then(result => result.rows[0])
    return register;
}
const loginInfo = async  (userName) => {
    const data = await pool.query("SELECT * FROM public.users WHERE username = $1",[userName]).then(result=> {return result.rows});
    return data;
}
module.exports = {
    registerInfo,
    loginInfo
}