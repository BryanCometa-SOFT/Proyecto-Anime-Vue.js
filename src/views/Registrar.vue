<template>
    <div class="row ">
        <div class="col-12 col-lg-6 degradadoMovil">
            <div class="mt-2 ml-3 d-none d-lg-block">
                <Logo/> 
            </div>

            <div class="mt-3 ml-4">
                <a><img src="../assets/retroceder.png" class="iconRetroceder"></a>
            </div>

            <div class="d-flex justify-content-center">
                <div class="">
                    <img src="../assets/cabeza2.png" alt="Cabezas Anime" class="imgCabeza2">
                </div>
                <div class="d-flex align-items-center flex-column justify-content-end">
                    <img src="../assets/textJapones1.png" alt="Cabezas Anime" >
                    <p class="text-white">Bienvenidos(a)!</p>
                </div>
            </div>

            <div class="d-flex justify-content-center mt-4 mb-2">
                <p class="text-white mr-2">Tipo de persona</p>
                <div class="form-check text-white mr-2">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked @click="cambioTipoPersona('Juridica')">
                    <label class="form-check-label" for="flexRadioDefault1">Natural</label>
                </div>
                <div class="form-check text-white ml-2">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" @click="cambioTipoPersona('Natural')">  
                    <label class="form-check-label" for="flexRadioDefault2">Juridica</label>
                </div>
            </div>

            <FormNatural v-if="tipoPersona ==='Natural'"/>

            <FormJuridica v-if="tipoPersona ==='Juridica'"/>

            <div class="d-flex justify-content-center mt-5">
                <div class="">
                    <div class="d-flex w-100 justify-content-center" style="width: 343px;">
                        <hr class="lineaHr">
                        <p class="textoMedio text-white ">Regístrate también con</p>
                        <hr class="lineaHr">
                    </div>
                </div>
            </div>


            <div class="d-flex justify-content-center mt-2">
                <div class="d-block d-sm-none  w-75">
                    <RedesSociales/>
                </div>

                <div class="d-none d-sm-block d-md-none  w-50">
                    <RedesSociales/>
                </div>

                <div class="d-none d-md-block w-25">
                    <RedesSociales/>
                </div>
            </div>

            <div class="d-flex justify-content-center mt-5  mb-5">
                <h5 class="textoMedio text-white">Quieres registrarte? <span class="moradoMedioText" @click="$router.push('/')">Acceder</span> </h5>
            </div>
        </div>

        <div class="col-6 moradoOscuro  d-none d-lg-block">
            <div class="d-flex align-items-center flex-column justify-content-center">
                <Carousel/> 
            </div>
        </div>
    </div>

  
</template>
<script>
import Logo from "@/components/Logo";
import Carousel from "@/components/Carousel";
import RedesSociales from "@/components/RedesSociales";
import FormNatural from "@/components/FormularioRegistrar/FormNatural";
import FormJuridica from "@/components/FormularioRegistrar/FormJuridica";

export default {
    name:"Registrar",
    data() {
        return {
            tipoPersona:"Natural"
        }
    },
    components:{
        Logo,
        Carousel,
        RedesSociales,
        FormNatural,
        FormJuridica
    },
    methods:{
        cambioTipoPersona(data){
            if (data==="Natural"){
                this.tipoPersona="Juridica";
            }else{
                this.tipoPersona="Natural";
            }
        },       
    }
}
</script>

<style>

    .iconRetroceder{
        height: 28px;
        width: 28px;
    }

    .iconPassword{
        width : 22px;
        height : 15px
    }

    .borderInput{
        border-right: 0px;
        border-top-right-radius:0px;
        border-bottom-right-radius:0px;
    }
    
     .borderButton{
        border-right: 0px;
        border-top-left-radius:0px;
        border-bottom-left-radius:0px;
    }

    .imgCabeza2{
        width: 110px;
        height: 149px;
    }

</style>