insert into todo_table (todo, page_id)
values ($1, $2);

select * from pages_table pat
join person_table pt on pat.person_id = pt.person_id
join user_table ut on ut.user_id = pt.user_id
join todo_table tt on tt.page_id = pat.page_id
where pat.page_id = $2;