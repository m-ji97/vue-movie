<template>
    <div>
        <div id="wrap">

            <AppHeader />

            <div id="container" class="clearfix">

                <div id="content">
                    <div>
                        <h1 id="title">포인트 적립 완료</h1>

                        <p id="pointMent">적립 포인트 : {{ $store.state.plusPoint }} </p>
                        <p id="pointMent">누적 포인트 : {{ $store.state.point + $store.state.plusPoint }}</p>

                        <button id="btnOk" @click="goPay">확인</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>


<script>
//import axios from 'axios';
import "@/assets/css/EndPoint.css";
import AppHeader from "@/components/AppHeader.vue"

export default {
    name: "EndPointView",
    components: {
        AppHeader,
    },
    data() {
        return {};
    },
    methods: {
        goPay() {
            this.$router.push({
                name: 'PaymentCheckView4',
            });
            this.totalPoint = this.$store.state.point + this.$store.state.plusPoint;
            this.$store.commit('setTotalPoint', this.totalPoint);
        }
    },
};
</script>


<style></style>