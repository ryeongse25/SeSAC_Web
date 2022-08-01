CREATE DATABASE sesac;

USE sesac;

CREATE TABLE user (
	id varchar(10) not null primary key,
    pw varchar(20) not null,
    name varchar(5) not null,
    gender ENUM('F', 'M', '') default '',
    birthday date not null,
    age int(3) not null default 0
);

ALTER TABLE user drop column birthday;
ALTER TABLE user add column birthday date not null;

DROP TABLE user;

DESC user;

CREATE TABLE member (
	id varchar(20) not null primary key,
    name varchar(5) not null,
    age int(2),
    gender varchar(2) not null,
    email varchar(50),
    promotion varchar(2) default "x"
);

ALTER TABLE member modify column id varchar(10);
ALTER TABLE member modify column gender varchar(2) not null default '여';
ALTER TABLE member add column interest varchar(100);
ALTER TABLE member drop column age;

DESC member;

INSERT INTO user (ID, name, birthday) VALUES ('id1', '홍길동', '2022-08-01');
INSERT INTO user VALUES ('id2', '홍길동', '2022-08-01');
INSERT INTO user (ID, birthday) VALUES ('id3', '2022-08-01');
INSERT INTO user VALUES ('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11', 24);

SELECT * FROM user;
SELECT * FROM user WHERE name='홍길동';
SELECT * FROM user WHERE name='홍길동' AND id='id1';
SELECT * FROM user WHERE name='홍길동' ORDER BY ID ASC;
SELECT * FROM user ORDER BY ID DESC LIMIT 2;
SELECT name, birthday FROM user;

/* BETWEEN a AND b */ 
SELECT * FROM player WHERE height BETWEEN 160 AND 180;

/* IN */
SELECT * FROM player WHERE position IN ('striker', 'goalkeeper');
SELECT * FROM player WHERE position = 'striker' OR position = 'goalkeeper';

/* LIKE _ % */
/* _는 글자수도 매치, %는 글자수 무관 */
SELECT * FROM user where name LIKE '_규리';
SELECT * FROM user where name LIKE '%리';

UPDATE user SET name='홍길동2', birthday='2022-07-31' WHERE ID = 'id2';

DELETE FROM user WHERE ID='id2';

DROP TABLE user;

SELECT * FROM user ORDER BY birthday ASC;
SELECT * FROM user WHERE gender = 'M' ORDER BY name DESC;
SELECT id, name FROM user WHERE birthday LIKE "199%";
SELECT * FROM user WHERE birthday LIKE "%-06-%" ORDER BY birthday ASC;
SELECT * FROM user WHERE gender = "M" and birthday LIKE "197%";
SELECT * FROM user ORDER BY age DESC LIMIT 3;
SELECT * FROM user WHERE age BETWEEN 25 AND 50;
UPDATE user SET pw = '12345678' WHERE id = 'hong1234';
DELETE FROM user WHERE id = 'jungkrat';

CREATE TABLE user_info (
	user_ID varchar(10),
    contact varchar(13),
    FOREIGN KEY ( user_ID ) REFERENCES user(ID)
);
desc user_info;
