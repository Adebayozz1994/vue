<template>
<div class="bg">
  <div>
    <!-- Top Navigation Bar -->
    <main><a href="#scroll-button"></a></main>
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
      <div class="sidebar-heading bg-light pt-3"><h6 class="text-bold">Digital content & devices</h6></div>
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
              <img src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg" class="d-block w-100 img-fluid" alt="First slide">
            </div>
            <div class="carousel-item" data-bs-interval="3000">
              <img src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg" class="d-block w-100 img-fluid" alt="Second slide">
            </div>
            <div class="carousel-item" data-bs-interval="3000">
              <img src="https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg" class="d-block w-100 img-fluid" alt="Third slide">
            </div>
          </div>
        </div>
  <div class="container my-4 ml-5" id="container-f">
    <div class="row">
      <div class="col-md-3">
        <div class="card">
          <img class="card-img-top" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_2X._SY608_CB639922111_.jpg" alt="Deals in PCs">
          <div class="card-body">
            <h5 class="card-title">Shop activity trackers and smartwatches</h5>
            <a href="#" class="btn btn-link">Shop now</a>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Warm & welcoming decor</h5>
            <div class="row">
              <div class="col-6">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/img22/Events/Fall23/FALL23_Oct_Wreaths_Decor_QuadCard_D_01_186x116._SY116_CB596234042_.jpg" class="img-fluid" alt="Dining">
                <small><p>Wreaths & garlands</p></small>
              </div>
              <div class="col-6">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/img22/Events/Fall23/FALL23_HP_Oct_Decor_QuadCard_D_03_372x232._SY232_CB596234042_.jpg" class="img-fluid" alt="Home">
                <small><p>Outdoor Decor</p></small>
              </div>
              <div class="col-6">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/img22/Events/Fall23/FALL23_Oct_Pillows_Decor_QuadCard_D_02_372x232._SY232_CB596234042_.jpg" class="img-fluid" alt="Kitchen">
                <small><p>Pillows & throws</p></small>
              </div>
              <div class="col-6">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/img22/Events/Fall23/FALL23_HP_Oct_Decor_QuadCard_D_04_372x232._SY232_CB596234042_.jpg" class="img-fluid" alt="Health and Beauty">
                <small><p>Wall art & mirrors</p></small>
              </div>
            </div>
            <a href="#" class="btn btn-link">Shop more fall finds</a>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Gaming merchandise</h5>
            <div class="row">
              <div class="col-6">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Apparel_2x._SY232_CB667159060_.jpg" class="img-fluid" alt="Headsets">
                <p>Apparel</p>
              </div>
              <div class="col-6">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Hat_2x._SY232_CB667159060_.jpg" class="img-fluid" alt="Keyboards">
                <p>Hats</p>
              </div>
              <div class="col-6">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Figure_2x._SY232_CB667159060_.jpg" class="img-fluid" alt="Computer mice">
                <p>Action figures</p>
              </div>
              <div class="col-6">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mug_2x._SY232_CB667159063_.jpg" class="img-fluid" alt="Chairs">
                <p>Mugs</p>
              </div>
            </div>
            <a href="#" class="btn btn-link">See more</a>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Look your best this season</h5>
            <div class="row">
              <div class="col-6">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_2x_For_her._SY232_CB558654384_.jpg" class="img-fluid" alt="Jeans under $50">
                <p>For Her</p>
              </div>
              <div class="col-6">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_2x_For_him._SY232_CB558654384_.jpg" class="img-fluid" alt="Tops under $25">
                <p>For Him</p>
              </div>
              <div class="col-6">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_2x_For_teens._SY232_CB558654384_.jpg" class="img-fluid" alt="Dresses under $30">
                <p>For teens</p>
              </div>
              <div class="col-6">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_2x_For_kids._SY232_CB558654384_.jpg" class="img-fluid" alt="Shoes under $50">
                <p>For Kids</p>
              </div>
            </div>
            <a href="#" class="btn btn-link">See all deals</a>
          </div>
        </div>
      </div>
    </div>
  </div>
      </div>
    </div>
  </div>

 <!-- Image-Scroll -->
   <div class="scroll-container">
    <div class="scroll-content">
      <img class="scroll-img" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v3._SY608_CB573698005_.jpg" alt="">
      <img class="scroll-img" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_2X._SY608_CB639922111_.jpg" alt="">
      <img class="scroll-img" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v6._SY608_CB573698005_.jpg" alt="">
      <img class="scroll-img" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_2x_laptop._SY232_CB558654384_.jpg" alt="">
      <img class="scroll-img" src="https://m.media-amazon.com/images/I/51Zo7mGSCuL._AC_SY400_.jpg" alt="">
      <!-- Duplicate images for seamless looping -->
      <img class="scroll-img" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v3._SY608_CB573698005_.jpg" alt="">
      <img class="scroll-img" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_2X._SY608_CB639922111_.jpg" alt="">
      <img class="scroll-img" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v6._SY608_CB573698005_.jpg" alt="">
      <img class="scroll-img" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_2x_laptop._SY232_CB558654384_.jpg" alt="">
      <img class="scroll-img" src="https://m.media-amazon.com/images/I/51Zo7mGSCuL._AC_SY400_.jpg" alt="">
    </div>
  </div>
