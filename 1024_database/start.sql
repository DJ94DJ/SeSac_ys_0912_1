-- 데이터 베이스 생성하는 명령어 
CREATE DATABASE sesac test DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4 unicode_ci;

show databases;

-- 데이터 베이스 선택하는 명령어 
use sesac_test;

create table user1(
id varchar(10) primary key not null,
pw varchar(20) not null,
age int unsigned
);
show tables;

-- 만들어진 테이블에

-- 컬럼 추가 명령어
alter table user1 add gender enum('여자','남자');

-- 컬럼 삭제 명령어
alter table user1 drop column age;

-- 컬럼을 수정하는 명령어 
alter table user1 modify gender varchar(2) not null;

-- 테이블 삭제 명령어
drop table user1;

-- 실습 

use sesac_test;

create table member(
id varchar(20) primary key not null,
name varchar(50) not null,
age int unsigned,
gender varchar(2) not null,
email varchar(20),
promotion varchar(2) DEFAULT 'x',
);



show tables;

-- 테이블 확인하기 *여기선 테이블 이름이 멤버
desc member;


------------

-- insert 문 (데이터 추가)
insert into user1 (id, pw) values ('DJ', '1234');
insert into user1 values ('DJ1', 1234, 30);

-- select 문 (데이터 조회)

select*from user1;
-- user1의 모든값을 조회한다는 뜻


-- select [속성...] from 테이블이름 [where [조건]]
-- user라는 테이블의 모든 값을 조회하겠다.

-- user1 테이블의 id 속성을 조회
select id from user1;

-- user 테이블의 id, age 속성을 조회
select id, age from user;

CREATE TABLE customer
( 
custid CHAR(10) NOT NULL PRIMARY KEY,
custname VARCHAR(10) NOT NULL, 
addr CHAR(10) NOT NULL, 
phone CHAR(11), 
birth DATE
);

CREATE TABLE orders
( 
orderid INT AUTO_INCREMENT NOT NULL PRIMARY KEY, 
custid CHAR(10) NOT NULL, 
prodname CHAR(6) NOT NULL, 
price INT NOT NULL, 
amount SMALLINT NOT NULL,
FOREIGN KEY (custid) REFERENCES customer(custid)
);

INSERT INTO customer VALUES('bunny', '강해린', '대한민국 서울', '01012341234', '2000-02-23');
INSERT INTO customer VALUES('hello', '이지민', '대한민국 포항', '01022221234', '1999-08-08');
INSERT INTO customer VALUES('kiwi', '최지수', '미국 뉴욕', '01050005000', '1990-12-25');
INSERT INTO customer VALUES('imminji01', '강민지', '영국 런던', '01060001000', '1995-01-11');
INSERT INTO customer VALUES('lalala', '홍지수', '미국 로스앤젤레스', '01010109090', '2007-05-16');
INSERT INTO customer VALUES('jjjeee', '홍은정', '대한민국 서울', '01099991111', '2004-08-17');
INSERT INTO customer VALUES('wow123', '이민혁', '일본 삿포로', '01011223344', '1994-05-31');
INSERT INTO customer VALUES('minjipark', '박민지', '프랑스 파리', '01088776655', '1998-04-08');
INSERT INTO customer VALUES('jy9987', '강지연', '일본 삿포로', '01012312323', '1996-09-01');

INSERT INTO orders VALUES(NULL, 'jy9987', '프링글스', 3500, 2);
INSERT INTO orders VALUES(NULL, 'kiwi', '새우깡', 1200, 1);
INSERT INTO orders VALUES(NULL, 'hello', '홈런볼', 4200, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '맛동산', 2400, 1);
INSERT INTO orders VALUES(NULL, 'bunny', '오감자', 1500, 4);
INSERT INTO orders VALUES(NULL, 'jjjeee', '양파링', 2000, 1);
INSERT INTO orders VALUES(NULL, 'hello', '자갈치', 1300, 2);
INSERT INTO orders VALUES(NULL, 'jjjeee', '감자깡', 1200, 4);
INSERT INTO orders VALUES(NULL, 'bunny', '죠리퐁', 1500, 3);
INSERT INTO orders VALUES(NULL, 'kiwi', '꼬깔콘', 1700, 2);
INSERT INTO orders VALUES(NULL, 'hello', '버터링', 4000, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '칙촉', 4000, 1);
INSERT INTO orders VALUES(NULL, 'wow123', '콘초', 1700, 3);
INSERT INTO orders VALUES(NULL, 'imminji01', '꼬북칩', 2000, 2);
INSERT INTO orders VALUES(NULL, 'bunny', '썬칩', 1800, 5);
INSERT INTO orders VALUES(NULL, 'kiwi', '고구마깡', 1300, 3);
INSERT INTO orders VALUES(NULL, 'jy9987', '오징어집', 1700, 5);
INSERT INTO orders VALUES(NULL, 'jjjeee', '바나나킥', 2000, 4);
INSERT INTO orders VALUES(NULL, 'imminji01', '초코파이', 5000, 2);

