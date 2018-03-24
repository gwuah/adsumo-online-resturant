<template>
	<div class="col-4 col-sm-3 col-lg-3">
    <div class="card">
        <div class="card-body p-3 text-center">
             <i :class="{fe: true, type: "card.type", staticon: true}"></i>
            <div :id="card.id" class="h3 m-0 statValue">{ card.statValue }</div>
            <div class="text-muted mb-4">{ card.cardName }</div>
        </div>
    </div>
	</div>
</template>

<script>
	export default {
		name: "Statcard",
		prop: ["stats"],
		data () {
			return {
			}
		}
	}
</script>

<style type="text/css" scoped>
	  .statValue {
	  	margin-top: 10px !important;
	  }
</style>