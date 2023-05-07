const { Logger } = require('../config')

class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
            const response = await this.model.create(data);
            return response;
    }

    async destroy(data) {
        try {
            const response = await this.model.destroy({
                where: {
                    id: data
                }
            });

            return response;
        }
        catch(error) {
            Logger.error("Something went wrong in the CRUD repo");
            throw error;
        }
    }

    async get(data) {
        try {
            const response = await this.model.findByPk({
                where: {
                    id: data
                }
            });

            return response;
        }
        catch(error) {
            Logger.error("Something went wrong in the CRUD repo");
            throw error;
        }
    }

    async get(data) {
        try {
            const response = await this.model.findAll({
                where: {
                    id: data
                }
            });

            return response;
        }
        catch(error) {
            Logger.error("Something went wrong in the CRUD repo");
            throw error;
        }
    }

    async update(data) {
        try {
            const response = await this.model.update(data, {
                where: {
                    id: data
                }
            });

            return response;
        }
        catch(error) {
            Logger.error("Something went wrong in the CRUD repo");
            throw error;
        }
    }
}

module.exports = CrudRepository;