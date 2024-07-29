<template>
  <div class="scroll-container">
    <img class="scroll-img" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v3._SY608_CB573698005_.jpg" alt="">
    <img class="scroll-img" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v3._SY608_CB573698005_.jpg" alt="">
    <img class="scroll-img" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v3._SY608_CB573698005_.jpg" alt="">
    <img class="scroll-img" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v3._SY608_CB573698005_.jpg" alt="">
    <img class="scroll-img" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v3._SY608_CB573698005_.jpg" alt="">
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  }
}
</script>

<style scoped>
.scroll-container {
  display: flex;
  overflow: hidden;
  white-space: nowrap;
}

.scroll-img {
  width: 100vw; 
  height: auto;
  animation: scroll 20s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

/* Media query for larger screens */
@media (min-width: 768px) {
  .scroll-img {
    width: 50vw; 
  }
}

@media (min-width: 1024px) {
  .scroll-img {
    width: 25vw; 
  }
}
</style>
