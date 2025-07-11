const corsConfig = {
    // origin: 'http://localhost:5173', // ou o domínio do seu front
    origin: 'http://147.93.9.180:4500/',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'user-token'],

}


module.exports = {
    corsConfig
}