<!-- cards -->
 
           <div class="container my-4">
    <div class="row">
      <div class="col-md-3">
        <div class="card">
          <img class="card-img-top" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_2X._SY608_CB639922111_.jpg" alt="Deals in PCs">
          <div class="card-body">
            <h5 class="card-title">Shop activity trackers and smartwatches</h5>
            <a href="#" class="btn btn-link">Shop now</a>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Warm & welcoming decor</h5>
            <div class="row">
              <div class="col-6">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/img22/Events/Fall23/FALL23_Oct_Wreaths_Decor_QuadCard_D_01_186x116._SY116_CB596234042_.jpg" class="img-fluid" alt="Dining">
                <p>Wreaths & garlands</p>
              </div>
              <div class="col-6">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/img22/Events/Fall23/FALL23_HP_Oct_Decor_QuadCard_D_03_372x232._SY232_CB596234042_.jpg" class="img-fluid" alt="Home">
                <p>Outdoor Decor</p>
              </div>
              <div class="col-6">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/img22/Events/Fall23/FALL23_Oct_Pillows_Decor_QuadCard_D_02_372x232._SY232_CB596234042_.jpg" class="img-fluid" alt="Kitchen">
                <p>Pillows & throws</p>
              </div>
              <div class="col-6">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/img22/Events/Fall23/FALL23_HP_Oct_Decor_QuadCard_D_04_372x232._SY232_CB596234042_.jpg" class="img-fluid" alt="Health and Beauty">
                <p>Wall art & mirrors</p>
              </div>
            </div>
            <a href="#" class="btn btn-link">Shop more fall finds</a>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Gaming merchandise</h5>
            <div class="row">
              <div class="col-6">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Apparel_2x._SY232_CB667159060_.jpg" class="img-fluid" alt="Headsets">
                <p>Apparel</p>
              </div>
              <div class="col-6">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Hat_2x._SY232_CB667159060_.jpg" class="img-fluid" alt="Keyboards">
                <p>Hats</p>
              </div>
              <div class="col-6">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Figure_2x._SY232_CB667159060_.jpg" class="img-fluid" alt="Computer mice">
                <p>Action figures</p>
              </div>
              <div class="col-6">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mug_2x._SY232_CB667159063_.jpg" class="img-fluid" alt="Chairs">
                <p>Mugs</p>
              </div>
            </div>
            <a href="#" class="btn btn-link">See more</a>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Look your best this season</h5>
            <div class="row">
              <div class="col-6">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_2x_For_her._SY232_CB558654384_.jpg" class="img-fluid" alt="Jeans under $50">
                <p>For Her</p>
              </div>
              <div class="col-6">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_2x_For_him._SY232_CB558654384_.jpg" class="img-fluid" alt="Tops under $25">
                <p>For Him</p>
              </div>
              <div class="col-6">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_2x_For_teens._SY232_CB558654384_.jpg" class="img-fluid" alt="Dresses under $30">
                <p>For teens</p>
              </div>
              <div class="col-6">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_2x_For_kids._SY232_CB558654384_.jpg" class="img-fluid" alt="Shoes under $50">
                <p>For Kids</p>
              </div>
            </div>
            <a href="#" class="btn btn-link">See all deals</a>
          </div>
        </div>
      </div>
    </div>
  </div>
             <div class="container my-4">
    <div class="row">
      <div class="col-md-3">
        <div class="card">
          <img class="card-img-top" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v1._SY608_CB573698005_.jpg" alt="Deals in PCs">
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
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_372x232_LP-HP_B08MYX5Q2W_01.23._SY232_CB619238939_.jpg" class="img-fluid" alt="Dining">
                <p>Dining</p>
              </div>
              <div class="col-6">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_372x232_home_B08RCCP3HV_01.23._SY232_CB619238939_.jpg" class="img-fluid" alt="Home">
                <p>Home</p>
              </div>
              <div class="col-6">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_372x232_kitchen_B0126LMDFK_01.23._SY232_CB619238939_.jpg" class="img-fluid" alt="Kitchen">
                <p>Kitchen</p>
              </div>
              <div class="col-6">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_372x232_health-beauty_B07662GN57_01.23._SY232_CB619238939_.jpg" class="img-fluid" alt="Health and Beauty">
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
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_2x._SY232_CB667159060_.jpg" class="img-fluid" alt="Headsets">
                <p>Headsets</p>
              </div>
              <div class="col-6">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_2x._SY232_CB667159063_.jpg" class="img-fluid" alt="Keyboards">
                <p>Keyboards</p>
              </div>
              <div class="col-6">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_2x._SY232_CB667159063_.jpg" class="img-fluid" alt="Computer mice">
                <p>Computer mice</p>
              </div>
              <div class="col-6">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_2x._SY232_CB667159060_.jpg" class="img-fluid" alt="Chairs">
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
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_2x._SY232_CB624172947_.jpg" class="img-fluid" alt="Jeans under $50">
                <p>Jeans under $50</p>
              </div>
              <div class="col-6">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_TOPS_2x._SY232_CB623353881_.jpg" class="img-fluid" alt="Tops under $25">
                <p>Tops under $25</p>
              </div>
              <div class="col-6">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_DRESSES_2x._SY232_CB623353881_.jpg" class="img-fluid" alt="Dresses under $30">
                <p>Dresses under $30</p>
              </div>
              <div class="col-6">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_SHOES_2x._SY232_CB624172947_.jpg" class="img-fluid" alt="Shoes under $50">
                <p>Shoes under $50</p>
              </div>
            </div>
            <a href="#" class="btn btn-link">See all deals</a>
          </div>
        </div>
      </div>
    </div>
  </div>

