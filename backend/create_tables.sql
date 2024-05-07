CREATE TABLE users(
	id serial PRIMARY KEY,
	email varchar(255) UNIQUE NOT NULL,
	password varchar(255) NOT NULL,
	username varchar(255) UNIQUE NOT NULL,
	picture_url text DEFAULT 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'
);
CREATE TABLE blogs(
	id serial PRIMARY KEY,
	user_id integer NOT NULL,
	date_created TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
);
CREATE TABLE blog_content(
	blog_id integer NOT NULL,
	user_id integer NOT NULL,
	blog_title varchar(255) NOT NULL,
	content text NOT NULL,
	tags varchar(255) ARRAY,
	date_updated TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
	FOREIGN KEY (blog_id) REFERENCES blogs(id) ON DELETE CASCADE 
);
CREATE TABLE comments(
	id serial PRIMARY KEY,
	user_id integer NOT NULL,
	blog_id integer NOT NULL,
	message varchar(255) NOT NULL,
	date_created TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (user_id) REFERENCES users(id),
	FOREIGN KEY (blog_id) REFERENCES blogs(id)
);