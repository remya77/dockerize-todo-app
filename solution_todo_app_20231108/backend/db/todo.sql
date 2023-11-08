CREATE TABLE todos (
  ID SERIAL PRIMARY KEY,
  title VARCHAR(50),
  done BOOLEAN
);

INSERT INTO todos (title, done)
  VALUES ('Get Milk', false), ('Walk Dog', false);