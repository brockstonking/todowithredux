INSERT INTO user_table (email, username, password)
VALUES ($1, $2, $3)
RETURNING *;