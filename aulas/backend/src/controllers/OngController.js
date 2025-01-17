const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async create(request, response){
        const {nome, email, whatsapp, city, uf}  = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert({
            id,
            nome,
            email,
            whatsapp,
            city,
            uf
        });
        //console.log(data);
        return response.json({id});
    },

    async index(request, response){
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    }
};