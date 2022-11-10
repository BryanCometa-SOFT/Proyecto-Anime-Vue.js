<template>
    <div class="row tamanoPage">
        
        <div class="col-12 col-lg-6 degradadoMovil">
            <div class="mt-2 ml-3 d-none d-lg-block">
                <Logo/> 
            </div>

            <div class="mt-3 ml-4">
                <a @click="$router.back()"><img src="../assets/retroceder.png" class="iconRetroceder"></a>
            </div>

            <div class="d-flex align-items-center flex-column">
                <img src="../assets/cabezas1.png" alt="Cabezas Anime" class="imgCabezas">
                <img src="../assets/textJapones2.png" alt="Texto Japones" class="mt-3">
                <h5 class="textoMedio text-white mt-3">¡Hola, te extrañamos!</h5>
            </div>

            <form class="d-flex align-items-center flex-column" @submit.prevent="submit">
                <div class="form-group">
                    <label class="text-white textoPequeno">Email</label>
                    <input type="email" class="form-control inputPersonalizado" name="email" id="email" v-model="data.email" >
                </div>

                <div class="form-group">
                    <label class="text-white textoPequeno">Contraseña</label>
                    <div class="input-group mb-3 tamanoGrisInput">
                        <input :type="inputTipo" min="3" class="form-control colorGrisInput h-100 borderInput" aria-label="Recipient's username" aria-describedby="button-addon2"  name="password" id="password" v-model="data.password">
                        <button class="btn colorGrisInput borderButton" @click="tipoInput()" type="button" id="button-addon2"><img src="../assets/verContrasena.png" class="iconPassword"></button>
                    </div>
                    <div class="d-flex justify-content-end mt-n2">
                        <a href=""><p class="textoPequeno moradoClaroText">¿Olvido la contraseña?</p></a>
                    </div>
                </div>

                <div class="d-flex justify-content-center mt-n2">
                    <ButtonRosa texto="Acceder" class="mt-2" @click="iniciarSesion()" />
                </div>
            </form>

            <div class="d-flex justify-content-center mt-5">
                <div class="">
                    <div class="d-flex w-100 justify-content-center" style="width: 343px;">
                        <hr class="lineaHr">
                        <p class="textoMedio text-white d-block d-lg-none">Logueate con RRSS</p>
                         <p class="textoMedio text-white d-none d-lg-block">Logueate también con</p>
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

            <div class="d-flex justify-content-center mt-5">
                <h5 class="textoMedio text-white">Quieres registrarte? <a class="moradoMedioText" @click="$router.push('register')">Registrate</a> </h5>
            </div>
        </div>

        <div class="col-6 moradoOscuro d-none d-lg-block">
            <div class="d-flex align-items-center flex-column justify-content-center ">
                <Carousel/> 
            </div>
            
        </div>
    </div>
 
</template>

<script>
import Logo from "@/components/Logo";
import Carousel from "@/components/Carousel";
import RedesSociales from "@/components/RedesSociales";
import ButtonRosa from "@/components/ButtonRosa";
import sha256 from 'js-sha256';
import { mapActions } from "vuex";

export default {
    name: 'InicioSesion',
    data() {
        return {
            inputTipo:"password",
            public_key : "VBNfgfTYrt5666FGHFG6FGH65GHFGHF656g",
            private_key :"DGDFGDbnbnTRTEfg67hgyTYRTY56gfhdR6",
            header : { 'Accept' : "application/json" },
            data: {
                email:"",
                password:"",
                apiKey: "VBNfgfTYrt5666FGHFG6FGH65GHFGHF656g",
                utcTimeStamp: "",
                signature: ""
            },
        }
    },
    components: {
        Logo,
        Carousel,
        RedesSociales,
        ButtonRosa
    },
    methods: {
        tipoInput(){
            if(this.inputTipo === "password"){
                this.inputTipo = "text";
            }else{
                this.inputTipo = "password";
            }
        },
        //Devuelve el utcTimeStamp desde el servidor 
        timezone(){
            var time = new  Promise((resolve, reject) => {
                this.axios.get('timezone','',this.header)
                .then((resp)=>{
                    resolve(resp.data);
                }).catch((error)=>{
                    reject(console.log(error));
                });
            });
            return time;
        },
        //login
        async iniciarSesion(){
            if(this.data.email.length <= 0  || this.data.password.length  <= 0  ){
                this.$swal({
                    title: 'Advertencia',
                    text: 'Apreciado usuario todos los campos son obligatorios',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    timer: 20000
                });
                return;
            }
           
            var time = await this.timezone();
           
            var signature= this.private_key + "," + this.public_key + "," + time;
            
            var cifrarSignature = sha256(signature);

            this.data.utcTimeStamp=time;
            
            this.data.signature=cifrarSignature;

            await this.axios.post('v1/login',this.data,this.header)
            .then((resp)=>{
                console.log(resp);
                localStorage.setItem("token", resp.data.token);
                this.$swal({
                    title: 'Sesión iniciada',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    timer: 20000
                });
                this.$router.push('home');
            }).catch((error)=>{
                this.$swal({
                    title: 'Error',
                    text: 'Las credenciales son incorrectas',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    timer: 20000
                });
            })            
        },
    },
}
</script>

<style>
    .iconRetroceder{
        height: 28px;
        width: 28px;
    }

    .imgCabezas{
        height: 136px;
        width: 277px;
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
</style>