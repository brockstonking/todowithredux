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
                    user_id: results[0].user_id
                }
                res.status(200).send(req.session.user)
            }
        })
        .catch( err => {
            res.status(500).send(err)
        })
    },
    getSession: (req, res, next) => {
        if (req.session.user) {
            res.status(200).send(req.session.user)
        } else {
            res.status(200).send(`User has been logged out`)
        }
    },
    getPeopleAndGroups: (req, res, next) => {
        const dbInstance = req.app.get('db');

        const { user_id } = req.params;

        dbInstance.get_people_and_groups([user_id])
        .then( results => {
            res.status(200).send(results);
        })
        .catch( err => {
            res.status(200).send(err);
        })
    },
    getPersonPages: (req, res, next) => {
        const dbInstance = req.app.get('db');

        const { person_id } = req.params;

        dbInstance.get_person_pages([person_id])
        .then( results => {
            res.status(200).send(results);
        })
        .catch( err => {
            res.status(200).send(err);
        })
    },
    getPageTodos: (req, res, next) => {
        const dbInstance = req.app.get('db');

        const { page_id } = req.params;

        dbInstance.get_page_todos([page_id])
        .then( results => {
            res.status(200).send(results);
        })
        .catch( err => {
            res.status(200).send(err);
        })
    },
    addPersonGroup: (req, res, next) => {
        const dbInstance = req.app.get('db');

        const { name, user_id } = req.body;

        dbInstance.add_person_group([name, user_id])
        .then( results => {
            res.status(200).send(results)
        })
        .catch( err => {
            res.status(500).send(err)
        })
    }
}