const mysql = require ('mysql')
const connection = mysql.createConnection({
    host:'bjtuc0nkttom2clvwxqt-mysql.services.clever-cloud.com',
    user:'usbdwuhbxcy3cjxt',
    password:'EvhPH1RIMjnxdiG0S8vP',
    database:'bjtuc0nkttom2clvwxqt'
})

connection.connect((err)=>{
    if (err) throw err
    console.log('Conexion establecida exitosamente!')
})

//AGREGAR INFORMACION A LAS TABLAS DE LA BASE DE DATOS+++++
const insertar = "INSERT INTO alumno VALUES ('2','Karen','015487360')"
connection.query(insertar,(err, rows)=>{
    if(err) throw err
    console.log('Los datos insertados con exito')
})

//CONSULTAR LA BASE DE DATOS POR TABLAS Y MOSTRAR LA INFO
connection.query('Select * from alumno', (err, rows)=>{
    if(err) throw err
    console.log('Los datos solicitados son:')
    console.log(rows)
})

connection.end()