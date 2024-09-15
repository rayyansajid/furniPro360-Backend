const {sequelize} = require('../../config/pgSqlConfig')

async function syncModels() {
    try{
        await sequelize.sync({
            alter:true,
            force: false
        });

        console.log("all models synchronized successfully");
    }catch(err){
        console.error(err)
    }
}

module.exports={
    syncModels
}