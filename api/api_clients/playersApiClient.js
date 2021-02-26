const fetch = require('node-fetch')

exports.getPlayerSearch = async (req, res) => {
  try {
    const url = `https://balldontlie.io/api/v1/players?search=${req.params.name}&per_page=${req.params.limit}`
    console.log(url)
    let results = await fetch(url)
    return results.json()
  } catch (error) {
    console.error(error)
  }
}

exports.getPlayerSearchAll = async (req, res) => {
  try {
    const url = `https://balldontlie.io/api/v1/players?search=${req.params.name}&per_page=${req.params.limit}`
    console.log(url)
    let results = await fetch(url)
    return results.json()
  } catch (error) {
    console.error(error)
  }
}

exports.getPlayerDetail = async (req, res) => {
  try {
    let results = await fetch(`https://www.balldontlie.io/api/v1/players/${req.params.playerId}`)
    return results.json()
  } catch (error) {
    console.error(error)
  }
}
