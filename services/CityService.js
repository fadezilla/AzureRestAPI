class CityService {
    constructor(db) {
        this.client = db.sequelize;
        this.City = db.City;
    }

    async getAll() {
        return this.City.findAll({
            where: {}
        });
    }

    async create(name) {
        return this.City.create(
            {
                Name: name,
                Country: country
            }
        ).catch(function (err) {
            console.log(err);
        })
    }

}

module.exports = CityService;