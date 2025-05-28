# Examen

Este proyecto utiliza Docker Compose para levantar dos servicios:

- **Backend (`node_server`)**
- **Frontend (`frontend`)**

Docker

## Opción 1: Usar imágenes de Docker Hub

Este método utiliza directamente las imágenes publicadas en Docker Hub.

### Paso 1: Crear el archivo `docker-compose.yml`

```yaml
version: '3.9'

services:
  node_server:
    image: paulsebastian97/apppruebawebs
    container_name: node_server
    hostname: node_server
    ports:
      - "3000:3000"
    command: npm start
    networks:
      - app-network

  frontend:
    image: paulsebastian97/appfrontedinter
    depends_on:
      - node_server
    ports:
      - "4200:80"
    networks:
      - app-network

networks:
  app-network:
    driver: bridge
