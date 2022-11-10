<template>
   <div class="row tamanoPage">
        <Nav/>
        <div class="col-sm-8 col-lg-10 negro">
            <div class="container">
                 <div class="row">
                    <div class="col-12 d-flex justify-content-center justify-content-lg-start">
                        <h5 class="tituloGigante text-white  mt-5">Crear categoría</h5>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <div class="form-group mt-4">
                            <label class="text-white textoPequeno">Nombre de categoría</label>
                            <input type="text" class="form-control inputPersonalizado" >
                        </div>
                        <ButtonRosa texto="Crear" class="mt-5" v-on:click="crearCategoria()"/> 
                    </div>
                </div>
            </div>
     
        </div>
    </div>
</template>

<script>
import Logo from "@/components/Logo";
import Nav from "@/components/Nav";
import ButtonRosa from "@/components/ButtonRosa";

export default {
    name:"CrearCategoria",
    components:{
        Logo,
        Nav,
        ButtonRosa
    },
    methods: {
        crearCategoria(){

        }
    },
}
</script>

<style>

</style>