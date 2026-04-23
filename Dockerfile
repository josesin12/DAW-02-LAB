FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
RUN mkdir -p /usr/share/nginx/html/lab02
COPY ./Ejercicio1/* /usr/share/nginx/html/lab02/
COPY ./ejercicio2/* /usr/share/nginx/html/lab02/
COPY ./ejercicio3/* /usr/share/nginx/html/lab02/

EXPOSE 80