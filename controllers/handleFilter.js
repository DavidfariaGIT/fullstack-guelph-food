import express from 'express'
import { getDBConnection } from '../db/db.js'

export async function handleFilter(req, res) {
    const db = await getDBConnection()

    try {
        const getFtilers = await db.all('SELECT DISTINCT type FROM restaurants')
        const filters = getFtilers.map(row => row.type)
        res.json(filters)

    } catch (err) {
        res.status(500).json({ error:'failed to fetch types', details: error.message})
    }
}