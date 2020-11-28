const db = require('../models')

//working
const index = (req, res) => {
    db.game.findAll().then((foundGames) => {
        if(!foundGames) return res.json({
            message: 'No Games found in database.'
        })

        res.status(200).json({ games: foundGames });
    })
}

//not working
const show = (req, res) => {
  console.log('in the show route')
  console.log(req.params)
  //not sure React side?
    db.game.findByPk(req.params.id).then((foundGame) => {
        if (!foundGame) return res.json({
            message: 'Game with provided ID not found.'
        })
        
        res.status(200).json({ game: foundGame })
    })
}

//working
const create = (req, res) => {
    db.game.create(req.body).then((savedGame) => {
        // Validations and error handling here
        res.status(200).json({ game: savedGame })
    })
}

//not sure need to get show page working first
const update = (req, res) => {
    db.game.update({
      ...req.body
    }, {
      where: {
        id: req.params.id
      }
    }).then((updatedGame) => {
        if (!updatedGame) return res.json({
            message: "No game with that ID found."
        })
        // Validations and error handling here
        res.status(200).json({ game: updatedGame })
    })
}
//not sure
const destroy = (req, res) => {
    db.game.destroy({
      where: { id: req.params.id }
    }).then(() => {
        res.status(200)
    })
}


module.exports = {
    index,
    show,
    create,
    update,
    destroy
}
