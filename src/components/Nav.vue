<template>
    <nav class="col-sm-4 col-lg-2 moradoOscuro">
        <div class="mt-2 ml-3">
            <Logo/> 
        </div>
        <div class="mt-5  ml-5 text-white">
            <h5 class="textoGrande">Categorías</h5>
            <ul class="mt-3">
                <li ><a href="/category" class="text-white textoMedio">Ver todas</a></li>
                <li class="textoMedio" ><a href="/category/create" class="text-white textoMedio">Crear</a></li>
            </ul>
            <h5 class="mt-4 textoGrande" @click="cerrarSesion()">Cerrar sesión</h5>
        </div>
    </nav>
</template>

<script>
import Logo from "@/components/Logo";
export default {
    name:"Nav",
    components:{
        Logo,
    },
    methods:{
        cerrarSesion(){
            
            localStorage.setItem("token", "");

            this.$swal({
                title: 'Sesión cerrada',
                icon: 'success',
                confirmButtonText: 'OK',
                timer: 20000
            });

            this.$router.push('/');
        }
    }

}
</script>

<style>

</style>