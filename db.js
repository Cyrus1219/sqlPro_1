const mysql = require('mysql2');
 
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'myu',
  database: 'mydb',
  password:'mnbvcxZ1!',
});



function get_people(){
    // console.log(' fetching people from db !');
    // mysql.q
    return new Promise(function(res,rej){
        connection.query(
            `SELECT* FROM test1
            `,
            function(err,rows,fields){
                if(err){
                    rej(err);
                }else{
                    res(rows);
                }
            }
        )
    })
}

function add_people(id,data){

    return new Promise(function(reso,rej){

        connection.query(`INSERT INTO test1 (id,data) VALUES(?,?)`,
        [id,data],
        // to prevent SQL INJECTION THIS FUNCTIONALITY IS AVAILABLE !!
            function(err, res){
                if(err){
                    rej(err)
                }else{
                    reso()
                }
            }
        )
    })
}

exports = module.exports = {
    get_people,
    add_people
}
