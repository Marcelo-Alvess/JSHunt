CREATE TABLE product (
	id 					SERIAL 		 	 PRIMARY KEY,
	title				VARCHAR(100) NOT NULL,
 	description VARCHAR(100) NOT NULL,
	url 				VARCHAR(100) NOT NULL,
	createdAt 	TIMESTAMP 	 DEFAULT NOW()
);