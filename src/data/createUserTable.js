const pool = require('../config/db.js')

const createUserTable = async()=>{
    const queryText =`
    CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY  ,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
                                    ON UPDATE CURRENT_TIMESTAMP 
);
    `;
    try {
        pool.query(queryText);
        console.log("UserTable Created if not exists")
    } catch (error) {
        console.log("UserTable Error",error)
    }
}

module.exports=createUserTable;