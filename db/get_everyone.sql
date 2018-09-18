select * from sim3_users
where id not in
(select friends_id 
from friends
where id = $1)
and id != $1