<template>
    <div>
        <div id="wrap">

            <AppHeader />

            <div id="container" class="clearfix">

                <div id="content">




                    <div id="box-btn">
                        <h1 id="title">포인트 사용 방식</h1>

                        <!-- <p id="subTitle">뭐라고 할까ㅏ</p>  -->
                        <router-link id="AddPoint" to="/ticket/pluspoint">
                            <img id="img" src="@/assets/img/addPoint.png">
                            적립
                        </router-link>
                        <!--
                        <ModalView v-if="isModalViewed" @close-modal="isModalViewed = false">
                            <PaymentContentView></PaymentContentView>
                        </ModalView>
                        <button id="btnNo" @click="isModalViewed = true">사용</button>
                        -->
                        <router-link id="UsePoint" to="/ticket/pointuse">
                            <img id="img" src="@/assets/img/usePoint.png">
                            사용
                        </router-link>
                    </div>




                </div>

            </div>

            <AppFooter />

        </div>
    </div>
</template>


<script>
//import axios from 'axios';
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