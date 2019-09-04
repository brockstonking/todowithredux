insert into pages_table (page_name, person_id)
values ($1, $2);

select * from pages_table pat
join person_table pt on pat.person_id = pt.person_id
join user_table ut on ut.user_id = pt.user_id
where pat.person_id = $2;