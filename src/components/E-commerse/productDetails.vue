
<template>
<div class="body">
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
              <a class="nav-link" href="#">Products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6 offset-md-3 mb-5">
        <div class="card">
          <img :src="product.image" class="card-img-top img-fluid product-image" alt="Product Image" />
          <div class="card-body">
            <h1 class="card-title">{{ product.name }}</h1>
            <p class="card-text">{{ product.description }}</p>
            <p class="card-text text-muted">{{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      product: {}
    };
  },
  created() {
    // Fetch product details based on the id prop
    const productId = this.id;
    // Assuming you have access to the same product list or an API
    const products = [
      { id: 1, name: 'Groundnut Pack 1', description: 'Description for pack 1', price: '$10', image: 'https://www.genebanks.org/wp-content/uploads/2016/12/groundnut-collection.jpg' },
        { id: 2, name: 'Groundnut Pack 2', description: 'Description for pack 2', price: '$15', image: 'https://www.nairaland.com/attachments/6889761_groundnuts_jpeg8e27d3127c540c26e0180cfe54b9df40' },
        { id: 3, name: 'Groundnut Pack 3', description: 'Description for pack 3', price: '$20', image: 'https://i0.wp.com/afrovitalityeats.com/wp-content/uploads/2017/11/groundnut-sweet-gift.jpg?ssl=1' },
        { id: 4, name: 'Groundnut Pack 1', description: 'Description for pack 1', price: '$10', image: 'https://www.genebanks.org/wp-content/uploads/2016/12/groundnut-collection.jpg' },
        { id: 5, name: 'Groundnut Pack 2', description: 'Description for pack 2', price: '$15', image: 'https://www.nairaland.com/attachments/6889761_groundnuts_jpeg8e27d3127c540c26e0180cfe54b9df40' },
        { id: 6, name: 'Groundnut Pack 3', description: 'Description for pack 3', price: '$20', image: 'https://i0.wp.com/afrovitalityeats.com/wp-content/uploads/2017/11/groundnut-sweet-gift.jpg?ssl=1' },
        { id: 7, name: 'Groundnut Pack 1', description: 'Description for pack 1', price: '$10', image: 'https://www.genebanks.org/wp-content/uploads/2016/12/groundnut-collection.jpg' },
        { id: 8, name: 'Groundnut Pack 2', description: 'Description for pack 2', price: '$15', image: 'https://www.nairaland.com/attachments/6889761_groundnuts_jpeg8e27d3127c540c26e0180cfe54b9df40' },
        { id: 9, name: 'Groundnut Pack 3', description: 'Description for pack 3', price: '$20', image: 'https://i0.wp.com/afrovitalityeats.com/wp-content/uploads/2017/11/groundnut-sweet-gift.jpg?ssl=1' }
    ];
    this.product = products.find(p => p.id === parseInt(productId));
  }
};
</script>

<style scoped>
.body {
  background-color: rgb(227, 222, 221);
}
.product-image {
  height: 270px;
  object-fit: cover;
}
</style>
