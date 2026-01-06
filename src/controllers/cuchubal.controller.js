const cuchubalService = require('../services/cuchubal.service');

const createCuchubal = async (req, res) => {
    try {
        const newCuchubal = await cuchubalService.create(req.body);
        res.status(201).json(newCuchubal);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getCuchubalCuotas = async (req, res) => {
    try {
        const cuotas = await cuchubalService.getCuotas(req.params.id);
        res.json(cuotas);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getCuchubales = async (req, res) => {
    try {
        const cuchubales = await cuchubalService.getByUserId(req.params.id);
        res.json(cuchubales);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const deleteCuchubal = async (req, res) => {
    try {
        await cuchubalService.delete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = { createCuchubal, getCuchubalCuotas, getCuchubales, deleteCuchubal }