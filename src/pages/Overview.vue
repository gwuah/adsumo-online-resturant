<template>
	<div class="tab__content">
        <div class="container">
            <div class="row row-cards">


                <!-- Stats Card -->
                <div class="col-4 col-sm-3 col-lg-3" v-for="stat in statsCard">
                    <div class="card">
                        <div class="card-body p-3 text-center staticon">
                             <i :class="`fa ${stat.icon}`"></i>
                            <div class="h3 m-0 delim">{{ stat.value }}</div>
                            <div class="text-muted mb-4">{{ stat.name }}</div>
                        </div>
                    </div>
                </div>

                <!-- social media stats -->

<!--                 <div class="col-sm-6 col-lg-3" v-for="stat in smCards">
                    <div class="card p-3">
                        <div class="d-flex align-items-center">
                            <span :class="`stamp stamp-md bg-${stat.color} mr-3`">
                                <i :class="`fa ${stat.icon }`"></i>
                            </span>
                            <div>
                                <h4 class="m-0"><a href="javascript:void(0)">{{ stat.service}}</a></h4>
                                <span>{{ stat.count }} followers</span>
                            </div>
                        </div>
                    </div>
                </div> -->

            

                <!-- endoffsocial media stats -->


                <div class="row row-cards row-deck">
                    <div class="col-lg-1"></div>
                    <div class="col-lg-5" v-for="article in articles">
                        <div class="card card-aside">
                            <a href="#" class="card-aside-column" :style="`background-image: url(${article.imgUrl})`"></a>
                            <div class="card-body d-flex flex-column">
                                <h4><a href="#">{{article.title}}</a></h4>
                                <div class="text-muted">{{ article.sample }}</div>
                                <div class="d-flex align-items-center pt-5 mt-auto">
                                    <div class="avatar avatar-md mr-3" :style="`background-image: url(${article.authorAvatar})`"></div>
                                    <div>
                                        <a href="./profile.html" class="text-default">{{ article.authorName }}</a>
                                        <div>
                                            <span class="tag tag-rounded">{{ article.tag1 }}</span>
                                            <span class="tag tag-rounded">{{ article.tag2 }}</span>
                                        </div>
                                    </div>
                                    <!-- <div class="ml-auto text-muted">
                                        <a href="javascript:void(0)" class="icon d-none d-md-inline-block ml-3"><i class="fe fe-heart mr-1"></i></a>
                                    </div> -->
                                </div>
                            </div>
                        </div></div>
                    <div class="col-lg-1"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: "Admin",
		data() {
			return {
                apikey: "76938bddf8402d7d201bf4ac64d4993e",
				message: "This is the Overview Page",
                statsCard: [
                    {
                        icon: 'fa-shopping-cart',
                        name: 'Orders Made',
                        value: '150',
                    },
                    {
                        icon: 'fa-anchor',
                        name: 'Orders Processed',
                        value: '600', 
                    },
                    {
                        icon: 'fa-money',
                        name: 'Net Earning',
                        value: 'Ghc 1,345', 
                    },
                    {
                        icon: 'fa-users',
                        name: 'Customers',
                        value: '3000', 
                    }
                ],
                smCards: [
                    {
                        color: "blue",
                        icon: "fa-twitter",
                        service: "Twitter",
                        count: "1000"
                    },
                    {
                        color: "red",
                        icon: "fa fa-instagram",
                        service: "Instagram",
                        count: "200"
                    },
                    {
                        color: "green",
                        icon: "fa-vsco",
                        service: "Vsco",
                        count: "400"
                    },
                    {
                        color: "blue",
                        icon: "fa-facebook",
                        service: "Facebook",
                        count: "500"
                    }
                ],
                articles: [
                    {
                        title: "And this isn't my nose. This is a false one.",
                        sample: "Look, my liege! The Knights Who Say Ni demand a sacrifice! …Are you suggesting that coconuts migr...",
                        imgUrl: "http://thefoodblog.com.au/wp-content/uploads/2015/01/recipe_baba-ghannouj_800x1200-683x1024.jpg",
                        authorAvatar: "./static/images/admin.jpeg",
                        authorName: "Griffith Awuah",
                        tag1: "food",
                        tag2: "life"
                    },
                    {
                        title: "And this isn't my nose. This is a false one.",
                        sample: "Look, my liege! The Knights Who Say Ni demand a sacrifice! …Are you suggesting that coconuts migr...",
                        imgUrl: "http://thefoodblog.com.au/wp-content/uploads/2013/04/hautecuisine2.jpg",
                        authorAvatar: "./static/images/admin.jpeg",
                        authorName: "Griffith Awuah",
                        tag1: "food",
                        tag2: "life"
                    }
                ]
            }
		}
	}
</script>


<style type="text/css" scoped>
	.row {
        margin-top: 25px !important;
        margin-bottom: 15px !important;
    }
</style>