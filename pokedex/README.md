<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>


# Ejecutar el proyecto

1. Clonar el repositorio
```
git clone link_repositorio
```

2. Ejecutar en la terminal el comando
```
npm install
```

3. Tener instalado Nest CLI
```
npm install -g @nestjs/cli
``` 

4. Levantar la base de datos
```
docker-compose up -d
```

5. CLonar el archivo __.env.template__ , renombralo a  __.env__ y luego configura el archivo con los valores

6. Ejecutar la aplicacion en desarrollo
```
npm run start:dev
```

7. para reconstruir la base de datos con la semilla usa un get a la siguiente URL
``` 
http://localhost:3000/api/seed
```


## Stack usado
* Mongo DB
* Nest JS