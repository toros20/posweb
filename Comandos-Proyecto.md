# Creamos el archivo package.json
npm init -y

# crear archivo .gitingnore 
# agregar node_modules, .env

# Instalamos las dependencias principales
npm install express pg pg-hstore sequelize morgan @babel/poltallyfill cors dotenv

# instalamos las dependencias de desarrollo
npm install --save-dev @babel/core @babel/cli @babel/preset-env nodemon