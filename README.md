# Rick & Morty API Cache con Redis

Este es un proyecto de una API en Node.js que consulta la API de Rick & Morty y usa Redis como caché para mejorar los tiempos de respuesta.

## 🚀 Tecnologías utilizadas

- Node.js
- Express
- Axios
- Redis
- Docker

## ⚙️ Instalación y ejecución

### 1. Clonar el repositorio
```bash
git clone [https://github.com/tu-usuario/tu-repositorio.git](https://github.com/rodriazuaga/RickyMorty.git)
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Ejecutar Redis con Docker
```bash
docker run -d --name redis -p 6379:6379 redis
```

### 4. Configurar Redis en el proyecto
En `index.js`, asegúrate de que Redis se conecta correctamente:
```javascript
const client = createClient({
  socket: {
    host: 'localhost',
    port: 6379
  }
});
```

### 5. Iniciar el servidor
```bash
node index.js
```

## 🛠 Uso de la API

### Obtener personajes de Rick & Morty
```bash
GET http://localhost:3000/personajes
```

- La primera vez que se hace una petición, los datos se obtienen de la API de Rick & Morty.
- Las siguientes veces, los datos se sirven desde Redis para mejorar la velocidad.

## 🐳 Usando Docker Compose
Si quieres ejecutar la API y Redis con **Docker Compose**, usa el siguiente archivo `docker-compose.yml`:

```bash
docker-compose up -d
```



