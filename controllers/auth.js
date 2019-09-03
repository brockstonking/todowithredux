module.exports = {
    registerUser: (req, res, next) => {
        const dbInstance = req.app.get('db');

        const { email, username, password } = req.body;

        dbInstance.check_user_exists([email])
        .then( results => {
            if (results.length < 1) {
                dbInstance.register_user([email, username, password])
                .then( results => {
                    res.status(200).send('User has been registered')
                })
                .catch( err => {
                    res.status(500).send('Sorry, something went wrong')
                })
            } else {
                res.status(200).send('Sorry, it looks like a user with that email already exists')
            }
        })
        .catch( err => {
            res.status(500).send('Sorry, something went wrong')
        })
    }, 
    login: (req, res, next) => {
        const dbInstance = req.app.get('db');

        const { username, password } = req.body;

        dbInstance.login_user([username, password])
        .then( results => {
            if (!results[0]) {
                res.status(200).send('username or password is incorrect')
            } else {
                req.session.user = {
                    username: results[0].username,
                }
                res.status(200).send(req.session.user)
            }
        })
        .catch( err => {
            res.status(500).send(err)
        })
    }
}