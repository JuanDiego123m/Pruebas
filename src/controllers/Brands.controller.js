// import { Brands } from '../models/Brands.js';
// import { Op } from 'sequelize';
// import app from '../app.js';
// import fs from 'fs/promises'; // Importar el módulo fs para manejar archivos

// export const getBrands = async (req, res) => {
//     try {
//         const brandList = await Brands.findAll();
//         res.json(brandList);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: error.message });
//     }
// };

// export const postBrands = async (req, res) => {
//     try {
//         const data = await fs.readFile('vehicles.json', 'utf-8');
//         const jsonData = JSON.parse(data);

//         const brandDataList = jsonData.vehicleType;
//         const createdBrands = [];

//         for (const brandData of brandDataList) {
//             const { type, brand } = brandData;

//             for (const brandInfo of brand) {
//                 const { name, line } = brandInfo;

//                 for (const lineName of line) {
//                     const [newBrand, created] = await Brands.findOrCreate({
//                         where: {
//                             VehicleType: type,
//                             NameBrand: name,
//                             BrandLine: lineName
//                         }
//                     });

//                     if (created) {
//                         createdBrands.push(newBrand);
//                     }
//                 }
//             }
//         }

//         return res.status(200).json(createdBrands);
//     } catch (error) {
//         console.error("Error al crear registros:", error);
//         return res.status(500).json({ message: error.message });
//     }
// };