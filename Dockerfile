FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
RUN mkdir -p /usr/share/nginx/html/lab02
COPY ./ejercicio1 /usr/share/nginx/html/lab02/ejercicio1
COPY ./ejercicio2 /usr/share/nginx/html/lab02/ejercicio2
COPY ./ejercicio3 /usr/share/nginx/html/lab02/ejercicio3
EXPOSE 80