DESC orders;


select * from customer;

-- bunny인 회원
select * from customer where custid='bunny';

-- bunny가 아닌 회원
select * from customer where custid != 'bunny';

-- 2000년 이후 출생 회원
select * from customer where birth >= '2000-01-01';

select * from customer where birth between  '2000-01-01' and '2005-01-01';
select * from customer where addr in ('대한민국 서울','미국 로스앤젤레스');

-- addr에서 대한민국을 포함한 모든 값 조회
-- addr가 대한민국을 포함한 회원 조회 (like 이용)
select * from customer where addr like '%대한민국%';
select * from customer where custname like '%수%';
select * from customer where custname like '%수';
select * from customer where custname like '_수';
select * from customer where custname like '__수';

-- is null 사용예시
select * from customer where not custname is null;


-- AND OR NOT
select * from customer where addr like '%대한민국%' AND birth <= '2000-05-05';
select * from customer where addr like '%대한민국%' or birth <= '2000-05-05';

-- 순서대로 정렬
select * from customer order by custname asc;

-- 순서반대로 정렬
select * from customer order by custname desc;

select * from customer where addr like '%대한민국%'
select * from customer order by custname desc;

-- 해당 명령 한꺼번에 실행
select * from customer 
where addr like '%대한민국%'
order by custname desc
-- 두번째 사람까지 가져옴
limit 2;

-- update 문
update customer set custname = '강혜란' where custid = 'bunny'; 

-- delete
delete from customer where custid = 'wow123';
-- 오류 발생 참조키기에 // 이 값을 참조하는 데이터가 있기에 삭제불가

delete from orders where custid = 'wow123';
-- 해결

create table user(
id varchar(10) primary key not null,
pw varchar(20) not null,
name varchar(5) not null,
gender enum('F','M', '') default '',
birthday DATE not null,
age int(3) not null default '0'
);

