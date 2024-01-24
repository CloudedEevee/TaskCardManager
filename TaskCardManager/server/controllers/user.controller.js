const User = require('../models/user.model'); //.model STAYS .model

module.exports = {
    ///////////////////////////////////////////// CREATE
    createNewUser: (req, res) => {
        const {email, username, confirm} = req.body;
        let { password } = req.body;
        // Hash Password
        console.log("Hashing Password.....")
        password = bcrypt.hash(password, 8, function(err, hash) {});
        console.log("Password hashed!")
        // Save User in DB
        console.log("Saving User.....")
        User.create({
            email: email,
            username: username,
            password: password,
            confirm: confirm
        })
            .then(user => {
                console.log(user);
                res.json(user);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            }) // Validations
    },


    ///////////////////////////////////////////// READ
    findAllUsers: (req, res) => {
        User.find({})
        .then((users) => {
            console.log("users.controller line 28:" + users);
            res.json({ users })
        })
        .catch((err) => {
            console.log(err);
            res.json({ message: 'Something went wrong', error: err })
        });
    },

    findOneUser: (req, res) => {
        User.findOne({ _id: req.params.id })
            .then(oneUser => {
                console.log(oneUser);
                res.json({ user: oneUser })
            })
            .catch((err) => {
                console.log(err);
                res.json({ message: 'Something went wrong', error: err })
            });
    },

    findUserByUsername: (req, res) => {
        User.find({ username: req.params.username })
        .then(matchingUsers => {
            console.log(matchingUsers);
            res.json({ users: matchingUsers })
        })
        .catch((err) => {
            console.log(err);
            res.json({ message: 'Something went wrong', error: err })
        });
    },

    ///////////////////////////////////////////// UPDATE
    updateUser: (req, res) => {
        User.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then(updatedUser => {
                console.log(updatedUser);
                res.json(updatedUser)
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            }) // Validations
    },

    ///////////////////////////////////////////// DESTROY
    deleteExistingUser: (req, res) => {
        User.deleteOne({ _id: req.params.id })
            .then(deleteConfirm => {
                console.log(deleteConfirm);
                res.json(deleteConfirm)
            })
            .catch((err) => {
                console.log(err);
                res.json({ message: 'Something went wrong', error: err })
            });
    },

    ///////////////////////////////////////////// OTHER
    index: (req, res) => {
        res.json({ message: "Hello World" });
    }
}
