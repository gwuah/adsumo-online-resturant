<template>

  <div :id="id">

    <div id="company-logo"></div>

    <div id="company-name">ADSUMO</div>

    <div id="adsumo__tabs">

      <router-link to="/">
          <div class="adsumo__tab">
              <div class="icon__container">
                  <i class="fe fe-home"></i>
              </div>
              <div class="tab__name">Overview</div>
          </div></router-link>
      <router-link to="/orders">
          <div class="adsumo__tab">
              <div class="icon__container">
                  <i class="fe fe-shopping-cart"></i>
              </div>
              <div class="tab__name">Orders</div>
          </div></router-link>
      <router-link to="/customers">
          <div class="adsumo__tab">
              <div class="icon__container">
                  <i class="fe fe-users"></i>
              </div>
              <div class="tab__name">Customers</div>
          </div></router-link>
      <router-link to="/menus">
          <div class="adsumo__tab">
              <div class="icon__container">
                  <i class="fe fe-map"></i>
              </div>
              <div class="tab__name">Menus</div>
          </div></router-link>
      <router-link to="/settings">
          <div class="adsumo__tab">
              <div class="icon__container">
                  <i class="fe fe-settings"></i>
              </div>
              <div class="tab__name">Settings</div>
          </div></router-link>
      <router-link to="/logout">
          <div class="adsumo__tab">
              <div class="icon__container">
                  <i class="fe fe-power"></i>
              </div>
              <div class="tab__name">Sign Out</div>
          </div></router-link>
    
    </div>



    </div>
	
</template>

<script>
	export default {
		name: "Sidebar",
		data () {
			return {
        id: "sidebar"
			}
		}
	}
</script>