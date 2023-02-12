import mysql from 'mysql2';
import dotenv from "dotenv"
dotenv.config()

// we move the secret information from the file to .env so that it's not leaked to everyone
const pool = mysql.createPool({
	host: process.env.HOST,
	user: process.env.USERNAME,
	password: process.env.PASSWORD,
	database: process.env.DB_NAME
}).promise();


export const getMarinas = async () => {
	const [result] = await pool.query(`
    SELECT * FROM mari
    `)
	return result
}

export const getSingleMarina = async (id) => {
	const [result] = await pool.query(`
    SELECT * FROM mari 
    WHERE id =?
    `, [id])
	return result[0]
}

export const getRandomMarina = async () => {
	const [result] = await pool.query(`
    SELECT * FROM mari
    ORDER BY RAND()
    LIMIT 1
    `)
	return result
}




export const creatMarina = async (song, lyrics) => {
	const [result] = await pool.query(`
    INSERT INTO mari (song, lyrics)
    VALUES(?,?)
    `, [song, lyrics])

	const id = result.insertId
	return getMarinas(id)
}
