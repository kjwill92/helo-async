select count(*) from sim3_users
where id != $1 and first_name = $2