export const userTableSchema = `_id varchar(30) NOT NULL,
user varchar(200) NOT NULL,
avatar TEXT,
PRIMARY KEY (_id)`;

export const chatTableSchema = `
    _id varchar(30) NOT NULL,
    create_at DATE,
    content TEXT ,
    fromUser varchar(30),
    toUser varchar(30),
    key varchar(30),
    group_member varchar(100),
    status int,
    type varchar(10),
    PRIMARY KEY (_id)
`