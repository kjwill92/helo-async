select * from sim3_users
where last_name = $1 and id != $2
order by id
limit 8 offset $3