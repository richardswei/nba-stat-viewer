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

// exports.getBreeds = async () => {
//   try {
//     let results = await fetch('https://dog.ceo/api/breeds/list/all')
//     return JSON.parse(results.request.response)  
//   } catch (error) {
//     console.error(error)
//   }
// }

// console.log(req.params.playerId)
//   fetch('https://randomuser.me/api/?results=10')
//     .then(response => response.json())
//     .then(data => {
//       console.log(data)
//       if (data) {
//         res.send('NOT IMPLEMENTED: Player detail: ' + req.params.playerId);
//       }
//     })

