const router = require("express").Router()
const { ADDRESS_CONTROLLER } = require('../controllers')

router.route("/get-places").post(ADDRESS_CONTROLLER.getLocationByAddress)
router.route("/get-address").post(ADDRESS_CONTROLLER.getLocationByLatLong)
router.route("/get-place-details").post(ADDRESS_CONTROLLER.getPlaceDetails)


module.exports = router