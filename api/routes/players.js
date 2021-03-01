var express = require("express");
var router = express.Router();
var player_controller = require('../controllers/playerController');

// return a ping response
router.get("/", player_controller.ping)

// // return the results from a search by name
// router.get("/search/:playerName", player_controller.get_player_search_all);

// return the results from a search by name
router.get("/search/:name/:limit", async (req, res) => {
  await player_controller.get_player_search(req, res)
});

router.get("/searchAll/:name", async (req, res) => {
  await player_controller.get_player_search_all(req, res)
});

// return a player's info based on player ID
router.get("/:playerId", async (req, res) => {
  await player_controller.get_player_detail(req, res)
});

// return the results from a search by name
router.get("/stats/:season?", async (req, res) => {
  await player_controller.get_season_averages(req, res)
});


// router.get("/gameStats/:playerId/:startDate-:endDate", function(req, res, next) {
// });

module.exports = router;