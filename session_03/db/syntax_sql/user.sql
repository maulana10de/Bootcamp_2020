insert into tb_users values (null,'user07','54321','user01@mail.com','user', null);

select * from tb_users;

insert into tb_users values
(null,'user02','12345','user02@mail.com','user','Tidak aktif'),
(null,'user03','12345','user02@mail.com','user',null),
(null,'user04','12345','user02@mail.com','user','aktif'),
(null,'user05','12345','user02@mail.com','user','aktif'),
(null,'user06','12345','user02@mail.com','user',null);

select * from tb_users;

describe tb_users;

update tb_users set note = 'aktif' where idusers = 2;

delete from tb_users where idusers = 7;

select * from tb_users limit 3;

select * from tb_users limit 3,5;

select username, 2*usia as duaKali from tb_users having username = 'user03';

select usia, username from tb_users order by usia, username;

select * from tb_users where usia between 30 and 50;

select * from tb_users where username like 'u%';

select * from tb_users where username like '%mi%';

select count(*) as jumlah from tb_users where usia=20;

select avg(usia) from tb_users;

select max(usia) as tertua from tb_users;

select sum(usia) from tb_users; 

select username, usia from tb_users where usia = 20 and usia > (select avg(usia) from tb_users);









