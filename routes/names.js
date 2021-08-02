const firstNames = require('./firstnames.json')
const lastNames = require('./lastnames.json')

module.exports = (app) => {

  app.get('*', (req, res) => {

    // console.log(firstNames.length, lastNames.length)
    const firstIndex = Math.floor(Math.random() * lastNames.length) + 1
    const lastIndex = Math.floor(Math.random() * firstNames.length) + 1

    let firstName = lastNames[firstIndex]
    let lastName = firstNames[lastIndex]

    let obj = {
      fullName: firstName + " " + lastName,
      first: firstName,
      last: lastName
    }
    
    return res.send(obj)
  })

}