<!-- scroll_view -->

  <div class="scroll-container">
    <div class="scroll-content">
      <img class="scroll-img" src="https://m.media-amazon.com/images/I/61s3oyEy-0L._AC_SY400_.jpg" alt="">
      <img class="scroll-img" src="https://m.media-amazon.com/images/I/61UFMf2FffL._AC_SY400_.jpg" alt="">
      <img class="scroll-img" src="https://m.media-amazon.com/images/I/814WEkpf3-L._AC_SY400_.jpg" alt="">
      <img class="scroll-img" src="https://m.media-amazon.com/images/I/810H7ed9agL._AC_SY400_.jpg" alt="">
      <img class="scroll-img" src="https://m.media-amazon.com/images/I/81tiCD9VomL._AC_SY400_.jpg" alt="">
      <!-- Duplicate images for seamless looping -->
      <img class="scroll-img" src="https://m.media-amazon.com/images/I/61s3oyEy-0L._AC_SY400_.jpg" alt="">
      <img class="scroll-img" src="https://m.media-amazon.com/images/I/61UFMf2FffL._AC_SY400_.jpg" alt="">
      <img class="scroll-img" src="https://m.media-amazon.com/images/I/814WEkpf3-L._AC_SY400_.jpg" alt="">
      <img class="scroll-img" src="https://m.media-amazon.com/images/I/810H7ed9agL._AC_SY400_.jpg" alt="">
      <img class="scroll-img" src="https://m.media-amazon.com/images/I/81tiCD9VomL._AC_SY400_.jpg" alt="">
    </div>
  </div>
      <div class="d-grid gap-2 p-1" id="scrool-button">
            <button id="back-to-top" @click="scrollToTop" class="btn btn-info" type="button">Back to Top</button>
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
        <div class="col-md-2 col-sm-6">
          <h5 class="fs-6">Amazon Music</h5>
          <p class="text-wrap fs-6 lh-1" style="width: 7rem;">Stream millions of songs</p>
        </div>
        <div class="col-md-2 col-sm-6">
          <h5 class="fs-6">Amazon Ads</h5>
          <p class="text-wrap fs-6 lh-1" style="width: 9rem;">Reach customers wherever they spend their time</p>
        </div>
        <div class="col-md-2 col-sm-6">
          <h5 class="fs-6">6pm</h5>
          <p class="text-wrap fs-6 lh-1" style="width: 6rem;">Score deals on fashion brands</p>
        </div>
        <div class="col-md-2 col-sm-6">
          <h5 class="fs-6">AbeBooks</h5>
          <p class="text-wrap fs-6 lh-1" style="width: 6rem;">Books, art & collectibles</p>
        </div>
         <div class="col-md-2 col-sm-6">
          <h5 class="fs-6">ACX</h5>
          <p class="text-wrap fs-6 lh-1" style="width: 6rem;">Audiobook Publishing Made Easy</p>
        </div>
         <div class="col-md-2 col-sm-6">
          <h5 class="fs-6">Sell on Amazon</h5>
          <p class="text-wrap fs-6 lh-1" style="width: 8rem;">Start a Selling Account</p>
        </div>
        
        <!-- Add more columns as needed -->
      </div>
      <div class="row mt-3">
        <div class="col-md-2 col-sm-6">
          <h5 class="fs-6">AmazonGlobal</h5>
          <p class="text-wrap fs-6 lh-1" style="width: 8rem;">Ship Orders Internationally</p>
        </div>
        <div class="col-md-2 col-sm-6">
          <h5 class="fs-6">Home Services</h5>
          <p class="text-wrap fs-6 lh-1" style="width: 8rem;">Experienced Pros Happiness Guarantee</p>
        </div>
        <div class="col-md-2 col-sm-6">
          <h5 class="fs-6">Amazon Web Services</h5>
          <p class="text-wrap fs-6 lh-1" style="width: 8rem;">Scalable Cloud Computing Services</p>
        </div>
        <div class="col-md-2 col-sm-6">
          <h5 class="fs-6">Audible</h5>
          <p class="text-wrap fs-6 lh-1" style="width: 8rem;">Listen to Books & Original Audio Performances</p>
        </div>
         <div class="col-md-2 col-sm-6">
          <h5 class="fs-6">Box Office Mojo</h5>
          <p class="text-wrap fs-6 lh-1" style="width: 8rem;"> Find Movie Box Office Data</p>
        </div>
        <div class="col-md-2 col-sm-6">
          <h5 class="fs-6">Goodreads</h5>
          <p class="text-wrap fs-6 lh-1" style="width: 8rem;">Book reviews & recommendations</p>
        </div>
        <!-- Add more columns as needed -->
      </div>
      
      <hr>
       <div class="row mt-3">
        <div class="col-md-2 col-sm-6">
          <h5 class="fs-6">IMDbPro</h5>
          <p class="text-wrap fs-6 lh-1" style="width: 8rem;">Get Info Entertainment Professionals Need</p>
        </div>
        <div class="col-md-2 col-sm-6">
          <h5 class="fs-6">Kindle Direct</h5>
          <p class="text-wrap fs-6 lh-1" style="width: 8rem;">Publishing Indie Digital & Print Publishing Made Easy</p>
        </div>
        <div class="col-md-2 col-sm-6">
          <h5 class="fs-6">Prime Video</h5>
          <p class="text-wrap fs-6 lh-1" style="width: 8rem;">Direct Video Distribution Made Easy</p>
        </div>
        <div class="col-md-2 col-sm-6">
          <h5 class="fs-6">Shopbop</h5>
          <p class="text-wrap fs-6 lh-1" style="width: 8rem;">Designer Fashion Brands</p>
        </div>
         <div class="col-md-2 col-sm-6">
          <h5 class="fs-6">Woot!</h5>
          <p class="text-wrap fs-6 lh-1" style="width: 8rem;">Deals and Shenanigans</p>
        </div>
        <div class="col-md-2 col-sm-6">
          <h5 class="fs-6">Zappos</h5>
          <p class="text-wrap fs-6 lh-1" style="width: 8rem;">Shoes & Clothing</p>
        </div>
        <!-- Add more columns as needed -->
      </div>
      
      <hr>
       <div class="row mt-3">
         <div class="col-md-2 col-sm-6">
          <h5></h5>
          <p class="text-wrap fs-6 lh-1" style="width: 8rem;"></p>
        </div>
        <div class="col-md-2 col-sm-6">
          <h5 class="fs-6">eero WiFi</h5>
          <p class="text-wrap fs-6 lh-1" style="width: 8rem;">Stream 4K Video in Every Room</p>
        </div>
        <div class="col-md-2 col-sm-6">
          <h5 class="fs-6">Blink</h5>
          <p class="text-wrap fs-6 lh-1" style="width: 8rem;">Smart Security for Every Home</p>
        </div>
        <div class="col-md-2 col-sm-6">
          <h5 class="fs-6">Neighbors App</h5>
          <p class="text-wrap fs-6 lh-1" style="width: 8rem;">Real-Time Crime & Safety Alerts</p>
        </div>
        <div class="col-md-2 col-sm-6">
          <h5 class="fs-6">Amazon Subscription </h5>
          <p class="text-wrap fs-6 lh-1" style="width: 8rem;">Boxes Top subscription boxes – right to your doo</p>
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
     scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    toggleSidebar() 
      this.isSidebarOpen = !this.isSidebarOpen;
    }
  }
};
</script>

