insert into sim3_users
(auth_id, first_name, last_name, gender)
values ($1, $2, $3, $4)

returning *;