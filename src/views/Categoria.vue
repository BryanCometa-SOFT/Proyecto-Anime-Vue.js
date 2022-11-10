<template>
   <div class="row tamanoPage">

        <Nav/>
    
        <div class="col-sm-8 col-lg-10 negro">

            <div class="container">
                <div class="row">
                    <div class="col-12 d-flex justify-content-center justify-content-lg-start">
                        <h5 class="tituloGigante text-white  mt-5">Lista de Categorías</h5>
                    </div>
                </div>
                
                <div class="row ">
                    <div class="col-12 col-lg-4 d-flex justify-content-center justify-content-lg-start">
                        <div class="containerCategoria moradoOscuro d-flex align-items-center flex-column justify-content-center absolute mt-5">
                            <h2 class="textCardCategoria text-white ">ACCIÓN</h2>
                            <p class="text-white relativo " @click="$router.push('/category/edit')">editar</p> 
                        </div>
                    </div>
                    <div class="col-12  col-lg-4 d-flex justify-content-center justify-content-lg-start">
                        <div class="containerCategoria moradoOscuro d-flex align-items-center flex-column justify-content-center absolute mt-5">
                            <h2 class="textCardCategoria text-white ">AVENTURA</h2>
                            <p class="text-white relativo"  @click="$router.push('/category/edit')">editar</p> 
                        </div>
                    </div>
                    <div class="col-12  col-lg-4 d-flex justify-content-center justify-content-lg-start">
                        <div class="containerCategoria moradoOscuro d-flex align-items-center flex-column justify-content-center absolute mt-5">
                            <h2 class="textCardCategoria text-white ">COMEDIA</h2>
                            <p class="text-white relativo"  @click="$router.push('/category/edit')">editar</p> 
                        </div>
                    </div>
                    <div class="col-12  col-lg-4 d-flex justify-content-center justify-content-lg-start">
                        <div class="containerCategoria moradoOscuro d-flex align-items-center flex-column justify-content-center absolute mt-5">
                            <h2 class="textCardCategoria text-white ">TERROR</h2>
                            <p class="text-white relativo"  @click="$router.push('/category/edit')">editar</p> 
                        </div>
                    </div>
                    <div class="col-12  col-lg-4 d-flex justify-content-center justify-content-lg-start">
                        <div class="containerCategoria moradoOscuro d-flex align-items-center flex-column justify-content-center absolute mt-5">
                            <h2 class="textCardCategoria text-white ">ROMANCE</h2>
                            <p class="text-white relativo"  @click="$router.push('/category/edit')">editar</p> 
                        </div>
                    </div>
                    <div class="col-12  col-lg-4 d-flex justify-content-center justify-content-lg-start">
                        <div class="containerCategoria moradoOscuro d-flex align-items-center flex-column justify-content-center absolute mt-5">
                            <h2 class="textCardCategoria text-white ">MISTERIO</h2>
                            <p class="text-white relativo"  @click="$router.push('/category/edit')">editar</p> 
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import Logo from "@/components/Logo";
import Nav from "@/components/Nav";
export default {
    name:"Categoria",
    components:{
        Logo,
        Nav
    }
}
</script>

<style>
    .containerCategoria{
        width :246px;
        height : 124px;
        position: relative;
    }
    .textCardCategoria{
        font-size: 24px;
    }
    .relativo{
        position: absolute;
        right: 5px;
        bottom: 0;
        margin-bottom: 3px;
        text-decoration-line: underline;

    }
    

</style>