<style scoped>

.bg{
  background-color:azure
}
#container-f{
position: absolute;
bottom: -100px;
z-index: 1;
}
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
  height: 75vh;
  position: fixed;
  top: 112px; 
  left: -250px; 
  overflow-y: auto;
  transition: left 0.5s ease; 
  z-index: 1000; 
}
#sidebar.open {
  left: 0;
}
#page-content-wrapper {
  margin-left: 0; 
  width: 100%;
  padding-top: 72px; 
}
.close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: 2px solid rgb(123, 115, 115);
  font-size: 1.5rem;
}
.carousel-inner img {
  width: 100%;
  height: 75vh; 
  object-fit: cover; 
}
.carousel-item {
  min-height: 100vh; 
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
  background-color: #e8ebef;
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
.scroll-container {
  overflow: hidden;
  width: 100vw;
  white-space: nowrap;
}

.scroll-content {
  display: inline-flex;
  animation: scroll 30s linear infinite;
}

.scroll-img {
  width: 100vw;
  height: auto;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Media query for larger screens */
@media (min-width: 768px) {
  .scroll-img {
    width: 50vw; /* Half viewport width */
  }
}

@media (min-width: 1024px) {
  .scroll-img {
    width: 25vw; /* Quarter viewport width */
  }
}

@media (max-width: 767px) {
  #container-f{
display: none;
}

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
