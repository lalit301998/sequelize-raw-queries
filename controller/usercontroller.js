var UserService = require('../service/service')    
const db = require('../models')
const Users=db.users;
const Posts = db.posts;
const Tags = db.tags;
const {Sequelize} = require('sequelize');
const { query } = require('express');
const users = require('../models/users');
const posts = require('../models/posts');
// queytypes is used for raw query with the help of raw query  you can write own
// sql
const QueryTypes = Sequelize.QueryTypes;
const Op = Sequelize.Op;
// const { eq } = require('sequelize/types/lib/operators');
// const { DESCRIBE } = require('sequelize/types/lib/query-types');

/**
 * @param {*} req 
 * @param {*} res 
 * @uses this function is using to create users.
 * @date 24 sept 2021
 * @author Lalit Mahajan
 * @edited by ABC XYZ
 */

var adduser = async (req,res)=>{
   try{
    console.log("this is request datappppppppppppppppp",req.body);
    let crete = {name:req.body.name,email:req.body.email};
    let result1 =  await UserService.adduser(crete);
    res.status(200).json(result1); 
   } 
   catch(err){
       console.log(err);
       res.send({messgae:err})
   }
}

var updateuser = async (req,res)=>{
    UserService.updateuser()
    res.status(200).json({
        messgae:"updated successfully"
    })
    
}   

var deluser = async (req,res)=>{
    let result2 = UserService.deluser()
    res.status(200).json({messge:"deleted successfully"});  
}



var crudOperation = async (req,res)=>{
  let creteria = {where :{id:13}};
  let result =  await UserService.crudOperation(creteria); 
  res.status(200).json(result);     
}
var querydata = async(req,res)=>{
    // if we wnat to insert only one field that is email
        // let data = await Users.create({name:'lalit',email:'final@gmail.com',gender:'male'},{
        // fields :["email","gender"] // in this filed we will give permission  to email and gender 
        // // to insert       
        // });

        // select query
       // let data = await Users.findAll({});

       // with query of findone
      
      // let data = await Users.findOne({});
       
      // with the query we find particular attributes we use below query
       
    //   let data = await Users.findAll({
    //      attributes:['name','email']

    //         });

    // with the query we replace the email with email id

    // let data = await Users.findAll({
    //          attributes:['name',
    //          ['email','emailid']]
    
    //              });

    // to add the attributes we use and in this below query we  count the
    // email  
    // let data = await Users.findAll({
    //             attributes:['name',
    //               ['email','emailid'],
    //               'gender',
                
    //             //[Sequelize.fn('count',Sequelize.col('email')),'emailcount']
    //             //[Sequelize.fn('CONCAT',Sequelize.col('email'),'ID'),'emailcount']
    //         ]
    //                   });

    // include -exclude
    
    // let data = await Users.findAll({
    // attributes:{
    //     exclude:['create_at','modified_at'],
    //     // the above query includes the add the singh into name and then print as fullname
    //     include:[
    //         [Sequelize.fn('CONCAT',Sequelize.col('name'),'singh'),'fullname']
    
    //     ]} 
    // });

// ---- condition kaise lagate ha

    // let data = await Users.findAll({
    //   where:{
    //     id:2
    //   }

    // })

// how to use operator in sequelize

//    let data = await Users.findAll({
//        where:{
//          // it return the id where id equal to 2
//         id :{ [Op.eq]:2}
         
//        },
//        email:{

//        // it return the email where @gmail.com age kuch bhi ho 
//         [Op.like]:"%@gmail.com"
//        }
//      })

// use of order by and greater than in sequelize

// let data = await Users.findAll({
//            where:{
//               // it return the id where id equal to 2 where gt i greater than 2
//              id :{ [Op.gt]:2}
             
//             },
//             email:{
    
//             // it return the email where @gmail.com age kuch bhi ho 
//              [Op.like]:"%@gmail.com"
//             },
//             order :[
//                 ['name','DESC'],
//                 ['email','DESC']
//             ],
//             group:['email','name'],
//             // kitni limit ka data hamare pass ana chahiye
//             limit:1,
//             // offset kya karega kitne record skip krne shuru me wo batyga 
//             // baki print karega
//             offset:1
//           })


// how to find count using sequelize

// let data = await Users.count({})


// next start with queryfinder queries

//1. findbypk
//2. findone
//3. findAll
//4. findAndCountAll
    }
 var finderData = async(req,res)=>{

//     // let data = await Users.findAll({})
//     //let data = await Users.findOne({})
//     // findbypk is used to fetch the record based on primary id
//     //let data = await Users.findByPk(4)
//     // findAndcountAll first it find the records then it count the rows 
//     let data = await Users.findAndCountAll({
//     where:{
//            email:'final@gmail.com'
//     }
//     })

// find or create function is used to first it find if it is not find then create it
// it reurn the data and then created

// start transaction
//select then insert then commit agar doubt ho logging rue kr ke dekh lalit
//    let [data,created] = await Users.findOrCreate({
//        where:{
//            name:'dummy'
//        },
//        defaults:{
//        email:"dummy@gmail.com",
//        gender:"male"
//        }
//    })
 let response = {
             data:data,
             add:created

             }
             res.status(200).json(response)
        
         } 
 // we can set the value in user.js table         
