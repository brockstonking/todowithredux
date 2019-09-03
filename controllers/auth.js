module.exports = {
    registerUser: (req, res, next) => {
        const dbInstance = req.app.get('db');

        const { email, username, password } = req.body;

        dbInstance.check_user_exists([email])
        .then( results => {
            if (!results.data) {
                dbInstance.register_user([email, username, password])
                .then( results => {
                    res.status(200).send('User has been registered')
                })
                .catch( err => {
                    res.status(500).send('Sorry, something went wrong')
                })
            } else {
                res.status(200).send('User already exists')
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
            if (results.data[0]) {
                req.session.user = {
                    username: results.data.username,
                }
                res.status(200).send(req.session.user)
            } else {
                res.status(200).send('username or password is incorrect')
            }
        })
        .catch( err => {
            res.status(500).send(err)
        })
    }
}