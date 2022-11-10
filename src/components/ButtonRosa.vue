<template>
    <div>
        <button class="btn buttonPersonalizado textoMedio moradoOscuroText"><b>{{texto}}</b> </button>
    </div> 
</template>

<script>
export default {
    name: 'ButtonRosa',
    props:{
        texto:String,
    }
}
</script>
<style>

</style>