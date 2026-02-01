const pool = require('../config/db.js');

exports.getAllUsers = ( async() =>{
    const [rows] = await pool.query ("SELECT * FROM users");
    return rows;
});

exports.createUser =( async(name,email) => {
    const [result] = await pool.query ("INSERT INTO users (name,email) values (?,?)", [name,email]);
    return result;
})

exports.getUserById =( async(id) => {
    const [rows] = await pool.query("SELECT * FROM users WHERE id = ?",[id]);
    return rows[0];
})

exports.updateUser = ( async(id,name,email)=>{
    const [result] = await pool.query("UPDATE users SET name=? ,email=? WHERE id=?",[name,email,id]);
    return result;
})

exports.deleteUser =(async (id)=> {
    const [result] = await pool.query("DELETE FROM users WHERE id=?",[id]);
    return result;
})