var setterGetter =async(req,res)=>{

    //let data = await Users.create({name:'rajan',email:'gndul@gmail.com',gender:'male'})    
 let data = await Users.findAll({})
 // findall used for getting the data
let response={

    data:data

}
res.status(200).json(response)

 }
 
 var validationcnt = async(req,res)=>{

let data = await Users.create({name:'pesddsafdADAdsn',email:'',gender:'male'})    

let response ={

    data:data           
}
res.status(200).json(response)
 }
 var rawquery = async(req,res)=>{

    //let data = await Users.create({name:'pesddsafdADAdsn',email:'',gender:'male'})    
    
    //const users = await db.sequelize.query("select *from  users where gender=:gender",{
    //const Users = await db.sequelize.query("select * from  users where gender=?",{
    //const Users = await db.sequelize.query("select * from  users where gender IN(:gender)",{
  //const Users = await db.sequelize.query("select * from  users where email LIKE :searchEmail",{  
//   const Users = await db.sequelize.query("select * from  users where gender= $gender",{ 
//   type:QueryTypes.SELECT,
        // to define the model and show the model
       //model:users,
      // replacements:{gender:'male'} //gender=:gender
        // Map to model is true
        //replacements:['male']//  gender=?" it works on where gender = male
        // mapToModel:true,
        //replacements:{gender:['male','female']}// gender IN(:gender) in check the record whether
        // it is in table or not
        //replacements:{searchEmail:'%@gmail.com'} // email like@ searchemail
        //bind:{gender:'male'}
//         Bind parameters are like replacements. Except replacements are escaped and inserted into the query by sequelize before the query is sent to the database, while bind parameters are sent to the database outside the SQL query text. A query can have either bind parameters or replacements. Bind parameters are referred to by either $1, $2, ... (numeric) or $key (alpha-numeric). This is independent of the dialect.

// If an array is passed, $1 is bound to the 1st element in the array (bind[0])
// If an object is passed, $key is bound to object['key']. Each key must begin with a non-numeric char. $1 is not a valid key, even if object['1'] exists.
// In either case $$ can be used to escape a literal $ sign.
// The array or object must contain all bound values or Sequelize will throw an exception. This applies even to cases in which the database may ignore the bound parameter.

// The database may add further restrictions to this. Bind parameters cannot be SQL keywords, nor table or column names. They are also ignored in quoted text or data. In PostgreSQL it may also be needed to typecast them, if the type cannot be inferred from the context $1::varchar.


    //})
    let response ={
    
        data:'rawquery' ,record:Users          
    }
    res.status(200).json(response)
     }



// Association 

// 1. one to one
// 2. one to many
// 3. many to many

//The HasOne association
// The BelongsTo assocaiton
// The hasmany Association
// The BelongsToMany Assocaition

var onetone = async(req,res)=>{
    try {
        // console.log(Posts,"Posts");
        let data = await     Users.findAll({
            // to fetch the record name and email form user tabel whrer primary
            // is defined and attributes is used to fetch the record from attribute
            // name and email
            attributes:['name','email'],
            include: [{
                model: Posts,
                as:'postDetail',
                // it stores the name into postname like rajan is troed into PostName
                attributes:['title',['name','PostName']],
                required: true  
            }],
            where:{id:1}
        })
    //    var data= Users.findAll({
    //         //where: {id: 8},
    //         include: [{
    //           model: Posts,
    //         //   where: {id: 8}
    //          }]
    //       }).then(posts => {
    //         /* ... */
    //       });

        res.status(200).json(data)
    } catch (err) {
        console.log(err,"err");
    }
}
var belongsTo = async(req,res)=>{
    try {
        // console.log(Posts,"Posts");
        let data = await Posts.findAll({
            // to fetch the record name and email form user tabel whrer primary
            // is defined and attributes is used to fetch the record from attribute
            // name and email
                    })
    //    var data= Users.findAll({
    //         //where: {id: 8},
    //         include: [{
    //           model: Posts,
    //         //   where: {id: 8}
    //          }]
    //       }).then(posts => {
    //         /* ... */
    //       });

        res.status(200).json(data)
    } catch (err) {
        console.log(err,"err");
    }
}    

var manytomany = async(req,res)=>{
    try {
        
        let data = await Posts.findAll({})         
   

        res.status(200).json(data)
    } catch (err) {
        console.log(err,"err");
    }
}
module.exports={

    manytomany, adduser,crudOperation,deluser,updateuser,querydata,finderData,setterGetter,validationcnt,rawquery,onetone,belongsTo
}