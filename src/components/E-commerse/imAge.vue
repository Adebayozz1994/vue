<template>
  <div class="slider">
    <div class="credits">
      <p>Anime.js implementation of the Diagonal Thumbnail Slideshow Animation</p>
      <a href="https://tympanus.net/codrops/2020/09/01/diagonal-thumbnail-slideshow-animation/" target="_blank">Inspired from Codedrops</a>
    </div>
    <div class="nav">
      <div class="next"></div>
      <div class="prev"></div>
      <div class="explore-btn">Explore</div>
    </div>
    <div class="item is-active">
      <div class="content">
        <div class="wrap">Novitates</div>
      </div>
      <div class="imgs">
        <div class="grid">
          <div class="img img-1">
            <img src="https://picsum.photos/seed/a/700/700" />
          </div>
          <div class="img img-2">
            <img src="https://picsum.photos/seed/b/700/700" />
          </div>
          <div class="img img-3">
            <img src="https://picsum.photos/seed/c/700/700" />
          </div>
          <div class="img img-4">
            <img src="https://picsum.photos/seed/d/700/700" />
          </div>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="content">
        <div class="wrap">Si spem</div>
      </div>
      <div class="imgs">
        <div class="grid">
          <div class="img img-1">
            <img src="https://picsum.photos/seed/e/700/700" />
          </div>
          <div class="img img-2">
            <img src="https://picsum.photos/seed/f/700/700" />
          </div>
          <div class="img img-3">
            <img src="https://picsum.photos/seed/g/700/700" />
          </div>
          <div class="img img-4">
            <img src="https://picsum.photos/seed/h/700/700" />
          </div>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="content">
        <div class="wrap">Adferunt</div>
      </div>
      <div class="imgs">
        <div class="grid">
          <div class="img img-1">
            <img src="https://picsum.photos/seed/i/700/700" />
          </div>
          <div class="img img-2">
            <img src="https://picsum.photos/seed/j/700/700" />
          </div>
          <div class="img img-3">
            <img src="https://picsum.photos/seed/k/700/700" />
          </div>
          <div class="img img-4">
            <img src="https://picsum.photos/seed/l/700/700" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';

export default {
  name: 'imAge',
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const slider = document.querySelector(".slider");
      const nextBtn = slider.querySelector(".slider .nav .next");
      const prevBtn = slider.querySelector(".slider .nav .prev");
      const items = slider.querySelectorAll(".slider .item");

      let current = 0;

      items.forEach((item) => {
        const textWrapper = item.querySelector(".wrap");
        textWrapper.innerHTML = textWrapper.textContent.replace(
          /\S/g,
          "<span class='letter'>$&</span>"
        );
      });

      const anim = (current, next, callback) => {
        const currentImgs = current.querySelectorAll(".img");
        const currentText = current.querySelectorAll(".content .letter");
        const nextImgs = next.querySelectorAll(".img");
        const nextText = next.querySelectorAll(".content .letter");

        const t = 400;
        const offset = "-=" + t * 0.4;
        const imgOffset = t * 0.8;

        const tl = anime.timeline({
          easing: "easeInOutQuint",
          duration: t,
          complete: callback
        });

        // Add children
        tl.add({
          targets: currentText,
          translateY: [0, '-.75em'],
          opacity: [1, 0],
          easing: "easeInQuint",
          duration: t,
          delay: (el, i) => 10 * (i + 1)
        })
          .add({
            targets: currentImgs[0],
            translateY: -600,
            translateZ: 0,
            rotate: [0, '-15deg'],
            opacity: [1, 0],
            easing: "easeInCubic"
          }, offset)
          .add({
            targets: currentImgs[1],
            translateY: -600,
            translateZ: 0,
            rotate: [0, '15deg'],
            opacity: [1, 0],
            easing: "easeInCubic"
          }, "-=" + imgOffset)
          .add({
            targets: currentImgs[2],
            translateY: -600,
            translateZ: 0,
            rotate: [0, '-15deg'],
            opacity: [1, 0],
            easing: "easeInCubic"
          }, "-=" + imgOffset)
          .add({
            targets: currentImgs[3],
            translateY: -600,
            translateZ: 0,
            rotate: [0, '15deg'],
            opacity: [1, 0],
            easing: "easeInCubic"
          }, "-=" + imgOffset)
          .add({
            targets: current,
            opacity: 0,
            visibility: 'hidden',
            duration: 10,
            easing: "easeInCubic"
          })
          .add({
            targets: next,
            opacity: 1,
            visibility: 'visible',
            duration: 10
          }, offset)
          .add({
            targets: nextImgs[0],
            translateY: [600, 0],
            translateZ: 0,
            rotate: ['15deg', 0],
            opacity: [0, 1],
            easing: "easeOutCubic"
          }, offset)
          .add({
            targets: nextImgs[1],
            translateY: [600, 0],
            translateZ: 0,
            rotate: ['-15deg', 0],
            opacity: [0, 1],
            easing: "easeOutCubic"
          }, "-=" + imgOffset)
          .add({
            targets: nextImgs[2],
            translateY: [600, 0],
            translateZ: 0,
            rotate: ['15deg', 0],
            opacity: [0, 1],
            easing: "easeOutCubic"
          }, "-=" + imgOffset)
          .add({
            targets: nextImgs[3],
            translateY: [600, 0],
            translateZ: 0,
            rotate: ['-15deg', 0],
            opacity: [0, 1],
            easing: "easeOutCubic"
          }, "-=" + imgOffset)
          .add({
            targets: nextText,
            translateY: ['.75em', 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutQuint",
            duration: t * 1.5,
            delay: (el, i) => 10 * (i + 1)
          }, offset);
      };

      let isPlaying = false;

      const updateSlider = (newIndex) => {
        const currentItem = items[current];
        const newItem = items[newIndex];

        const callback = () => {
          currentItem.classList.remove("is-active");
          newItem.classList.add("is-active");
          current = newIndex;
          isPlaying = false;
        };

        anim(currentItem, newItem, callback);
      };

      const next = () => {
        if (isPlaying) return;
        isPlaying = true;
        const newIndex = current === items.length - 1 ? 0 : current + 1;
        updateSlider(newIndex);
      };

      const prev = () => {
        if (isPlaying) return;
        isPlaying = true;
        const newIndex = current === 0 ? items.length - 1 : current - 1;
        updateSlider(newIndex);
      };

      nextBtn.onclick = next;
      prevBtn.onclick = prev;
    }
  }
}
</script>

