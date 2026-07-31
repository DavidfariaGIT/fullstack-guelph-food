import express from "express";
import { getDBConnection } from "../db/db.js";

export async function handleGet(req, res) {
    
  try {
    const db = await getDBConnection();
  
    let query = 'SELECT * FROM restaurants'
    let params = []

    const { filter } = req.query;

    if (filter) {
      query += ' WHERE type = ? '
      params.push(filter)
    }

    const restuarants = await db.all(query, params)
    res.json(restuarants)

  } catch (err) {
    res.status(500).json({ error: "Failed to fetch restuarants", details: err.message });
  }
}
