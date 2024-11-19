import express from 'express';
import cors from 'cors'; 
import localizacionesRoutes from './routes/localizaciones.routes.js';

const app = express();


const corsOptions = {
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
    credentials: true, 
};

// Middleware
app.use(cors(corsOptions)); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 


app.use('/api', localizacionesRoutes);


app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint not found',
    });
});

export default app;