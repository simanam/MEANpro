const mongoose = require('mongoose');
const User = mongoose.model('User');
const Food = mongoose.model('Food')

module.exports = {
    register: function(req, res){
        User.find({ email: req.body.email }, function (err, user) {
            if (user.length) {
            //   request.flash('registration', 'Invalid email');
              console.log('user exist')
              res.json({message: "user exist"})
            } else {
              bcrypt.hash(req.body.password, 10, function (err, hash) {
                if (err) {
                  console.log('pw not ok');
                  res.json({message: 'pw fail'})
                } else {
                  var newUser = new User({ fname: req.body.fname, lname: req.body.lname, email: req.body.email, password: hash, spec: req.body.spec });
                  newUser.save(function (err, user) {
                    if (err) {
                      // console.log('something went wrong');
                      res,json({message: "fail", error: err})
                    } else {
                      res.json({user: user})
                    }
                  })
                }
              })
            }
          });

    },
    add: function (req, res) {
        console.log(req.body)
        Pet.find({ name: req.body.name }, function (err, pet) {
            if (pet.length) {
                console.log('pet exists')
                res.json({ Status: false, err: "Pet already exist" })
            }
            else {
                var pet = new Pet(req.body)
                pet.save(function (err) {
                    if (err) {
                        console.log('somethig went worng');
                        res.json({ Status: false, Error: err })
                    } else {
                        console.log('successfully added a user');
                        res.json({ Status: true, message: "Success" })
                    }
                })
            }
        })
    },
    // add: function (req, res) {
    //     console.log(req.body)
    //     var pet = new Pet(req.body)
    //     pet.save(function (err) {
    //         if (err) {
    //             console.log('somethig went worng');
    //             res.json({ message: "Error", error: err })
    //         } else {
    //             console.log('successfully added a user');
    //             res.json({ message: "Success" })
    //         }
    //     })
    // },

    getPet: function (req, res) {
        Pet.find({}, function (err, pet) {
            if (err) {
                console.log("Returned error", err);
                // respond with JSON
                res.json({ message: "Error", error: err })
            }
            else {
                // respond with JSON
                res.json({ data: pet })
            }
        })
    },
    deletePet: function (req, res) {
        console.log(req.params.id)
        Pet.findByIdAndRemove({ _id: req.params.id }, function (err) {
            if (err) {
                console.log('somethig went worng');
                res.json({ message: "Error", error: err })
            } else {
                console.log('successfully adopted this pet');
                res.json({ message: "Success adoption" });
            }
        })
    },

    updatePet: function (request, response) {
        // console.log(request.body)
        Pet.findByIdAndUpdate({ _id: request.body._id }, { $set: request.body }, function (err, pet) {
            if (err) {
                console.log('somethig went worng');
                response.json({ message: "Error", error: err })
            } else {
                console.log('successfully updated a user', pet);
                response.json({ message: "Success update" });
            }

        })
    },
    showPet: function (req, res) {
        console.log(req.params)
        Pet.findOne({ _id: req.params.id }, function (err, pet) {
            var data = pet;

            if (err) {
                console.log('somethig went worng');
                res.json({ message: "Error", error: err })
            } else {
                console.log(data);
                res.json({ message: "Success", data: pet });
            }

        })
    },
    like: function (req, res) {
        console.log(req.body)
        Pet.findByIdAndUpdate({ _id: req.body.id }, { $inc: { "likes": 1 } }, function (err, pet) {
            if (err) {
                console.log('somethig went worng');
                res.json({ message: "Error", error: err })
            } else {
                console.log('successfully liked');
                res.json({ message: "Success update" });
            }

        })
    }

}