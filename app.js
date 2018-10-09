const { crearTablaPromise, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config-yars/config-yars').argv;
let comando = argv._[0]

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(tabla => console.log(`La tabla del ${argv.base} es:\n${tabla}`))
            .catch( e => console.log(e));
        break;

    case 'crear':
        crearTablaPromise(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');
        break;
}
