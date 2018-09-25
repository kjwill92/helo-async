insert into friends 
(user_id, friends_id )
values (
    $1, $2
);

select * from sim3_users
where id != $1