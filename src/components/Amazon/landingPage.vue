<template>
  <div>
    <!-- Top Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-custom fixed-top">
      <a class="navbar-brand" href="#">
        <img class="amazon-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1IRNXk04_6QwSy9uFhAAG6RzqXqNnzyQf0g&s" width="100" height="30" alt="Amazon">
      </a>
      <div class="navbar-nav">
        <a class="nav-item nav-link" href="#">Deliver to <span class="font-weight-bold">Nigeria</span></a>
      </div>
      <div class="navbar-nav mx-auto">
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search Amazon" aria-label="Search">
          <button class="btn btn-warning my-2 my-sm-0" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </form>
      </div>
      <div class="navbar-nav">
        <a class="nav-item nav-link" href="#"><img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" width="20" height="15" alt="US Flag"> EN</a>
        <a class="nav-item nav-link" href="#">Hello, sign in <span class="font-weight-bold">Account & Lists</span></a>
        <a class="nav-item nav-link" href="#">Returns <span class="font-weight-bold">& Orders</span></a>
        <a class="nav-item nav-link" href="#">
          <i class="fas fa-shopping-cart"></i> Cart
        </a>
      </div>
    </nav>
    
    <!-- Secondary Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" style="top: 56px;">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="toggleSidebar">All</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Today's Deals</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Customer Service</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Registry</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Gift Cards</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Sell</a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Side Navigation Bar -->
    <div id="sidebar" :class="{ open: isSidebarOpen }">
      <button type="button" class="close" aria-label="Close" @click="toggleSidebar">
        <span aria-hidden="true">&times;</span>
      </button>
      <div class="sidebar-heading bg-light">Digital content & devices</div>
      <div class="list-group list-group-flush">
        <a href="#" class="list-group-item list-group-item-action bg-light">Amazon music</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Kindle E-readers & Books</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Amazon Appstore</a>
        <hr class="bg-light">
        <h5 class="text-bold text-dark bg-light">Shop by Department</h5>
        <a href="#" class="list-group-item list-group-item-action bg-light">Eletronics</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Computers</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Smart Home</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Arts & Crafts</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">See all</a>
        <hr class="bg-light">
        <h5 class="text-bold text-dark bg-light">Programs and Features</h5>
        <a href="#" class="list-group-item list-group-item-action bg-light">Gifts Cards</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Shop By intrest</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Amazon Live</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">International Shopping</a>
        <hr class="bg-light">
        <h5 class="text-bold text-dark bg-light">Helps and Settings</h5>
        <a href="#" class="list-group-item list-group-item-action bg-light">Your Account</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">English</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">United States</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Costomer Service</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">SignIn</a>
      </div>
    </div>

    
    
    <!-- Page Content -->
    <div id="page-content-wrapper">
      <div class="container-fluid">
        <!-- Carousel -->
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src="https://via.placeholder.com/800x400?text=First+Slide" alt="First slide">
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="https://via.placeholder.com/800x400?text=Second+Slide" alt="Second slide">
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="https://via.placeholder.com/800x400?text=Third+Slide" alt="Third slide">
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isSidebarOpen: false
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    }
  }
};
</script>

<style scoped>

.navbar-custom {
  background-color: #0c0c0c;
}
.navbar-custom .navbar-brand,
.navbar-custom .navbar-nav .nav-link {
  color: #ffffff;
}
.navbar-custom .nav-item:hover .nav-link {
  color: #ddd;
}
.navbar-custom .navbar-collapse {
  justify-content: flex-end;
}
#sidebar {
    background-color: #F8F9FA;
  width: 250px;
  height: 100vh;
  position: fixed;
  top: 112px; /* Adjusted to match the height of both navbars */
  left: -250px; /* Initially hidden */
  overflow-y: auto;
  transition: left 0.3s ease; /* Animation for sliding */
  z-index: 1000; /* Ensure sidebar is on top */
}
#sidebar.open {
  left: 0; /* Show sidebar when open */
}
#page-content-wrapper {
  margin-left: 0; /* No margin to keep content in place */
  width: 100%;
  padding-top: 16px; /* Additional padding for content */
}
.close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
}
</style>
