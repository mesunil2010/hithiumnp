# Docker Setup Guide

This project can be run entirely in Docker using Docker Compose.

## Prerequisites

- Docker (version 20.10+)
- Docker Compose (version 1.29+)

## Quick Start

### 1. Start all services

```bash
docker-compose up -d
```

This will start:
- **PostgreSQL** database on port 5432
- **Redis** cache on port 6379
- **Medusa Backend** on port 9000
- **Next.js Storefront** on port 8000

### 2. Access the applications

- **Storefront**: http://localhost:8000
- **Backend API**: http://localhost:9000

## Useful Commands

### View logs
```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f backend
docker-compose logs -f storefront
docker-compose logs -f postgres
```

### Stop services
```bash
docker-compose down
```

### Remove volumes (clean database)
```bash
docker-compose down -v
```

### Rebuild images
```bash
docker-compose build --no-cache
```

### Run shell in container
```bash
docker-compose exec backend sh
docker-compose exec storefront sh
```

## Environment Variables

Configuration is managed through the `.env.docker` file at the project root.

Key variables:
- `DB_USER` - PostgreSQL username
- `DB_PASSWORD` - PostgreSQL password
- `DB_NAME` - PostgreSQL database name
- `JWT_SECRET` - JWT secret for authentication
- `NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY` - Medusa publishable key
- `NEXT_PUBLIC_MEDUSA_BACKEND_URL` - Backend URL (use `http://backend:9000` in Docker)

## Development

- **Backend**: Changes to `./backend` directory are hot-reloaded
- **Storefront**: Changes to `./storefront` directory are hot-reloaded
- **Database**: Data persists in the `postgres_data` volume

## Troubleshooting

### Containers won't start
```bash
# Check logs
docker-compose logs

# Rebuild and restart
docker-compose down -v
docker-compose build --no-cache
docker-compose up -d
```

### Port conflicts
If ports 8000, 9000, 5432, or 6379 are already in use, modify the `docker-compose.yml` file to use different host ports.

### Database connection issues
Ensure PostgreSQL is healthy:
```bash
docker-compose exec postgres pg_isready -U hithium
```

### Node modules issues
```bash
docker-compose down -v
docker-compose build --no-cache
docker-compose up -d
```
