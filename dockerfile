# Seleccionando imagen base 
FROM node:18-alpine

# Creando directorio de trabajo
WORKDIR /app

# Copiando package.json
COPY package.json /

# Instalando dependencias
RUN npm install

# Copiando archivos todo al workdir
COPY . /

# Construyendo la aplicación
RUN npm run build

# Exponiendo el puerto 3000
EXPOSE 3000

# Iniciando la aplicación
CMD ["npm", "start"]