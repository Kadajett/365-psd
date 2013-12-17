create table projects(
    id bigint primary key auto_increment,
    name varchar(50) not null,
    image varchar(255),
    description text,
    url varchar(255),
    isActive boolean default 1, 
    createdOn timestamp default current_timestamp
);
