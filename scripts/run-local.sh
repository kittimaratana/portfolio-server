#!/bin/bash

# Stop all running containers and remove them
docker-compose down -v
docker ps -a | grep 'portfolio-server' | awk '{print $1}' | xargs -r docker rm -f
docker ps -a | grep '5001' | awk '{print $1}' | xargs -r docker rm -f

# Build and start the containers
docker-compose up -d

# Show MySQL logs
echo "MySQL container logs:"
docker-compose logs mysql

# Wait a bit for MySQL to be ready
echo "Waiting for MySQL to be ready..."
sleep 15

# Show logs from the app container
echo "App container logs:"
docker-compose logs app

# Run migrations and seeds using knex directly
echo "Running migrations..."
docker-compose exec app npx knex migrate:latest

echo "Running seeds..."
docker-compose exec app npx knex seed:run

echo "Portfolio server running on http://localhost:5001"
