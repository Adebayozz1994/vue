<template>
      <div id="app" class="container product-details">
        <div class="row">
            <div class="col-md-4">
                <img :src="product.image" :alt="product.title" class="product-image">
            </div>
            <div class="col-md-8">
                <h1 class="product-title">{{ product.title }}</h1>
                <p class="product-price">${{ product.price }}</p>
                <p class="text-muted">+ $47.14 Shipping & Import Fees Deposit to Nigeria</p>
                <p class="delivery-date">Delivery <strong>Monday, August 19</strong></p>
                <p>Order within 16 hrs 47 mins</p>
                <p class="text-success">In Stock</p>
                <div class="mb-3">
                    <label for="quantity">Quantity:</label>
                    <select v-model="quantity" id="quantity" class="form-control" style="width: auto; display: inline-block;">
                        <option v-for="q in 5" :key="q" :value="q">{{ q }}</option>
                    </select>
                </div>
                <button class="btn btn-warning btn-lg" @click="addToCart">Add to Cart</button>
                <button class="btn btn-primary btn-lg" @click="buyNow">Buy Now</button>

                <div class="product-info mt-4">
                    <h5>About this item</h5>
                    <ul>
                        <li v-for="(detail, index) in product.details" :key="index">{{ detail }}</li>
                    </ul>
                    <p>{{ product.note }}</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
  new Vue({
            el: '#app',
            data: {
                product: {
                    image: 'https://example.com/path-to-your-image.jpg',
                    title: 'Stand, Universal Cell Phone Holder for Hand and Case, Compatible with iPhone & Android Smartphones - Silver',
                    price: 10.99,
                    details: [
                        'Foldable & Adjustable Design: Provides a secure grip and convenient stand for any activity.',
                        'Ergonomic Finger Ring: Offers a comfortable and secure hold, reducing the risk of drops.',
                        'Steady Horizontal & Vertical Hold: Perfect for watching videos, video calls, and browsing the web.',
                        'Universal Compatibility: Compatible with iPhone, Android, and all smartphone models.',
                        'Easy Installation: Attaches easily to any phone case with a strong adhesive.',
                        'Durable & High-Quality Materials: Built to last with premium materials for long-term use.',
                        'Lightweight & Portable: Slim design fits easily in your pocket or bag, perfect for on-the-go use.'
                    ],
                    note: 'Note: Products with electrical plugs are designed for use in the US. Outlets and voltage differ internationally and this product may require an adapter or converter for use in your destination. Please check compatibility before purchasing.'
                },
                quantity: 1
            },
            methods: {
                addToCart() {
                    alert('Added to cart!');
                },
                buyNow() {
                    alert('Proceeding to buy now!');
                }
            }
        });
</script>

<style scoped>
 .product-image {
            max-width: 100%;
            height: auto;
        }

        .product-details {
            margin-top: 20px;
        }

        .product-title {
            font-size: 24px;
            font-weight: bold;
        }

        .product-price {
            font-size: 24px;
            color: #B12704;
        }

        .save-label {
            color: #B12704;
            font-weight: bold;
        }

        .delivery-date {
            font-size: 14px;
            color: #565959;
        }

        .product-info ul {
            padding-left: 20px;
        }

        .product-info ul li {
            list-style-type: disc;
        }
</style>