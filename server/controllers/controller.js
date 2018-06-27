const mongoose = require('mongoose');
const User = mongoose.model('User');
const Food = mongoose.model('Food');
const bcrypt = require('bcrypt');
// const session = require('express-session');


module.exports = {
    register: function (req, res) {
        console.log(req.body)
        User.find({ email: req.body.email }, function (err, user) {
            if (user.length) {
                console.log('user exist')
                res.json({ Status: false, err: "Invalid entry" })
            } else {
                bcrypt.hash(req.body.password, 10, function (err, hash) {
                    if (err) {
                        console.log('pw not ok');
                        res.json({ Status: false, err: "Invalid entry" })
                    } else {
                        console.log(hash)
                        var newUser = new User({ fname: req.body.fname, lname: req.body.lname, email: req.body.email, password: hash, spec: req.body.spec });
                        newUser.save(function (err, user) {
                            if (err) {
                                res.json({ Status: false, Error: err })
                            } else {
                                req.session.id = user._id
                                res.json({ Status: true, user: user, Login: true })
                            }
                        })
                    }
                })
            }
        });
    },

    login: function (req, res) {
        User.findOne({ email: req.body.email }, function (err, user) {
            console.log(user)
            if (user) {
                bcrypt.compare(req.body.password, user.password, function (err, data) {
                    console.log(data)
                    if (data) {
                        console.log(data)
                        req.session.user = { id: user._id }
                        console.log(req.session.user)
                        res.json({ Login: true, user: user })

                    } else {
                        res.json({ Login: false, msg: "Invalid entry" })
                    }
                })
            } else {
                res.json({ Login: false, msg: "Invalid entry" })
            }
        })
    },
    logout: function (req, res) {
        req.session.destroy(function (err) {
            res.json({ Login: false })
        })
    },
    add: function (req, res) {
        console.log(req.body)
        var food = new Food(req.body)
        food.save(function (err, dish) {
            if (err) {
                console.log('somethig went worng');
                res.json({ Status: false, Error: err })
            } else {
                console.log('successfully added a user');
                console.log(req.session.user)
                User.findByIdAndUpdate({ _id: req.session.user.id }, { $push: { food: dish } }, function (err, user) {
                    if (err) {
                        console.log('somethig went worng');
                        res.json({ message: "Error", error: err })
                    } else {
                        console.log('successfully updated a user', user);
                        res.json({ Status: true, message: "Success" })
                    }

                })

            }

        })
    },
    showDish: function (req, res) {
        User.findOne({ _id: req.session.user.id }, function (err, user) {
            var data = user.food;
            if (err) {
                console.log('somethig went worng');
                res.json({ message: "Error", error: err })
            } else {
                console.log(data);
                res.json({ message: "Success", food: data });
            }

        })
    },
    dishes: function (req, res) {
        Food.find({}, function (err, food) {
            if (err) {
                console.log("Returned error", err);
                res.json({ message: "Error", error: err })
            }
            else {
                res.json({ data: food })
            }
        })
    },
    getOneDish: function(req, res){
        console.log(req.params.id)
        Food.findOne({ _id: req.params.id}, function (err, food) {
            if (err) {
                console.log('somethig went worng');
                res.json({ message: "Error", error: err })
            } else {
                console.log(food)
                res.json({ message: "Success", data: food });
            }
    
        })
    },












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