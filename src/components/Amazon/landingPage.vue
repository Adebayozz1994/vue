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
        <a href="#" class="list-group-item list-group-item-action bg-light">Electronics</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Computers</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Smart Home</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Arts & Crafts</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">See all</a>
        <hr class="bg-light">
        <h5 class="text-bold text-dark bg-light">Programs and Features</h5>
        <a href="#" class="list-group-item list-group-item-action bg-light">Gift Cards</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Shop By Interest</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Amazon Live</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">International Shopping</a>
        <hr class="bg-light">
        <h5 class="text-bold text-dark bg-light">Help and Settings</h5>
        <a href="#" class="list-group-item list-group-item-action bg-light">Your Account</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">English</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">United States</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Customer Service</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Sign In</a>
      </div>
    </div>

    <!-- Page Content -->
    <div id="page-content-wrapper">
      <div class="container-fluid">
        <!-- Carousel -->
        <div id="carouselExampleSlidesOnly" class="carousel slide carousel-fade" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="3000">
              <img src="https://media.istockphoto.com/id/1383962772/photo/nigerian-food.jpg?s=612x612&w=0&k=20&c=u-_1qwHBoY9Yh3alnsRbix6hxgl3_TXhT9lpEvlhH10=" class="d-block w-100 img-fluid" alt="First slide">
            </div>
            <div class="carousel-item" data-bs-interval="3000">
              <img src="https://mamaputafrikanarestaurant.com/wp-content/uploads/2024/01/Untitled-design-4.png" class="d-block w-100 img-fluid" alt="Second slide">
            </div>
            <div class="carousel-item" data-bs-interval="3000">
              <img src="https://i0.wp.com/ounjealadun.com/wp-content/uploads/2015/05/20170423_164717_wm.jpg?resize=1024%2C972&ssl=1" class="d-block w-100 img-fluid" alt="Third slide">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

