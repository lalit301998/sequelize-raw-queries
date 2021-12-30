module.exports=(sequelize,Datatypes)=>{
    const Tags= sequelize.define("tags",{
        name:Datatypes.STRING,
    },{
        CreatedAt:'create_at',
        updatedAt:'modified_at'
    });
    return Tags
}

