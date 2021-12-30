module.exports=(sequelize,Datatypes)=>{
    const Posts = sequelize.define("posts",{
        name:Datatypes.STRING,
        title:Datatypes.STRING,
        content:Datatypes.STRING,
        user_id:Datatypes.INTEGER        
    });
    return Posts;
}