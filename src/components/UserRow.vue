
    <template>
        <tr>
        <td class="text-center">
            <div class="avatar d-block" :style="`background-image: url(${ user.avatarUrl })`">
            <span :class="`avatar-status bg-${determineColor(user.status)}`"></span>
            </div>
        </td>
        <td>
            <div class="text-center">{{ user.username }}</div>
            <div class="small text-muted text-center">
            Registered: {{user.dateRegistered}}
            </div>
        </td>
        <td>
            <div class="clearfix">
            <div class="float-left">
                <strong>{{ user.usage }}%</strong>
            </div>
            <div class="float-right">
                <small class="text-muted"></small>
            </div>
            </div>
            <div class="progress progress-xs">
            <div class="progress-bar bg-green" role="progressbar" :style="`width: ${user.usage}%`" :aria-valuenow="`${ user.usage }`" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </td>
        <td class="text-center">
            <i :class="`payment payment-${user.payment}`"></i>
        </td>
        <td class="text-center">
            <div class="small text-muted">Last login</div>
            <div>{{ user.lastLogin }}</div>
        </td>
        <td class="text-center">
            <div class="mx-auto chart-circle chart-circle-xs" data-value="0.91" data-thickness="3" data-color="blue">
                <canvas width="40" height="40"></canvas>
                <div class="chart-circle-value text-center">91%</div>
            </div>
        </td>
        <!-- <td class="text-center">
            <div class="item-action dropdown">
            <a href="javascript:void(0)" data-toggle="dropdown" class="icon"><i class="fe fe-more-vertical"></i></a>
            <div class="dropdown-menu dropdown-menu-right">
                <a href="javascript:void(0)" class="dropdown-item"><i class="dropdown-icon fe fe-tag"></i> Action </a>
                <a href="javascript:void(0)" class="dropdown-item"><i class="dropdown-icon fe fe-edit-2"></i> Another action </a>
                <a href="javascript:void(0)" class="dropdown-item"><i class="dropdown-icon fe fe-message-square"></i> Something else here</a>
                <div class="dropdown-divider"></div>
                <a href="javascript:void(0)" class="dropdown-item"><i class="dropdown-icon fe fe-link"></i> Separated link</a>
            </div>
            </div>
        </td> -->
        </tr>
    </template>



<script>
export default {
    name: "UserRow",
    props: [
        "user"
    ],
    data () {
        return {

        }
    },
    methods: {
        determineColor: function(status) {
            switch (status) {
                case "online" :
                    return "green";
                    break;

                case "offline" :
                    return "red"
                    break;
            }
        }
    }
}
</script>

<style>

</style>

