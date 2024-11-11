# Usar nginx como base
FROM nginx:alpine

# Copiar los archivos del proyecto a la carpeta de Nginx
COPY . /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80
