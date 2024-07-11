const router = require("express").Router();
const addressRoutes = require("./address.routes");

router.use("/address", addressRoutes);

module.exports = router;