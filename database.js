import mysql from 'mysql2';

const pool = mysql.createPool({
    host:'127.0.0.1',
    user: 'lag',
    password:'rer3rer3',
    database:'marina'
}).promise();


 export const getMarinas = async()=>{
    const [result] = await pool.query(`
    SELECT * FROM mari
    `)
    return result
 }

 export const getSingleMarina = async(id)=>{
    const [result] = await pool.query(`
    SELECT * FROM mari 
    WHERE id =?
    `, [id])
    return result[0]
 }

 export const getRandomMarina = async ()=>{
    const [result]= await pool.query(`
    SELECT * FROM mari
    ORDER BY RAND()
    LIMIT 1
    `)
    return result
 }




 export const creatMarina = async (song, lyrics)=>{
    const [result]= await pool.query(`
    INSERT INTO mari (song, lyrics)
    VALUES(?,?)
    `,[song,lyrics])

    const id =result.insertId
    return getMarinas(id) }
