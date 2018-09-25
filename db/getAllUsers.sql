-- select * from sim3_users
-- where id != $1

select * from sim3_users
where id != $1
order by id
limit 8 offset $2

-- this will replace the get all Users sql query on the get, add and remove requests
-- needs a new end point for this