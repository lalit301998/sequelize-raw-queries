
const db = require('../models')
const Users=db.users;
var adduser = async (crete)=>{
    try {   
    let data = await Users.create(crete);
    return data;
 //console.log(data. dataValues)
    // to update the name
    //data.name="dummy";
    // then save the data
    data.save();
    // await data.save();
    //data.destroy();

    // reload

    //data.name='dummy'
    //data.reload()
    //data.save()

    //working of reload is to change the it cannot update the name dummy
    //it take the previous value which you pass at the time of insert
    // it can update the value of reload only when you write data.save()

    let response = {
        data:'ok'
    }

    res.status(200).json(response);
} catch (err) {
    console.log(err, "err");
}
}


var crudOperation = async (creteria)=>{

    // insert
   // let data = await Users.create({name:'demolas',email:'rajan@gmail.com',gender:'male'});
   // console.log(data.id)// data.id prints the last id

//---update
// let data = await Users.update({name:'lalit',email:'final@gmail.com'},{
//     where :{
//         id:13
//     }
    
// })
// in above code update it update the name with lalit and email= final@gmail.com
// where id =13

// --delete
// let data = await Users.destroy({
//        where :{
//              id:12
//          }
//         })
// it deletes whre id =12

// // truncate
// let data = await Users.destroy({
// truncate:true
//it truncate the table means every data is remove
// })

//bulk insert

// let data = await Users.bulkCreate([
// {name:'lalit',email:'first@gamil.com',gender:'male'},
// {name:'lalit',email:'first@gamil.com',gender:'male'},
// {name:'lalit',email:'first@gamil.com',gender:'male'},
// {name:'lalit',email:'first@gamil.com',gender:'male'},
// {name:'lalit',email:'first@gamil.com',gender:'male'},
// ])

//let data = await Users.findOne({});

//find one fetch the first record

try{
 let data = await Users.findAll(creteria);
 return data ;
} 
catch(err){
    return err;
}
// find all fetch the all record  
}
var deluser = async (req,res)=>{
  
    return data = await Users.destroy({
               where :{
                      id:11
                  }
                 })
}

var updateuser = async (req,res)=>{
    return data = await Users.update({name:'lalit',email:'final@gmail.com'},{
             where :{
                 id:15
             }
}   )}
module.exports={

    adduser,crudOperation,deluser,updateuser
}