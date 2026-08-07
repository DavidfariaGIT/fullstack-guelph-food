import { getDBConnection } from "../db/db.js"

export async function handleAdd(req, res) {
    
    let {name, address, type, price } = req.body 

    const image = 'default.png'
    
    if ( !name || !address || !price) {
        return res.status(400).json({ errpr: 'name, address and price are required' })
    }

    name = name.trim()
    address = address.trim()
    type = type.trim()

    try {
        const db = await getDBConnection()

        const existing = await db.get(
            `SELECT name FROM restaurants WHERE name = ?`, [name]
        )

        if(existing) {
            res.status(409).json({ error: 'restaurant already added '})
        }

        const result = await db.run(
            `INSERT INTO restaurants (name, location, type, price, image)
            VALUES(?, ?, ?, ?, ?)`,
            [name, address, type, price, image]
        )

        res.status(201).json({ message: "restaurant successfully added" })
    } catch (err) {
        console.log("adding restaurant error", err.message)
        res.status(500).json({ error: "adding restaurant error, please try again"})
    }
}