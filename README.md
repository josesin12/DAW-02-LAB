# Laboratorio 02 - Ejercicios JS/HTML en Docker

Este proyecto utiliza Docker y Nginx para servir tres carpetas de ejercicios localmente.

## Estructura Requerida

El archivo Dockerfile debe estar en la raiz del proyecto junto a las carpetas de los ejercicios. Basado en los archivos, la estructura debe verse asi (respetando mayusculas y minusculas en las carpetas):

tu_proyecto/
├── Dockerfile
├── Ejercicio1/
│   └── ejercicio1.html (ejemplo)
├── ejercicio2/
│   ├── calculadora.js
│   ├── calculadoraO.min.js
│   └── ejercicio2.html
└── ejercicio3/
    ├── eje3.js
    ├── eje3O.min.js
    └── ejercicio3.html

## Comandos de Ejecucion

1. Construir la imagen de Docker:
Abre tu terminal en la carpeta raiz y ejecuta:

docker build -t lab02-nginx .

2. Ejecutar el contenedor:
Levanta el contenedor mapeando el puerto 8080:

docker run -d -p 8080:80 --name mi-lab02 lab02-nginx

## Rutas de Acceso

Una vez que el contenedor este corriendo, abre tu navegador y accede a los ejercicios a traves de los siguientes enlaces:

* Ejercicio 1: http://localhost:8080/lab02/ejercicio1.html 
* Ejercicio 2: http://localhost:8080/lab02/ejercicio2.html
* Ejercicio 3: http://localhost:8080/lab02/ejercicio3.html

VIDEO DE PRUEBA: https://youtu.be/cxqB5yLorZw?si=4MHtqDJDjkIDSeRT
