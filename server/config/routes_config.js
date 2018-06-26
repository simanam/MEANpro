const pet = require('../controllers/controller.js')

module.exports = function(app){
    app.post('/register', pet.register)
    app.post('/addPet', pet.add)
    app.get('/all', pet.getPet)
    app.delete('/delete/:id', pet.deletePet)
    app.put('/edit/:id', pet.updatePet)
    app.get('/show/:id', pet.showPet)
    app.post('/like/:id', pet.like)
}