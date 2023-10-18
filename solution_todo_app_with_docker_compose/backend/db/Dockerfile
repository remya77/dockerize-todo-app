FROM postgres
# This is the image we'll use as the base

ENV POSTGRES_PASSWORD docker
# This is the password we'll define for the Docker Postgres instance

ENV POSTGRES_DB todo_app_db
# This is what we'll name the database inside the container

COPY todo.sql /docker-entrypoint-initdb.d/
# Copy the todo.sql file to the listed path in the container
