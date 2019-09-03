select * from user_table ut
join person_table pt on ut.user_id = pt.user_id
where ut.user_id = $1;