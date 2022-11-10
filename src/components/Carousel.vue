<template>
    <div >
        <div id="carouselId" class="carousel slide carouselTamano " data-ride="carousel ">
            <ol class="carousel-indicators">
                <li data-target="#carouselId" data-slide-to="0" class="active"></li>
                <li data-target="#carouselId" data-slide-to="1"></li>
                <li data-target="#carouselId" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                    <div class="d-flex align-items-center flex-column   ">
                        <div class="circuloCarousel">
                            <img src="../assets/personaje1.png" class="ImgYabu mt-5">
                        </div>
                    </div>
                    <div class="margenTitulo">
                       <h2 class="tituloGrande text-center"><span class="text-white mr-n3">anime</span> <span class="moradoMedioText">yabu.</span> </h2>
                        <div class="d-flex justify-content-center">
                            <p class="text-center text-white w-50">Ver anime en línea en HD, subtitulado o doblado, en tu celular o computadora. ¡Animeyabu, tu portal de anime en línea!</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item ">
                    <div class="d-flex align-items-center flex-column  ">
                        <div class="circuloCarousel d-flex justify-content-center">
                            <img src="../assets/personaje2.png" class="imgInosuke mt-5">
                        </div>
                    </div>
 
                    <div class="margenTitulo">
                        <h2 class="tituloGrande text-center"><span class="text-white mr-n3">anime</span> <span class="moradoMedioText">Kyojuro.</span> </h2>
                        <div class="d-flex justify-content-center">
                              <p class="text-center text-white w-50 ">Ver anime en línea en HD, subtitulado o doblado, en tu celular o computadora. ¡Animeyabu, tu portal de anime en línea!</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item ">
                    <div class="d-flex align-items-center flex-column  ">
                        <div class="circuloCarousel d-flex justify-content-center ">
                            <img src="../assets/personaje3.png" class="ImgKyojuro mt-5">
                        </div>
                    </div>

                    <div class="margenTitulo">
                        <h2 class="tituloGrande text-center"><span class="text-white mr-n3">anime</span> <span class="moradoMedioText ">Inosuke.</span> </h2>
                        <div class="d-flex justify-content-center">
                              <p class="text-center text-white w-50">Ver anime en línea en HD, subtitulado o doblado, en tu celular o computadora. ¡Animeyabu, tu portal de anime en línea!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Carousel',
}
</script>

<style>
.circuloCarousel{
    width: 548px;
    height: 548px;
    background-color: #E487FB;
    border-radius: 50%;
}

.imgInosuke{
    width: 401px;
    height: 573px;
}


.imgYabu{
   width: 622px;
   height: 625px;
}

.ImgKyojuro{
    width: 419px;
    height: 598px;
}

.carouselTamano{
    height: 880px !important;
}

.tituloGrande{
    font-size: 80.1282px;
}

.margenTitulo{
    margin-top: 12%;
}





</style>