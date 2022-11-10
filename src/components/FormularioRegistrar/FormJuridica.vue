<template>
    <div >
        <div class="d-flex align-items-center flex-column">
            <div class="form-group">
                <label class="text-white textoPequeno">Razón social</label>
                <input type="text" class="form-control inputPersonalizado" required v-model="data.razon_social">
            </div>

            <div class="form-group">
                <label class="text-white textoPequeno">NIT</label>
                <input type="text" class="form-control inputPersonalizado" required v-model="data.NIT">
            </div>

            <div class="form-group">
                <label class="text-white textoPequeno">Teléfono</label>
                <input type="text" class="form-control inputPersonalizado" required v-model="data.telephone">
            </div>


            <div class="form-group">
                <label class="text-white textoPequeno">Email</label>
                <input type="email" class="form-control inputPersonalizado" required v-model="data.email">
            </div>

            <div class="form-group">
                <label class="text-white textoPequeno">Contraseña</label>
                <div class="input-group  tamanoGrisInput">
                    <input :type="inputTipo" class="form-control colorGrisInput h-100 borderInput" placeholder="" aria-label="Recipient's username" aria-describedby="button-addon2" required v-model="data.password">
                    <button class="btn colorGrisInput borderButton" @click="tipoInput()" type="button" id="button-addon2"><img src="@/assets/verContrasena.png" class="iconPassword" ></button>
                </div>
            </div>

            <div class="form-group">
                <label class="text-white textoPequeno">Confirmar Contraseña</label>
                <div class="input-group mb-3 tamanoGrisInput">
                    <input :type="inputTipo2" class="form-control colorGrisInput h-100 borderInput" placeholder="" aria-label="Recipient's username" aria-describedby="button-addon2" required v-model="data.password_confirmation">
                    <button class="btn colorGrisInput borderButton" @click="tipoInput2()" type="button" id="button-addon2"><img src="@/assets/verContrasena.png" class="iconPassword"></button>
                </div>
            </div>

            <div class="d-flex justify-content-center mt-n2" >
                <ButtonRosa texto="Registrar" class="mt-2"  @click="registrarUsuario()"/>
            </div>

    
        </div>
    </div>
</template>

<script>
import ButtonRosa from "@/components/ButtonRosa";
import sha256 from 'js-sha256';

export default {
    name:"FormJuridica",
     data() {
        return {
            inputTipo:"password",
            inputTipo2:"password",
            public_key : "VBNfgfTYrt5666FGHFG6FGH65GHFGHF656g",
            private_key :"DGDFGDbnbnTRTEfg67hgyTYRTY56gfhdR6",
            header : { 'Accept' : "application/json" },
            data: {
                telephone : "",
                NIT : "",
                razon_social : "",
                type_user_id : 1, 
                verify_tc : "1",
                password : "",
                password_confirmation : "",
                email : "",
                apiKey: "VBNfgfTYrt5666FGHFG6FGH65GHFGHF656g",
                utcTimeStamp: "",
                signature: ""
            }
        }
    },

    components:{
        ButtonRosa
    },

    methods:{
        tipoInput(){
            if(this.inputTipo === "password"){
                this.inputTipo = "text";
            }else{
                this.inputTipo = "password";
            }
        },
        tipoInput2(){
            if(this.inputTipo2 === "password"){
                this.inputTipo2 = "text";
            }else{
                this.inputTipo2 = "password";
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
        //Guarda el usuario tipo Juridico
        async registrarUsuario(){
            if(this.data.telephone.length <= 0  || this.data.NIT.length  <= 0 || this.data.razon_social.length  <= 0 || this.data.password.length  <= 0 || this.data.password_confirmation.length  <= 0 || this.data.email.length  <= 0 ){
                this.$swal({
                    title: 'Advertencia',
                    text: 'Apreciado usuario todos los campos son obligatorios',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    timer: 20000
                });
                return;
            }

             if(this.data.password != this.data.password_confirmation ){
                this.$swal({
                    title: 'Advertencia',
                    text: 'Apreciado usuario las contraseñas son diferentes',
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

            await this.axios.post('v1/register',this.data,this.header)
            .then((resp)=>{
                localStorage.setItem("token", resp.data.token);
                this.$swal({
                    title: 'Usuario registrado',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    timer: 20000
                });
                this.$router.push('home');
            }).catch((error)=>{
                this.$swal({
                    title: 'Error',
                    text: 'Hubo un problema al momento de registrar el usuario',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    timer: 20000
                });
            })            
        }
    }
}
</script>

<style>

</style>