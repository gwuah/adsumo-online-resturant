<template>

    <div class="card" style="width: 18rem;">
        <img class="card-img-top" :src="`${order.foodImgUrl}`" alt="Card image cap">
        <div class="card-body">
            <h5 id="ctitle" class="card-title">{{ order.foodName }}</h5>

            <div class="d-flex pt-5 mt-auto orderInfo">
                <div class="avatar avatar-md mr-3" :style="`background-image: url(${ order.userAvatar })`">
                </div>
                <div>
                    <a :href="`${ order.userProfileUrl }`" class="card-name text-default">{{ order.username }}</a>
                    <p class="d-block text-muted">{{ order.time }}</p>
                </div>

                <div class="card-options">
                    <a @click="toggler()" class="btn btn-secondary btn-sm toggla"><i class="fa fa-bolt"></i></a>
                </div>
                
            </div>
            
        </div>
        <div  v-if="show" class="sub-card">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                <p class="tablet"> <i class="fa fa-location-arrow"></i> Location </p>
                    <p class="location">{{ order.location }}</p>
                </li>
                <li class="list-group-item"> 
                    <p class="tablet">  <i class="fa fa-clone"></i> Quantity </p>
                    <p class="">x - {{ order.quantity }} </p>
                </li>
                <li class="list-group-item"> 
                    <p class="tablet">  <i class="fa fa-money"></i> Price </p>
                    <p class="">Ghc {{ order.price }} </p>
                </li>
            </ul>
            <div class="card-body">
                <button type="button" class="btn btn-outline-danger card__button">trash it</button>
                <button type="button" class="btn btn-outline-success card__button">checkout</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "OrderCard",
  data () {
      return {
         show: false
      }
  },
  props: [
      "order"
    ],
    methods: {
        toggler: function() {
            console.log(this.show)
            this.show ? this.show = false : this.show = true
        }
    }
}
</script>
