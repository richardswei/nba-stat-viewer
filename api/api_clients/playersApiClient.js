const fetch = require('node-fetch')
const requestPrefix = 'https://balldontlie.io/api/v1/'

exports.getPlayerSearch = async (req, res) => {
  try {
    const url = `${requestPrefix}players?search=${req.params.name}&per_page=${req.params.limit}`
    console.log(url)
    let results = await fetch(url)
    return results.json()
  } catch (error) {
    console.error(error)
  }
}

exports.getPlayerSearchAll = async (req, res) => {
  try {
    const url = `${requestPrefix}players?search=${req.params.name}&per_page=${req.params.limit}`
    console.log(url)
    let results = await fetch(url)
    return results.json()
  } catch (error) {
    console.error(error)
  }
}

exports.getPlayerDetail = async (req, res) => {
  try {
    let results = await fetch(`${requestPrefix}players/${req.params.playerId}`)
    return results.json()
  } catch (error) {
    console.error(error)
  }
}

exports.getSeasonAveragesMultiPlayer = async (req, res) => {
  try {
    const players = req.query.players.reduce((acc, id) => {
      return acc + '&player_ids[]=' + id
    }, '')
    const url = `${requestPrefix}season_averages?season=${req.params.season}${players}`
    console.log(url)
    let results = await fetch(url)
    return results.json()
  } catch (error) {
    console.error(error)
  }
}


// exports.getSeasonAveragesMultiPlayer = async (req, res) => {
//   try {
//     console.log("tried")
//     const players = req.query.players.reduce((acc, id) => {
//       return acc + '&player_ids[]=' + id
//     }, '')
//     const url = `${requestPrefix}season_averages?season=${req.query.season}${players}`
//     console.log(url)
//     let results = await fetch(url)
//     return results.json()
//   } catch (error) {
//     console.error(error)
//   }
// }

