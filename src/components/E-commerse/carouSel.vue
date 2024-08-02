<script setup>
import emblaCarouselVue from 'embla-carousel-vue';
import Autoplay from 'embla-carousel-autoplay';
import 'bootstrap/dist/css/bootstrap.min.css';

const [emblaRef] = emblaCarouselVue({ loop: false }, [Autoplay()]);


window.onload = function() {
    animateSequence();
    animateRandom();
};

function animateSequence() {
    var a = document.getElementsByClassName('sequence');
    for (var i = 0; i < a.length; i++) {
        var $this = a[i];
        var letter = $this.innerHTML;
        letter = letter.trim();
        var str = '';
        var delay = 100;
        for (l = 0; l < letter.length; l++) {
            if (letter[l] != ' ') {
                str += '<span style="animation-delay:' + delay + 'ms; -moz-animation-delay:' + delay + 'ms; -webkit-animation-delay:' + delay + 'ms; ">' + letter[l] + '</span>';
                delay += 150;
            } else
                str += letter[l];
        }
        $this.innerHTML = str;
    }
}

function animateRandom() {
    var a = document.getElementsByClassName('random');
    for (var i = 0; i < a.length; i++) {
        var $this = a[i];
        var letter = $this.innerHTML;
        letter = letter.trim();
        var delay = 70;
        var delayArray = new Array;
        var randLetter = new Array;
        for (j = 0; j < letter.length; j++) {
            while (1) {
                var random = getRandomInt(0, (letter.length - 1));
                if (delayArray.indexOf(random) == -1)
                    break;
            }
            delayArray[j] = random;
        }
        for (l = 0; l < delayArray.length; l++) {
            var str = '';
            var index = delayArray[l];
            if (letter[index] != ' ') {
                str = '<span style="animation-delay:' + delay + 'ms; -moz-animation-delay:' + delay + 'ms; -webkit-animation-delay:' + delay + 'ms; ">' + letter[index] + '</span>';
                randLetter[index] = str;
            } else
                randLetter[index] = letter[index];
            delay += 80;
        }
        randLetter = randLetter.join("");
        $this.innerHTML = randLetter;
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
</script>

<template>
  <div class="embla" ref="emblaRef">
    <div class="embla__container d-flex">
      <div class="embla__slide flex-shrink-0 w-100">
        <img src="https://i0.wp.com/afrovitalityeats.com/wp-content/uploads/2017/11/groundnut-sweet-gift.jpg?ssl=1" alt="">
      </div>
      <div class="embla__slide flex-shrink-0 w-100">
        <img src="https://www.nairaland.com/attachments/6889761_groundnuts_jpeg8e27d3127c540c26e0180cfe54b9df40" alt="">
      </div>
      <div class="embla__slide flex-shrink-0 w-100">
        <img src="https://www.genebanks.org/wp-content/uploads/2016/12/groundnut-collection.jpg" alt="">
      </div>
    </div>
  </div>

  <h1 class="cssanimation fadeIn"> Example </h1> 
 <h1 class="cssanimation leFadeIn sequence"> Example </h1>
   <h1 class="cssanimation leFadeIn random"> Example </h1>
   <!-- <h1 class="cssanimation fadeIn infinite"> Example </h1>  -->
   <div>
  <h1 class="cssanimation effect3d sequence">cssanimation</h1>
  <!--<h1 class="cssanimation effect3d random">cssanimation</h1>
  please uncomment if you want to see random version-->
</div>
<div>
  <h1 class="cssanimation leMagnify sequence">cssanimation</h1>
  <!--<h1 class="cssanimation leMagnify random">cssanimation</h1>
  please uncomment if you want to see random version-->
</div>


</template>

<style scoped>


body {
    overflow: hidden;
    font-family: 'Ubuntu', sans-serif;
}

div {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}

h1 {
    font-size: 4.3em;
    letter-spacing: -4px;
    font-weight: 700;
    color: #7e2ea0;
    text-align: center;
}

.cssanimation, .cssanimation span {
    animation-duration: 1s;
    animation-fill-mode: both;
}

.cssanimation span { display: inline-block }

.leMagnify span { animation-name: leMagnify }
@keyframes leMagnify {
    50% {
        transform: scale(1.8);
        letter-spacing: 26px
    }
}
.embla {
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
}

.embla__container {
  display: flex;
}

.embla__slide {
    height: 200px;
    widows: 100%;
  position: relative;
  flex: 0 0 100%;
  padding: 10px;
  box-sizing: border-box;
}
</style>
