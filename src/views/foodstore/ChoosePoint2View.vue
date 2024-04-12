<template>
    <div>
        <div id="wrap">

            <AppHeader />

            <div id="container" class="clearfix">

                <div id="content">
                    <div id="box-btn">
                        <h1 id="title">포인트</h1>

                        <router-link id="btnAdd" to="/foodstore/pluspoint2">
                            <img id="imgAddAndUse" src="@/assets/img/addPoint.png">
                            적립
                        </router-link>

                        <router-link id="btnUse" to="/foodstore/pointuse2">
                            <img id="imgAddAndUse" src="@/assets/img/usePoint.png">
                            사용
                        </router-link>

                        <router-link id="btnNot" to="/foodstore/paymentform">
                            <img id="imgX" src="@/assets/img/X.png">
                            적립 안함
                        </router-link>
                    </div>
                </div>

            </div>


        </div>
    </div>
</template>


<script>
//import axios from 'axios';
import "@/assets/css/ChoosePoint2.css";
import AppHeader from "@/components/AppHeader.vue"

export default {
    name: "ChoosePoint2View",
    components: {
        AppHeader,
    },
    data() {
        return {
        };
    },
    computed: {

    },
    methods: {
    },
};
</script>

