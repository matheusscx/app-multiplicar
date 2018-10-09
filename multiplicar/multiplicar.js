
const fs = require('fs');

let crearTablaPromise = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`la base ${base} no es un numero`);
            return;
        } else if (!Number(limite)) {
            reject(`El limite ${limite} no es un numero`);
            return;
        } else {
            let data = '';
            for (let i = 1; i <= limite; i++) {
                data += `${base} * ${i} = ${base * i}\n`;
            }
            fs.writeFile(`./tablas/tabla-del-${base}.txt`, data, (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(`tabla-del-${base}.txt`);
                }
            });
        }
    });
};


let listarTabla = (base, limite) => {
    let tabla = '';
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`la base ${base} no es un numero`);
            return;
        } else if (!Number(limite)) {
            reject(`El limite ${limite} no es un numero`);
            return;
        } else {
            for (let i = 1; i <= limite; i++) {
                tabla += `${base} * ${i} = ${base * i}\n`;
            }
            resolve(tabla);
        };
    });

};



module.exports = {
    crearTablaPromise,
    listarTabla
};








