CREATE DATABASE nike;

USE nike;

/* 회원 정보 : 아이디(PK), 비밀번호, 이름, 이메일, 연락처, 생년월일, 성별, 주소 */ 
CREATE TABLE user (
	id varchar(10) not null primary key,
    pw varchar(20) not null,
    name varchar(5) not null,
    email varchar(30) not null,
    contact varchar(13) not null,
    birthday date not null,
    gender ENUM('F', 'M', '') default '',
    address varchar(100)
);

/* 매장 정보 : 매장 아이디(PK), 매장 이름, 매장 주소 */ 
CREATE TABLE store (
	store_id varchar(20) not null primary key,
    store_name varchar(50) not null,
    store_address varchar(100)
);

/* 스태프 정보 : 스태프 아이디(PK), 이름, 일, 연락처, 생년월일, 성별, 근무 매장(store 테이블 - store_id) */
CREATE TABLE staff (
	staff_id varchar(10) not null primary key,
    staff_name varchar(5) not null,
    job varchar(10) not null,
    contact varchar(13) not null,
    birthday date not null,
    gender ENUM('F', 'M', '') default '',
    store varchar(20),
    FOREIGN KEY ( store ) REFERENCES store(store_id)
);

/* 상품 타입 : 아이디(PK), 타입 이름(옷, 신발, 가방 등등) */ 
CREATE TABLE product_type (
	type_id varchar(10) not null primary key,
    type_name varchar(10) not null
);

/* 상품 정보 : 아이디(PK), 상품 타입(product_type 테이블 - type_id), 최대 사이즈, 최소 사이즈, 가격 */ 
CREATE TABLE product (
	product_id varchar(20) not null primary key,
	product_type varchar(10),
    FOREIGN KEY ( product_type ) REFERENCES product_type(type_id),
    max_size varchar(5) not null,
    min_size varchar(5) not null,
    price int not null
);

/* 상품 사이즈 별 수량 : 상품 아이디(product 테이블 - product_id), 사이즈, 수량 */
/* 사실 없어도 된다. 아래 product_in_store에 있는 정보를 더하면 되니까
CREATE TABLE amount_per_product_size (
	product_id varchar(20),
    FOREIGN KEY ( product_id ) REFERENCES product(product_id),
    size varchar(5) not null,
    amount int not null default 0
); */

/* 매장에 위치한 상품 정보 : 매장 아이디(store - store_id), 상품 아이디(product - product_id), 사이즈, 상품 수량 */ 
CREATE TABLE product_in_store (
	store_id varchar(20),
    FOREIGN KEY ( store_id ) REFERENCES store(store_id),
    product_id varchar(20),
    FOREIGN KEY ( product_id ) REFERENCES product(product_id),
    /* product 테이블의 max_size 와 min_size 사이의 사이즈만 입력할 수 있게 condition을 설정할 수 있나? */ 
    size varchar(5) not null,
    /* product 테이블의 설정된 사이즈의 수량을 넘지 않게 설정? */ 
    amount int not null default 0
);

/* 주문 정보 : 주문번호, 회원 아이디(user 테이블 - id), 상품 아이디(product 테이블 - product_id), 주문 수량 */
/* 이렇게 설정하면 다른 상품을 주문했을 경우 주문번호가 두 개 생기게 된다. */ 
CREATE TABLE buy (
	buy_id varchar(10) not null primary key,
    user_id varchar(10),
    FOREIGN KEY ( user_id ) REFERENCES user(id),
    product_id varchar(20),
    FOREIGN KEY ( product_id ) REFERENCES product(product_id),
    buy_amount int not null
);

DROP TABLE buy;
DROP TABLE product_in_store;
DROP TABLE amount_per_product_size;
DROP TABLE product;
DROP TABLE product_type;
DROP TABLE staff;
DROP TABLE store;
DROP TABLE user;


