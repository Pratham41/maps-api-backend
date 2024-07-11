const { generateToken } = require("../utils/token");

require("dotenv").config();

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

const getLocationByLatLong = async (req,res,next) => {
    const { lat, lng } = req.body
    if(!lat || !lng){
        return res.status(400).json("lat and lng are required!")
    }
    try {
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAPS_API_KEY}`);
        const data = await response.json();
        res.status(200).json(data)
    } catch (error) {
        next(error)
    }
}

const getLocationByAddress = async (req,res,next) => {
    const { input } = req.body
    if(!input){
        return res.status(400).json("input is required!")
    }
    try {
        const sessionToken = generateToken()
        const response = await fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=${GOOGLE_MAPS_API_KEY}&sessiontoken=${sessionToken}&components=country:IN`);
        const data = await response.json();
        res.status(200).json(data)
    } catch (error) {
        next(error)
    }
}

const getPlaceDetails = async (req,res,next) => {
    const { place_id } = req.body
    if(!place_id){
        return res.status(400).json("place_id is required!")
    }
    try {
        const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${place_id}&key=${GOOGLE_MAPS_API_KEY}`);
        const data = await response.json();
        res.status(200).json(data)
    } catch (error) {
        next(error)
    }
}

const ADDRESS_CONTROLLER = { getLocationByAddress, getLocationByLatLong, getPlaceDetails }

module.exports = ADDRESS_CONTROLLER