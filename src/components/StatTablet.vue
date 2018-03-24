<template>
  <div class="col-sm-6 col-lg-3">
    <div class="card p-3">
        <div class="d-flex align-items-center">
        <span class="stamp stamp-md bg-blue mr-3">
            <i class="fe fe-dollar-sign"></i>
        </span>
        <div>
            <h4 class="m-0"><a href="javascript:void(0)">132 <small>Sales</small></a></h4>
            <small class="text-muted">12 waiting payments</small>
        </div>
        </div>
    </div>
    </div>
</template>


<script>
export default {
    name: "StatTablet",
    props: [
        "stat"
    ],
    data () {
        return {

        }
    },
    methods: {

    }
}
</script>

<style>

</style>

