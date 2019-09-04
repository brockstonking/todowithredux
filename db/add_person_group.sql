insert into person_table (name, user_id)
values ($1, $2);

select * from user_table ut
join person_table pt on ut.user_id = pt.user_id
where ut.user_id = $2;