<!-- cards -->
 
           <div class="container my-4">
    <div class="row">
      <div class="col-md-3">
        <div class="card">
          <img class="card-img-top" src="https://i0.wp.com/ounjealadun.com/wp-content/uploads/2015/05/20170423_164717_wm.jpg?resize=1024%2C972&ssl=1" alt="Deals in PCs">
          <div class="card-body">
            <h5 class="card-title">Deals in PCs</h5>
            <a href="#" class="btn btn-link">Shop now</a>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Refresh your space</h5>
            <div class="row">
              <div class="col-6">
                <img src="https://i0.wp.com/ounjealadun.com/wp-content/uploads/2015/05/20170423_164717_wm.jpg?resize=1024%2C972&ssl=1" class="img-fluid" alt="Dining">
                <p>Dining</p>
              </div>
              <div class="col-6">
                <img src="https://i0.wp.com/ounjealadun.com/wp-content/uploads/2015/05/20170423_164717_wm.jpg?resize=1024%2C972&ssl=1" class="img-fluid" alt="Home">
                <p>Home</p>
              </div>
              <div class="col-6">
                <img src="https://i0.wp.com/ounjealadun.com/wp-content/uploads/2015/05/20170423_164717_wm.jpg?resize=1024%2C972&ssl=1" class="img-fluid" alt="Kitchen">
                <p>Kitchen</p>
              </div>
              <div class="col-6">
                <img src="https://i0.wp.com/ounjealadun.com/wp-content/uploads/2015/05/20170423_164717_wm.jpg?resize=1024%2C972&ssl=1" class="img-fluid" alt="Health and Beauty">
                <p>Health and Beauty</p>
              </div>
            </div>
            <a href="#" class="btn btn-link">See more</a>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Gaming accessories</h5>
            <div class="row">
              <div class="col-6">
                <img src="https://i0.wp.com/ounjealadun.com/wp-content/uploads/2015/05/20170423_164717_wm.jpg?resize=1024%2C972&ssl=1" class="img-fluid" alt="Headsets">
                <p>Headsets</p>
              </div>
              <div class="col-6">
                <img src="https://i0.wp.com/ounjealadun.com/wp-content/uploads/2015/05/20170423_164717_wm.jpg?resize=1024%2C972&ssl=1" class="img-fluid" alt="Keyboards">
                <p>Keyboards</p>
              </div>
              <div class="col-6">
                <img src="https://i0.wp.com/ounjealadun.com/wp-content/uploads/2015/05/20170423_164717_wm.jpg?resize=1024%2C972&ssl=1" class="img-fluid" alt="Computer mice">
                <p>Computer mice</p>
              </div>
              <div class="col-6">
                <img src="https://i0.wp.com/ounjealadun.com/wp-content/uploads/2015/05/20170423_164717_wm.jpg?resize=1024%2C972&ssl=1" class="img-fluid" alt="Chairs">
                <p>Chairs</p>
              </div>
            </div>
            <a href="#" class="btn btn-link">See more</a>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Shop deals in Fashion</h5>
            <div class="row">
              <div class="col-6">
                <img src="https://i0.wp.com/ounjealadun.com/wp-content/uploads/2015/05/20170423_164717_wm.jpg?resize=1024%2C972&ssl=1" class="img-fluid" alt="Jeans under $50">
                <p>Jeans under $50</p>
              </div>
              <div class="col-6">
                <img src="https://i0.wp.com/ounjealadun.com/wp-content/uploads/2015/05/20170423_164717_wm.jpg?resize=1024%2C972&ssl=1" class="img-fluid" alt="Tops under $25">
                <p>Tops under $25</p>
              </div>
              <div class="col-6">
                <img src="https://i0.wp.com/ounjealadun.com/wp-content/uploads/2015/05/20170423_164717_wm.jpg?resize=1024%2C972&ssl=1" class="img-fluid" alt="Dresses under $30">
                <p>Dresses under $30</p>
              </div>
              <div class="col-6">
                <img src="https://i0.wp.com/ounjealadun.com/wp-content/uploads/2015/05/20170423_164717_wm.jpg?resize=1024%2C972&ssl=1" class="img-fluid" alt="Shoes under $50">
                <p>Shoes under $50</p>
              </div>
            </div>
            <a href="#" class="btn btn-link">See all deals</a>
          </div>
        </div>
      </div>
    </div>
  </div>


  <!-- //footer -->
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <h5>Get to Know Us</h5>
          <ul class="list-unstyled">
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">About Amazon</a></li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Amazon Devices</a></li>
            <li><a href="#">Amazon Science</a></li>
          </ul>
        </div>
        <div class="col-md-3">
          <h5>Make Money with Us</h5>
          <ul class="list-unstyled">
            <li><a href="#">Sell products on Amazon</a></li>
            <li><a href="#">Sell on Amazon Business</a></li>
            <li><a href="#">Sell apps on Amazon</a></li>
            <li><a href="#">Become an Affiliate</a></li>
            <li><a href="#">Advertise Your Products</a></li>
            <li><a href="#">Self-Publish with Us</a></li>
            <li><a href="#">Host an Amazon Hub</a></li>
            <li><a href="#">See More Make Money with Us</a></li>
          </ul>
        </div>
        <div class="col-md-3">
          <h5>Amazon Payment Products</h5>
          <ul class="list-unstyled">
            <li><a href="#">Amazon Business Card</a></li>
            <li><a href="#">Shop with Points</a></li>
            <li><a href="#">Reload Your Balance</a></li>
            <li><a href="#">Amazon Currency Converter</a></li>
          </ul>
        </div>
        <div class="col-md-3">
          <h5>Let Us Help You</h5>
          <ul class="list-unstyled">
            <li><a href="#">Amazon and COVID-19</a></li>
            <li><a href="#">Your Account</a></li>
            <li><a href="#">Your Orders</a></li>
            <li><a href="#">Shipping Rates & Policies</a></li>
            <li><a href="#">Returns & Replacements</a></li>
            <li><a href="#">Manage Your Content and Devices</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>


  <footer class="footer bg-dark text-white">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-6">
          <h5>Amazon Music</h5>
          <p>Stream millions of songs</p>
        </div>
        <div class="col-md-3 col-sm-6">
          <h5>Amazon Ads</h5>
          <p>Reach customers wherever they spend their time</p>
        </div>
        <div class="col-md-3 col-sm-6">
          <h5>6pm</h5>
          <p>Score deals on fashion brands</p>
        </div>
        <div class="col-md-3 col-sm-6">
          <h5>AbeBooks</h5>
          <p>Books, art & collectibles</p>
        </div>
        <!-- Add more columns as needed -->
      </div>
      <div class="row mt-3">
        <div class="col-md-3 col-sm-6">
          <h5>AmazonGlobal</h5>
          <p>Ship Orders Internationally</p>
        </div>
        <div class="col-md-3 col-sm-6">
          <h5>Home Services</h5>
          <p>Experienced Pros Happiness Guarantee</p>
        </div>
        <div class="col-md-3 col-sm-6">
          <h5>Amazon Web Services</h5>
          <p>Scalable Cloud Computing Services</p>
        </div>
        <div class="col-md-3 col-sm-6">
          <h5>Audible</h5>
          <p>Listen to Books & Original Audio Performances</p>
        </div>
        <!-- Add more columns as needed -->
      </div>
      <hr>
      <div class="row">
        <div class="col-12 text-center">
          <ul class="list-inline">
            <li class="list-inline-item"><a href="#" class="text-white">Conditions of Use</a></li>
            <li class="list-inline-item"><a href="#" class="text-white">Privacy Notice</a></li>
            <li class="list-inline-item"><a href="#" class="text-white">Consumer Health Data Privacy Disclosure</a></li>
            <li class="list-inline-item"><a href="#" class="text-white">Your Ads Privacy Choices</a></li>
          </ul>
          <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </div>
  </footer>


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
  padding-top: 72px; /* Additional padding for content */
}
.close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
}
.carousel-inner img {
  width: 100%;
  height: 75vh; /* Ensure images cover the full height of the viewport */
  object-fit: cover; /* Cover the entire carousel area */
}
.carousel-item {
  min-height: 100vh; /* Ensure carousel items cover the full height of the viewport */
}

body {
  background-color: #232f3e;
  color: #ffffff;
}
.footer {
  padding: 20px 0;
  background-color: #232f3e;
  color: #ffffff;
}
.footer a {
  color: #ffffff;
}
.footer a:hover {
  text-decoration: underline;
}
.footer hr {
  border-top: 1px solid #3a4553;
}
.card {
  border: none;
}
.card-title {
  font-weight: bold;
}
.card-body p {
  margin-bottom: 0;
}
.img-fluid {
  max-width: 100%;
  height: auto;
}
@media (max-width: 767px) {
  .navbar-custom .navbar-nav .nav-link {
    font-size: 14px;
  }
  #page-content-wrapper {
    padding-top: 100px; /* Adjusted for mobile view */
  }
  .carousel-inner img {
    margin-top: 150px;
    height: 75vh; /* Adjust height for mobile view */
  }
  .carousel-item {
    min-height: 50vh; /* Adjust height for mobile view */
  }
  .footer {
  padding: 20px 0;
}
.footer h5 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}
.footer p {
  margin-bottom: 1rem;
}
.footer ul {
  padding-left: 0;
  list-style: none;
}
.footer ul li a {
  color: #ffffff;
  text-decoration: none;
}
.footer ul li a:hover {
  text-decoration: underline;
}
.footer hr {
  border-top: 1px solid #3a4553;
}
}
</style>
