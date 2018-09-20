insert into friends 
(user_id, friends_id )
values (
    $1, $2
);

select * from sim3_users
where id not in
(select friends_id 
from friends
where user_id = $1)
and id != $1;