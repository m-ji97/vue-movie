<template>
    <div>
        <div id="wrap">

            <AppHeader />

            <div id="container" class="clearfix">

                <div id="content">
                    <div id="box-btn">
                        <h1 id="title">포인트</h1>
                        
                        <router-link id="btnAdd" to="/ticket/pluspoint">
                            <img id="imgAddAndUse" src="@/assets/img/addPoint.png">
                            적립
                        </router-link>

                        <router-link id="btnUse" to="/ticket/pointuse">
                            <img id="imgAddAndUse" src="@/assets/img/usePoint.png">
                            사용
                        </router-link>

                        <router-link id="btnNot" to="/ticket/paymentform">
                            <img id="imgX" src="@/assets/img/X.png">
                            적립 안함
                        </router-link>
                    </div>




                </div>

            </div>

            <AppFooter />

        </div>
    </div>
</template>


<script>
import "@/assets/css/ChoosePoint.css";
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue"

export default {
    name: "ChoosePointView",
    components: {
        AppFooter,
        AppHeader,
    },
    data() {
        return {
            isModalViewed: false,
        };
    },
    methods: {},
};
</script>


<style></style>