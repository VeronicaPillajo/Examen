const fs = require('fs');

let crearArchivo = ( anio) => {

    return new Promise( ( resolve, reject ) =>{
        if( !Number( anio ) ){
            reject( `El año introducido ${ anio } no es un número` )
            return;
        }
        let data = '';

        fs.writeFile(`result/anio-${ anio }.txt`, data, (err) => {
        
            if (err) 
                reject( err )
            else
                resolve( `result-${ base }.txt`.green );

        });
    } )

}