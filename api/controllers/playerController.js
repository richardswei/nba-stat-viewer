const playersApiClient = require('../api_clients/playersApiClient')

// Display list of all Players.
// exports.get_player_search = async function(req, res) {
//   const players = await playersApiClient.getPlayerSearch(req, res)
//   res.send(players)
// };

exports.get_player_search_all = async function(req, res) {
  const players = await playersApiClient.getPlayerSearchAll(req, res)
  res.send(players)
};

exports.get_player_search = async function(req, res) {
  const players = await playersApiClient.getPlayerSearch(req, res)
  res.send(players)
};

// Display detail page for a specific Player.
exports.get_player_detail = async function(req, res) {
  const players = await playersApiClient.getPlayerDetail(req, res)
  res.send(players)
};

exports.ping = function(req, res) {
  res.send({response: true})
};
