// import {Router} from 'express';
// import {getSalesData, getPurchasesData, getTotalVehicles, getTotalClients} from '../controllers/Dashboard.controller.js';

// export const DashboardRoutes = Router();

// DashboardRoutes.get('/Dashboard/Sales/withMonth', getSalesData);

// DashboardRoutes.get('/Dashboard/Purchases/withMonth', getPurchasesData);

// DashboardRoutes.get('/Dashboard/Vehicles/totalVehicles', getTotalVehicles);

// DashboardRoutes.get('/Dashboard/Clients/totalClients', getTotalClients);

// const express = require('express');
// const router = express.Router();

// // ... otras rutas ...

// // Ruta para servir la vista de gráfico de ventas
// router.get('/Dashboard/SalesChart', (req, res) => {
//     res.render('sales-chart'); // Si estás utilizando Pug como motor de plantillas
//     // O puedes usar res.sendFile para HTML
//     // res.sendFile(__dirname + '/views/sales-chart.html');
// });

// module.exports = router;
import { Router } from 'express';
import {
    getSalesData,
    getPurchasesData,
    getTotalVehicles,
    getTotalClients
} from '../controllers/Dashboard.controller.js';
export const DashboardRoutes = Router();
export const path = ('path');
// Rutas para obtener datos
DashboardRoutes.get('/Dashboard/Sales/withMonth', getSalesData);
DashboardRoutes.get('/Dashboard/Purchases/withMonth', getPurchasesData);
DashboardRoutes.get('/Dashboard/Vehicles/totalVehicles', getTotalVehicles);
DashboardRoutes.get('/Dashboard/Clients/totalClients', getTotalClients);

// Ruta para servir la vista de gráfico de ventas
DashboardRoutes.get('/Dashboard/SalesChart', (req, res) => {
    res.sendFile(__dirname, 'Dashboard' ,'sales-chart.html');
});