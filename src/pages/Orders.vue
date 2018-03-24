<template>
	<div class="tab__content">
        <div class="container">
            <div class="row row-cards">
				<div class="col-md-4" v-for="order in orders">
					<OrderCard :order="order"></OrderCard>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import OrderCard from "../components/OrderCard"

	export default {
		name: "Admin",
		data() {
			return {
				message: "This is the Orders Page",
				orders: [
					{
						foodName: "Banku and Okro Stew",
						quantity: "20",
						price: "200",
						foodImgUrl: "./static/photos/vladimir-kudinov-12761-500.jpg",
						userAvatar: "./static/photos/david-klaasen-54203-500.jpg",
						userProfileUrl: "",
						username: "David Soriano",
						time: `${(new Date()).toLocaleTimeString()}`,
						location: "Cal Bank Resource Centre - Oscar(Kwabenya)"


					},
					{
						foodName: "Banku and Okro Stew",
						quantity: "20",
						price: "200",
						foodImgUrl: "./static/photos/vladimir-kudinov-12761-500.jpg",
						userAvatar: "./static/photos/david-klaasen-54203-500.jpg",
						userProfileUrl: "",
						username: "David Soriano",
						time: `${(new Date()).toLocaleTimeString()}`,
						location: "Cal Bank Resource Centre - Oscar(Kwabenya)"


					},
					{
						foodName: "Banku and Okro Stew",
						quantity: "20",
						price: "200",
						foodImgUrl: "./static/photos/vladimir-kudinov-12761-500.jpg",
						userAvatar: "./static/photos/david-klaasen-54203-500.jpg",
						userProfileUrl: "",
						username: "David Soriano",
						time: `${(new Date()).toLocaleTimeString()}`,
						location: "Cal Bank Resource Centre - Oscar(Kwabenya)"


					},
					{
						foodName: "Banku and Okro Stew",
						quantity: "20",
						price: "200",
						foodImgUrl: "./static/photos/vladimir-kudinov-12761-500.jpg",
						userAvatar: "./static/photos/david-klaasen-54203-500.jpg",
						userProfileUrl: "",
						username: "David Soriano",
						time: `${(new Date()).toLocaleTimeString()}`,
						location: "Cal Bank Resource Centre - Oscar(Kwabenya)"


					},
					{
						foodName: "Banku and Okro Stew",
						quantity: "20",
						price: "200",
						foodImgUrl: "./static/photos/vladimir-kudinov-12761-500.jpg",
						userAvatar: "./static/photos/david-klaasen-54203-500.jpg",
						userProfileUrl: "",
						username: "David Soriano",
						time: `${(new Date()).toLocaleTimeString()}`,
						location: "Cal Bank Resource Centre - Oscar(Kwabenya)"


					},
					{
						foodName: "Banku and Okro Stew",
						quantity: "20",
						price: "200",
						foodImgUrl: "./static/photos/vladimir-kudinov-12761-500.jpg",
						userAvatar: "./static/photos/david-klaasen-54203-500.jpg",
						userProfileUrl: "",
						username: "David Soriano",
						time: `${(new Date()).toLocaleTimeString()}`,
						location: "Cal Bank Resource Centre - Oscar(Kwabenya)"


					}
				]
			}
		}
	}
</script>
