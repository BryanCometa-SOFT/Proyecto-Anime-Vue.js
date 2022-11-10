<template>
   <div class="row tamanoPage">
        <Nav/>
        <div class="col-sm-8 col-lg-10 negro">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <p class="mt-5 text-white tituloGigante">Hola, <b>Pedro Perez</b></p>

                        <h5 class="mt-5 textoGrande text-white">Seleccione una opción:</h5>

                        <ButtonRosa texto="Ver todas las categorías" class="mt-4" @click="$router.push('/category')"/>
                        <ButtonRosa texto="Crear categorías" class="mt-4" @click="$router.push('/category/create')"/> 
                        <ButtonRosa texto="Cerrar sesión" class="mt-4" @click="cerrarSesion()"/>

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
import sha256 from 'js-sha256';

export default {
    name:"Home",
    data() {
        return {
            public_key : "VBNfgfTYrt5666FGHFG6FGH65GHFGHF656g",
            private_key :"DGDFGDbnbnTRTEfg67hgyTYRTY56gfhdR6",
            header : { 
                'Accept' : "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
            data: {
                apiKey: "VBNfgfTYrt5666FGHFG6FGH65GHFGHF656g",
                utcTimeStamp: "",
                signature: ""
            },
        }
    },
    components:{
        Logo,
        ButtonRosa,
        Nav
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
        async datosUsuario(){
            var time = await this.timezone();
           
            var signature= this.private_key + "," + this.public_key + "," + time;
            
            var cifrarSignature = sha256(signature);

            this.data.utcTimeStamp=time;
            
            this.data.signature=cifrarSignature;
            
            console.log(this.header);

            await this.axios.post('v1/me',this.data,this.header)
            .then((resp)=>{
                console.log(resp);
            
                this.$router.push('home');
            }).catch((error)=>{
                console.log(error);
            })            
        }
    },
    created() {
        this.datosUsuario();
    },
}
</script>

<style>
   
</style>