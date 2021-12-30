    module.exports=(sequelize,Datatypes)=>{
        const Post_Tag = sequelize.define("post_tag",{
            postId:Datatypes.INTEGER,
            tagId :Datatypes.INTEGER,

        },{timestamps:false});
        return Post_Tag
    }

