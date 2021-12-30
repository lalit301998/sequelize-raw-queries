module.exports=(sequelize,Datatypes)=>{
    const Users = sequelize.define("user",{

        id:{type:Datatypes.INTEGER,primaryKey: true},
        name:
        {type:Datatypes.STRING,
         set(value)
         {
             this.setDataValue('name',value +'singh')
         },
         get(){

            return this.getDataValue('name')+'xyz'
         }   
        
        },
        email:
        {type: Datatypes.STRING,
        allowNull:false, 
        // unique: true,
        // strict: true
        },
        gender:
        {
            type:Datatypes.STRING
        
        }
    },{
        timestamps:false,
        //for changing the table name
        // tableName :'userdata'
        
    });
    return Users;
}