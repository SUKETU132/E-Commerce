// const Product = require("../Models/product.model.cjs");
// const { Server } = require("socket.io");

// let io;

// const initSocket = async (server) => {
//     io = new Server(server, {
//         cors: {
//             origin: '*',
//             methods: ['GET', 'POST'],
//             allowedHeaders: ['Content-Type'],
//             credentials: true,
//         }
//     });

//     io.on("connection", (socket) => {
//         console.log("New client connected:", socket.id);

//         socket.on("disconnect", () => {
//             console.log("Client disconnected:", socket.id);
//         });
//     });

//     await emitOutOfStockProducts();
// };

// const emitOutOfStockProducts = async () => {
//     try {
//         const outOfStockProducts = await Product.find({ stock: { $lte: 0 } });
//         io.emit("outOfStock", outOfStockProducts);
//         console.log("Emitted out-of-stock products:", outOfStockProducts);
//     } catch (error) {
//         console.error("Error fetching out of stock products:", error);
//     }
// };

// const getSocket = () => {
//     if (!io) {
//         throw new Error("Socket.io not initialized!");
//     }
//     return io;
// };

// module.exports = { initSocket, getSocket };
