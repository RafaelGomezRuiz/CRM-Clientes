<script setup>
import axios from '../api/api';
import {onMounted, reactive} from 'vue';
import Heading from '../components/UI/Heading.vue';
import RouterLink from '../components/UI/RouterLink.vue';
import { useRoute, useRouter } from 'vue-router';
import ClienteService from '../services/ClienteService'; 
import {FormKit} from '@formkit/vue';

// const ruta = useRoute();
const route = useRoute();
const router = useRouter();

const {id} = route.params;

const formData= reactive({
    nombre:'',
    apellido:'',
    email:'',
    telefono:'',
    empresa:'',
    puesto:'',
})

onMounted(()=>{
    ClienteService.obtenerCliente(id)
    .then(({data}) => {
        Object.assign(formData, data)
    })
    .catch((error)=> console.log(error))
})

defineProps({
    titulo:{
        type:String
    }
})

const handleSubmit = (data) =>{
    ClienteService.actualizarCliente(id, data);
    router.push({name:"listado-clientes"})
}
</script>

<template>
    <div>
        <div class="flex justify-end">
            <RouterLink to="listado-clientes">
                Listado de clientes
            </RouterLink>
        </div>
        <Heading>{{titulo}}</Heading>
        <div class="mx-auto mt-10 bg-white shadow">
            <div class="mx-auto md:w-2/3 py-20 px-6">
    
                <FormKit 
                    type="form"
                    submit-label="Agregar Cliente"
                    incomplete-message="No se pudo enviar, revisa los mensajes"
                    @submit="handleSubmit"
                    :value=formData
                    >
                    <!-- :value="preData" -->
                    <FormKit 
                        type="text"
                        label="Nombre"
                        name="nombre"
                        placeholder="Nombre del cliente"
                        :validation-messages="{ required: 'El nombre del cliente es obligatorio' }"
                        validation="required"
                        prefix-icon="add"  
                        v-model="formData.nombre" 
                        />
                        <!-- validation-visibility="blur" -->
                        <!-- help="Coloca el Nombre del cliente que deseas registrar" -->
                    <FormKit 
                        type="text"
                        label="Apellido"
                        name="apellido"
                        placeholder="Apellido del cliente"
                        :validation-messages="{ required: 'El Apellido del cliente es obligatorio' }"
                        validation="required"
                        prefix-icon="add"   
                        v-model="formData.apellido" 

                        />
                    
                    <FormKit 
                        type="email"
                        label="Email"
                        name="email"
                        placeholder="Email del cliente"
                        :validation-messages="{ required: 'El Email del cliente es obligatorio', email:'Coloca un email válido' }"
                        validation="required|email"
                        prefix-icon="email"   
                        v-model="formData.email" 
                        />
                        <!-- help="Coloca el Apellido del cliente que deseas registrar" -->
                    <FormKit 
                        type="text"
                        label="Teléfono"
                        name="telefono"
                        placeholder="Teléfono xxx-xxx-xxxx"
                        validation="?matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
                        :validation-messages="{ matches: 'Formato no válido' }"
                        v-model="formData.telefono" 
                        />

                    <FormKit 
                        type="text"
                        label="Empresa"
                        name="empresa"
                        placeholder="Empresa del cliente"
                        v-model="formData.empresa" 
                    />
                    <FormKit 
                        type="text"
                        label="Puesto"
                        name="puesto"
                        placeholder="Puesto del cliente" 
                        v-model="formData.puesto" 
                    />
                </FormKit>
            </div>
        </div>
    </div>
</template>

<style>
    .formkit-wrapper{
        max-width: 100%;
    }
</style>