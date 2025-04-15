import api from '../api/api';

export default {
    obtenerClientes (){
        return api.get('/Personas');
    },
    agregarCliente(data){
        return api.post('/Personas', data)
    },
    obtenerCliente(id){
        return api.get('/Personas/'+ id)
    },
    actualizarCliente(id,data){
        console.log("klk con el id", data);
        return api.patch('/Personas/'+ id, data)
    },
    cambiarEstado(id,data){
        console.log(data);
        return api.patch('/Personas/'+ id, {estado:data})
    }
}