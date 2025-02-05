class ColorService {
    constructor(db) {
        this.client = db.sequelize;
        this.Color = db.Color;
    }

    async getAll() {
        return this.Color.findAll({
            where: {}
        });
    }

    async create(name) {
        return this.Color.create(
            {
                Name: name
            }
        ).catch(function (err) {
            console.log(err);
        })
    }

    async delete(name){
        return this.Color.destroy({
            where: {Name: name}
        }).catch(function (err) {
            console.log(err);
        });
    }

}

module.exports = ColorService;