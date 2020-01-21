require('dotenv').config();
//importamos el objeto servidor 
import express, { json } from 'express';
//morgan ayuda a recibir en consola las peticiones http
import morgan from 'morgan';
//importamos el middleare core para el enlace entre servidores
import cors from 'cors';
//Import Routes
import productsRoutes from './routes/products';
//Initialization
const app = express();
//settings
app.set('port',process.env.PORT || 6000);
//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(json()); // para entender archivos json
//routes
app.use('/api/products',productsRoutes); 

export default app;