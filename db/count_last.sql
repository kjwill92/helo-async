select count(*) from sim3_users
where id != $1 and last_name = $2