<style scoped>


*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  font-family: "Commissioner", sans-serif;
  line-height: 1.65;
}



@mixin filter {
  position: relative;
  -webkit-filter: contrast(110%) brightness(110%) saturate(130%);
  filter: contrast(110%) brightness(110%) saturate(130%);
  &::before {
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    pointer-events: none;
    mix-blend-mode: screen;
    background: rgba(243, 106, 188, 0.3);
  }
}

a {
  color: khaki;
  text-decoration: none;
}

.slider {
  height: 100vh;
  width: 100vw;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
  overflow: hidden;
  transition: background-color 2s;

}
  .credits {
    position: absolute;
    top: 2rem;
    left: 2rem;
    line-height: 1.65;
    z-index: 10;
    max-width: 320px;
  }

.slider .item .imgs {
  position: relative;
  width: 60%;
  padding-top: 60%;

}
  .grid {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(12, 1fr);
    grid-column-gap: 32px;
    grid-row-gap: 32px;
    transform: rotate(-20deg);
    opacity: 0.65;
  }

.slider .item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

}
  .img {
    width: 100%;
    height: 100%;
    position: relative;
    will-change: transform, opacity;

  }
    img {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      @include filter;
    }

  .img-1 {
    grid-area: 1 / 1 / 7 / 5;
  }
  .img-2 {
    grid-area: 2 / 5 / 7 / 13;
  }
  .img-3 {
    grid-area: 7 / 1 / 12 / 9;
  }
  .img-4 {
    grid-area: 7 / 9 / 13 / 13;
  }

  .content {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1.15;
    font-size: 8rem;
    font-weight: 700;

  }
    .wrap {
      text-align: center;
      text-shadow: 1px 1px 4px rgba(black, 0.2);
      width: 100%;
      max-width: 600px;
      line-height: 1;

    }
      .letter {
        display: inline-block;
      }


.slider .nav {
    }
  .next,.prev {
    height: 2rem;
    width: 2rem;
    position: absolute;
    top: calc(50% - 1rem);
    cursor: pointer;
    z-index: 3;
    transition: transform 0.3s;
  }

  .next {
    right: 2rem;
    background-image: url("data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8'?%3E %3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M 19 8 L 19 11 L 1 11 L 1 13 L 19 13 L 19 16 L 23 12 L 19 8 z' fill='white'/%3E%3C/svg%3E");

  }
    /* :hover {
      transform: translateX(0.5rem);
    } */

  .prev {
    left: 2rem;
    background-image: url("data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8'?%3E %3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M 5 8 L 1 12 L 5 16 L 5 13 L 23 13 L 23 11 L 5 11 L 5 8 z' fill='white'/%3E%3C/svg%3E");

  }
    /* :hover {
      transform: translateX(-0.5rem);
    } */

  .explore-btn {
    z-index: 4;
    position: absolute;
    bottom: 2rem;
    left: calc(50% - 4rem);
    width: 8em;
    text-align: center;
    padding: 1rem 0;
    border: solid 2px white;
    background: transparent;
    color: white;
    transition: background-color 0.3s;
    cursor: pointer;

  }
    /* :hover {
      color: black;
      background: white;
    } */


.slider .item:not(.is-active) {
  opacity: 0;
  pointer-events: none;
}

</style>