import express from 'express'
import { getDBConnection } from '../db/db.js'

export async function handleGet (req, res) {
    
    const db = await getDBConnection()

    try{
       const restuarants = await db.all(`SELECT * FROM restaurants`)
        res.json(restuarants)
    } catch(err) {
       res.status(500).json({error: 'Failed to fetch restuarants', details: err.message})
    }
}