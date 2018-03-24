<template>
	<div id="customer_board" class="tab__content">
        <div class="container">
			<div class="col-12">
                <div class="card">
                  <table class="table table-responsive-sm table-hover table-outline table-vcenter card-table">
                    <thead>
                      <tr>
                        <th class="text-center w-1"><i class="icon-people"></i></th>
                        <th class="text-center">User</th>
                        <th class="text-center">Usage</th>
                        <th class="text-center">Payment</th>
                        <th class="text-center">Activity</th>
                        <th class="text-center">Satisfaction</th>
                        <th class="text-center"><i class="icon-settings"></i></th>
                      </tr>
                    </thead>

					<tr is="UserRow" v-for="user in users" :user="user"></tr>

                  </table>
                </div>
              </div>
        </div>
	</div>
</template>

<script>
	import UserRow from "../components/UserRow"

	export default {
		name: "Admin",
		data() {
			return {
				users: [
					{
						username: "Griffith Awuah",
						avatarUrl: "./static/faces/female/26.jpg",
						registeredDate: "Feb 7, 2018",
						usage: "89",
						payment: "visa",
						lastLogin: "7 minutes ago",
						satisfaction: "91",
						status: "offline",
						dateRegistered: "Feb 7, 2018",
					},
					{
						username: "Griffith Awuah",
						avatarUrl: "./static/faces/female/26.jpg",
						registeredDate: "Feb 7, 2018",
						usage: "89",
						payment: "visa",
						lastLogin: "7 minutes ago",
						satisfaction: "91",
						status: "offline",
						dateRegistered: "Feb 7, 2018",
					},
					{
						username: "Griffith Awuah",
						avatarUrl: "./static/faces/female/26.jpg",
						registeredDate: "Feb 7, 2018",
						usage: "89",
						payment: "visa",
						lastLogin: "7 minutes ago",
						satisfaction: "91",
						status: "offline",
						dateRegistered: "Feb 7, 2018",
					},
					{
						username: "Griffith Awuah",
						avatarUrl: "./static/faces/female/26.jpg",
						registeredDate: "Feb 7, 2018",
						usage: "89",
						payment: "visa",
						lastLogin: "7 minutes ago",
						satisfaction: "91",
						status: "offline",
						dateRegistered: "Feb 7, 2018",
					},
					{
						username: "Griffith Awuah",
						avatarUrl: "./static/faces/female/26.jpg",
						registeredDate: "Feb 7, 2018",
						usage: "89",
						payment: "visa",
						lastLogin: "7 minutes ago",
						satisfaction: "91",
						status: "offline",
						dateRegistered: "Feb 7, 2018",
					},
					{
						username: "Griffith Awuah",
						avatarUrl: "./static/faces/female/26.jpg",
						registeredDate: "Feb 7, 2018",
						usage: "89",
						payment: "visa",
						lastLogin: "7 minutes ago",
						satisfaction: "91",
						status: "offline",
						dateRegistered: "Feb 7, 2018",
					},
					{
						username: "Griffith Awuah",
						avatarUrl: "./static/faces/female/26.jpg",
						registeredDate: "Feb 7, 2018",
						usage: "89",
						payment: "visa",
						lastLogin: "7 minutes ago",
						satisfaction: "91",
						status: "offline",
						dateRegistered: "Feb 7, 2018",
					},
					{
						username: "Griffith Awuah",
						avatarUrl: "./static/faces/female/26.jpg",
						registeredDate: "Feb 7, 2018",
						usage: "89",
						payment: "visa",
						lastLogin: "7 minutes ago",
						satisfaction: "91",
						status: "offline",
						dateRegistered: "Feb 7, 2018",
					},
					{
						username: "Griffith Awuah",
						avatarUrl: "./static/faces/female/26.jpg",
						registeredDate: "Feb 7, 2018",
						usage: "89",
						payment: "visa",
						lastLogin: "7 minutes ago",
						satisfaction: "91",
						status: "offline",
						dateRegistered: "Feb 7, 2018",
					},
					{
						username: "Griffith Awuah",
						avatarUrl: "./static/faces/female/26.jpg",
						registeredDate: "Feb 7, 2018",
						usage: "89",
						payment: "visa",
						lastLogin: "7 minutes ago",
						satisfaction: "91",
						status: "offline",
						dateRegistered: "Feb 7, 2018",
					}
					
				]
			}
		}
	}
</script>


<style scoped>
	#customer_board {
		background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/coc-background.jpg') no-repeat center center fixed;
		background-size: cover;
		width: calc(100% - 250px);
		position: relative;
		left: 250px;
		padding-top: 35px;
		height: 100%;
	}
</style>
