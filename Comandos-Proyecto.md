# Creamos el archivo package.json en el backend
npm init -y

# crear archivo .gitingnore en el backend
# agregar node_modules, .env

# Instalamos las dependencias principales
npm install express pg pg-hstore sequelize morgan @babel/poltallyfill cors dotenv

# instalamos las dependencias de desarrollo
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node nodemon 

# crear archivo .babelrc  en la carpeta principal del backend
{
    "presets": ["@babel/preset-env"]
}

# crear los siguientes script en package.json
"scripts": {
    "dev": "nodemon src/index.js --exec babel-node",
    "build": "babel src --out-dir dist",
    "start": "node dist/index.js"
},

# ejecutar npm run build para crear la carpeta dist

# crear las carpetas src, routes, models, controllers y database

# crear archivo .env 
    PORT=5000
    DB_URI=
    DB_NAME=
    DB_USER=
    DB_PASS=

# crar en src los archivos index.js y app.js  src/index.js , src/app.js

# crear archivo de rutas products.js en routes
import {Router} from 'express';
const router = Router();

import {createProduct,listProducts,findProduct,deleteProduct,updateProduct } from '../controllers/productsController';
// rutas /api/products
router.post('/', createProducts);
router.get('/', listProducts);
router.get('/:id', findProduct);
router.delete('/:id', deleteProduct);
router.put('/:id', updateProducts);

export default router;

# crear los controladores y los modelos , seguir la programacion 
Controllers/productsController.js