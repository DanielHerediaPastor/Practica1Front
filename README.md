# Práctica 1 - React + TypeScript + SWAPI

## Descripción

El objetivo es mostrar los personajes en tarjetas, gestionando correctamente los estados de carga, error y paginación.

Se realiza una llamada a la API pública de Star Wars (https://swapi.dev/api/people/) para obtener los datos de los personajes y mostrarlos en tarjetas. Además, se evita las pantallas en blanco y se implementa el manejo de errores en caso de que la petición falle. Finalmente, se incorpora una paginación acumulativa, permitiendo cargar más personajes sin reemplazar los ya mostrados.

## Instalación de dependencias

Ejecuta este comando

npm install

## Ejecutar el proyecto

Para arrancar el servidor de desarrollo:

npm run dev

Después en el navegador pone esto:

http://localhost:5173


## Explicación del desarrollo

El proyecto se ha desarrollado utilizando React. 
La lógica principal está en el App, donde se realiza la llamada a la API y se gestionan los estados de carga, error y paginación. 
Los personajes se muestran mediante componentes separados para mantener una estructura bonita.

## Problemas encontrados

Durante el proyecto surgieron algunos problemas relacionados con:

- Gestión correcta del estado loading.
- Acumulación correcta de resultados en la paginación.


## Soluciones aplicadas

- Uso de try/catch para manejar errores de red.
- Uso de actualización funcional en setCharacters para acumular datos correctamente.