INSERT INTO user VALUES('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31', 33);
INSERT INTO user VALUES('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31);
INSERT INTO user VALUES('power70', 'qxur8sda', '변사또', 'M', '1970-05-02', 53);
INSERT INTO user VALUES('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18', 39);
INSERT INTO user VALUES('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27', 47);
INSERT INTO user VALUES('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03', 22);
INSERT INTO user VALUES('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11', 24);

select * from user;

-- 1. 모든 회원목록을 가져오는데, 이때 birtday 컬럼의 값을 기준으로 오름차순 정렬하여 가져오시오. 
select * from user order by birthday asc; ;

-- 2. 회원 목록 중 gender 컬럼의 값이 "M" 인 회원목록을 가져오는데, 이때 name 컬럼의 값을 기준으로 내림차순 정렬하여 가져오시오. 
select * from user where gender='M' order by name desc;

-- 3. 1990 년대에 태어난 회원의 id, name 컬럼을 가져와 목록으로 보여주시오. 
select id, age from user where birthday between '1990-01-01' and '1999-12-31' ;

-- 4. 6월생 회원의 목록을 birthday 기준으로 오름차순 정렬하여 가져오시오. 
select * from user where birthday like '____-06%' order by birthday asc;

-- 5. gender 컬럼의 값이 "M" 이고, 1970 년대에 태어난 회원의 목록을 가져오시오. 
select * from user where gender='M' and birthday between '1970-01-01' and '1979-12-31';

-- 6. 모든 회원목록 중 age를 기준으로 내림차순 정렬하여 가져오는데, 그때 처음 3개의 레코드만 가져오시오. 
select * from user order by age desc limit 3;

-- . 모든 회원 목록 중 나이가 25 이상 50 이하인 회원의 목록을 출력하시오. 
select * from user where age between 25 and 50;

-- 8. id 컬럼의 값이 hong1234 인 레코드의 pw 컬럼의 값을 12345678로 변경하시오. 
update user set pw = '12345678' where id = 'hong1234'; 

-- 9. id 컬럼의 값이 jungkrat인 레코드를 삭제하시오.
delete from user where id = 'jungkrat';

select * from orders;

-- 총 주문건수
select count(*) from orders;
select count(prodname) from orders;
desc orders;



-- 사람별 주문건수
select custid, count(*) from orders group by custid;
select custid as '아이디', count(*) as '주문 건수' from orders group by custid;


select * from orders;
-- 사람별로 구매한 상품의 개수 조회 + 상품 개수가 5개 이상인 경우 조회
select custid, sum(amount) as 'total_amount' from orders group by custid having sum(amount) >= 5;

-- 특정 아이디 제외해보기
select custid, sum(amount) as 'total_amount' from orders 
where custid !='bunny'
group by custid
 having sum(amount) >= 5;

 -- 사람별로 결재한 금엑
select custid, sum(amount*price) as 'total_price' from orders group by custid;


-- 두 테이블에 custid 가 동일하다는 점을 알려서 합치기
select * from customer inner join orders on customer.custid = orders.custid;

-- costomer에서는 주소만 가져오고 orders는 전부 반환(*) >> 커스터머, 오더스를 이너조인 >> 주문별로 배송지 알고 싶어서
select customer.addr, orders.* from customer inner join orders on customer.custid = orders.custid;

-- 이름으로 합친다면?
select customer.custname, orders.* from customer inner join orders on customer.custid = orders.custid;

--------

Microsoft Windows [Version 10.0.22621.2428]
(c) Microsoft Corporation. All rights reserved.

C:\Windows\System32>cd C:\Program Files\MySQL\MySQL Server 8.0\bin

C:\Program Files\MySQL\MySQL Server 8.0\bin>mysql -u root -p
Enter password: ***********
ERROR 1045 (28000): Access denied for user 'root'@'localhost' (using password: YES)

C:\Program Files\MySQL\MySQL Server 8.0\bin>mysql -u root -p
Enter password: ************
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 12
Server version: 8.0.34 MySQL Community Server - GPL

Copyright (c) 2000, 2023, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> quit
Bye

C:\Program Files\MySQL\MySQL Server 8.0\bin>mysql -u root -p
Enter password: ************
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 13
Server version: 8.0.34 MySQL Community Server - GPL

Copyright (c) 2000, 2023, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> show database;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'database' at line 1
mysql> show databases
    -> show databases
    -> show databases
    -> show databases;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'show databases
show databases
show databases' at line 2
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
4 rows in set (0.01 sec)

mysql> CREATE DATABASE db name
    -> ^Z
Bye

C:\Program Files\MySQL\MySQL Server 8.0\bin>mysql -u root -p
Enter password: ************
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 17
Server version: 8.0.34 MySQL Community Server - GPL

Copyright (c) 2000, 2023, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> CREATE DATABASE sesac_test DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_unicode_ci;
Query OK, 1 row affected (0.01 sec)

mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sesac_test         |
| sys                |
+--------------------+
5 rows in set (0.00 sec)

mysql> use sesac_test;
Database changed
mysql> show tables;
+----------------------+
| Tables_in_sesac_test |
+----------------------+
| member               |
+----------------------+
1 row in set (0.00 sec)

mysql> desc member;
+-----------+--------------+------+-----+---------+-------+
| Field     | Type         | Null | Key | Default | Extra |
+-----------+--------------+------+-----+---------+-------+
| id        | varchar(20)  | NO   | PRI | NULL    |       |
| name      | varchar(50)  | NO   |     | NULL    |       |
| age       | int unsigned | YES  |     | NULL    |       |
| gender    | varchar(2)   | NO   |     | NULL    |       |
| email     | varchar(20)  | YES  |     | NULL    |       |
| promotion | varchar(2)   | YES  |     | x       |       |
+-----------+--------------+------+-----+---------+-------+
6 rows in set (0.00 sec)

mysql> desc member;
+-----------+--------------+------+-----+---------+-------+
| Field     | Type         | Null | Key | Default | Extra |
+-----------+--------------+------+-----+---------+-------+
| id        | varchar(10)  | NO   | PRI | NULL    |       |
| name      | varchar(5)   | NO   |     | NULL    |       |
| gender    | varchar(2)   | NO   |     | NULL    |       |
| email     | varchar(50)  | NO   |     | NULL    |       |
| promotion | varchar(2)   | YES  |     | x       |       |
| interest  | varchar(100) | YES  |     | NULL    |       |
+-----------+--------------+------+-----+---------+-------+
6 rows in set (0.00 sec)

mysql> desc member;
+-----------+--------------+------+-----+---------+-------+
| Field     | Type         | Null | Key | Default | Extra |
+-----------+--------------+------+-----+---------+-------+
| id        | varchar(10)  | NO   | PRI | NULL    |       |
| name      | varchar(5)   | NO   |     | NULL    |       |
| gender    | varchar(2)   | NO   |     | NULL    |       |
| email     | varchar(50)  | YES  |     | NULL    |       |
| promotion | varchar(2)   | YES  |     | x       |       |
| interest  | varchar(100) | YES  |     | NULL    |       |
+-----------+--------------+------+-----+---------+-------+
6 rows in set (0.00 sec)

mysql> desc user;
+----------+------------------+------+-----+---------+-------+
| Field    | Type             | Null | Key | Default | Extra |
+----------+------------------+------+-----+---------+-------+
| id       | varchar(10)      | NO   | PRI | NULL    |       |
| pw       | varchar(20)      | NO   |     | NULL    |       |
| name     | varchar(5)       | NO   |     | NULL    |       |
| gender   | enum('F','M','') | YES  |     |         |       |
| birthday | date             | NO   |     | NULL    |       |
| age      | int              | NO   |     | 0       |       |
+----------+------------------+------+-----+---------+-------+
6 rows in set (0.00 sec)

mysql>