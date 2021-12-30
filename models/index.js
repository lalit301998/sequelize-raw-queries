const {Sequelize,DataTypes} = require('sequelize');
var sequelize = new Sequelize('ico_structure','root','password',{

host : 'localhost',
dialect :'mysql',
pool:{max:5,min:0,idle:1000},
logging:true,
})
// if it is authenticated then connection works
sequelize.authenticate().then(()=>{
console.log("connected");
}).catch(err=>{
    console.log(err);

})

var db = {};
db.Sequelize= Sequelize;
db.sequelize=sequelize;
// isko hamne usercontroller.js me import krvay ha please see
db.users=require("./users.js")(sequelize,DataTypes);
//define ke ander jo bhi naam ho ga woh use krna ha jaha par
db.posts = require("./posts")(sequelize,DataTypes);
db.tags = require("./tag")(sequelize,DataTypes);
db.post_tag = require("./post_tag")(sequelize,DataTypes);

// hasone define the relation between user tbale and posttable in database
// belongsTo define the relation 

// The A.hasOne(B) association means that a One-To-One relationship exists between A and B, with the foreign key being defined in the target model (B).

// The A.belongsTo(B) association means that a One-To-One relationship exists between A and B, with the foreign key being defined in the source model (A).

// The A.hasMany(B) association means that a One-To-Many relationship exists between A and B, with the foreign key being defined in the target model (B).
//db.users.hasOne(db.posts,{foreignkey:'user_id',as:'postDetail'});


//------one to many-------

//db.users.hasMany(db.posts,{foreignkey:'user_id'})// default it takes userid

// default it takes userid
// db.posts.belongsTo(db.users,{foreignkey:'user_id',as:'postDetail'})

//--- many to many---------

db.posts.belongsToMany(db.tags,{through:'post_tag'})
db.tags.belongsToMany(db.posts,{through:'post_tag'})//postID //TagID




// if our column name is changed in table.

db.sequelize.sync({force:true}).then(()=>{
    console.log('yes resync');

});
console.log(db.users , "~~~~~~~~~");
module.exports = db;
