<template>
  <div class="body">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-secondary shadow-sm">
      <div class="container-fluid">
        <a class="navbar-brand fs-3 fw-3" href="#">Groundnut Shop</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="/commerse">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="scrollToTop" href="#">Products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Carousel -->
    <div id="carouselExampleSlidesOnly" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="3000">
          <img src="https://t4.ftcdn.net/jpg/07/05/63/29/360_F_705632904_z30L0nXh6lOvQMsHTSdiAjYK4ZtLWbjr.jpg" class="carousel-image" alt="First slide">
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <img src="https://cdn.pixabay.com/photo/2017/03/21/19/18/peanuts-2163043_1280.jpg" class="carousel-image" alt="Second slide">
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <img src="https://cdn.pixabay.com/photo/2024/03/23/13/48/ai-generated-8651430_1280.jpg" class="carousel-image" alt="Third slide">
        </div>
      </div>
    </div>

     <!-- Products -->
    <div class="container mt-2">
      <h2 class="text-center">Our Products</h2>
      <div class="row">
        <div class="col-md-4 mb-5" v-for="product in products" :key="product.id">
          <div class="card mb-4 shadow-sm product-card">
            <img :src="product.image" class="card-img-top product-image" alt="Product Image">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">{{ product.description }}</p>
              <div class="d-flex justify-content-between align-items-center mt-auto">
                <span class="text-muted">{{ product.price }}</span>
                <router-link :to="{ name: 'ProductDetails', params: { id: product.id } }" class="btn btn-sm btn-outline-secondary">View Details</router-link>
                <button @click="addToCart(product)" class="btn btn-sm btn-outline-secondary">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-light text-center text-lg-start mt-auto py-3">
      <div class="container">
        <p>&copy; 2024 Groundnut Shop. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'GroundnutShop',
  data() {
    return {
      products: [
        { id: 1, name: 'Groundnut Pack 1', description: 'Description for pack 1', price: '$10', image: 'https://www.genebanks.org/wp-content/uploads/2016/12/groundnut-collection.jpg' },
        { id: 2, name: 'Groundnut Pack 2', description: 'Description for pack 2', price: '$15', image: 'https://www.nairaland.com/attachments/6889761_groundnuts_jpeg8e27d3127c540c26e0180cfe54b9df40' },
        { id: 3, name: 'Groundnut Pack 3', description: 'Description for pack 3', price: '$20', image: 'https://i0.wp.com/afrovitalityeats.com/wp-content/uploads/2017/11/groundnut-sweet-gift.jpg?ssl=1' },
        { id: 4, name: 'Groundnut Pack 1', description: 'Description for pack 1', price: '$10', image: 'https://www.genebanks.org/wp-content/uploads/2016/12/groundnut-collection.jpg' },
        { id: 5, name: 'Groundnut Pack 2', description: 'Description for pack 2', price: '$15', image: 'https://www.nairaland.com/attachments/6889761_groundnuts_jpeg8e27d3127c540c26e0180cfe54b9df40' },
        { id: 6, name: 'Groundnut Pack 3', description: 'Description for pack 3', price: '$20', image: 'https://i0.wp.com/afrovitalityeats.com/wp-content/uploads/2017/11/groundnut-sweet-gift.jpg?ssl=1' },
        { id: 7, name: 'Groundnut Pack 1', description: 'Description for pack 1', price: '$10', image: 'https://www.genebanks.org/wp-content/uploads/2016/12/groundnut-collection.jpg' },
        { id: 8, name: 'Groundnut Pack 2', description: 'Description for pack 2', price: '$15', image: 'https://www.nairaland.com/attachments/6889761_groundnuts_jpeg8e27d3127c540c26e0180cfe54b9df40' },
        { id: 9, name: 'Groundnut Pack 3', description: 'Description for pack 3', price: '$20', image: 'https://i0.wp.com/afrovitalityeats.com/wp-content/uploads/2017/11/groundnut-sweet-gift.jpg?ssl=1' }
      ]
    };
  },
  methods: {
    addToCart(product) {
      alert(`Added ${product.name} to cart.`);
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
  }
}
};
</script>

<style scoped>
.body {
  background-color: rgb(227, 222, 221);
}

.navbar-brand {
  font-weight: bold;
  font-size: 1.5rem;
}

.nav-link {
  font-size: 1.1rem;
}

.carousel-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

h2 {
  margin-bottom: 30px;
}

.product-card {
  height: 100%;
}

.product-image {
  height: 200px;
  object-fit: cover;
}

.card {
  transition: transform 0.2s;
}

.card:hover {
  transform: scale(1.05);
}

footer {
  background-color: #f8f9fa;
  padding: 20px 0;
}

footer p {
  margin: 0;
}
</style>
