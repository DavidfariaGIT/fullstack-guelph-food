import express from 'express'

export async function handleGet (req, res) {
    res.status(200).json({ message: console.log('req received')})
}