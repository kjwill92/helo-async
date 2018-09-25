delete from friends 
where user_id = $1 and friends_id = $2;

select * from sim3_users
where id != $1