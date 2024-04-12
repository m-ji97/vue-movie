<template>
    <div>
        <div id="wrap">

            <AppHeader />

            <div id="container" class="clearfix">

                <div id="content">

                    <div id="paymentForm" action="" method="">
                        <h1>결제 수단 선택</h1>
                        <div class="price-info">
                            <p class="total-price">총 금액: {{ $store.state.totalPrice }}원</p>
                        </div>
                        <div class="payment-methods">
                            <ModalView v-if="isModalViewed" @close-modal="isModalViewed = false">
                                <PaymentContentView v-bind:f_r_no="f_r_no"></PaymentContentView>
                            </ModalView>



                            <div class="payment-method" @click="processPayment">
                                <img id="card" src="@/assets/img/card.png">카드 결제
                            </div>
                            <div class="payment-method" @click="processPayment">
                                <img id="cash" src="@/assets/img/cash.png">현금 결제
                            </div>
                        </div>
                        <input type="hidden" name="payment_method" id="paymentMethod">
                        <input type="submit" value="결제">
                    </div>
                    <div>
                    </div>

                </div>
                <!-- //content  -->

            </div>
            <!-- //container  -->
            <!-- //footer -->
        </div>
        <!-- //wrap -->
    </div>
</template>

<script>
import axios from 'axios';
import "@/assets/css/PaymentCheckView.css";
import AppHeader from "@/components/AppHeader.vue"
import ModalView from "@/components/ModalView.vue";
import PaymentContentView from '@/components/PaymentContentView.vue';

export default {
    name: "FoodstoreView",
    components: {
        AppHeader,
        ModalView,
        PaymentContentView
    },
    data() {
        return {
            isModalViewed: false,
            f_r_no: ""
        };
    },
    methods: {
        processPayment() {
            this.suc();

        },
        suc() {
            console.log("우웩");
            let pointVo = {
                orderItemList: this.$store.state.cartItems,
                phoneNumber: this.$store.state.phoneNumber,
                user_point: this.$store.state.totalPoint
            };

            console.log(pointVo);
            axios({
                method: 'post',
                url: 'http://localhost:9000/api/food/order',
                headers: { "Content-Type": "application/json; charset=utf-8" },
                data: pointVo,
                responseType: 'json'
            }).then(response => {
                console.log(response.data);
                this.f_r_no = response.data.apiData;

                //this.getList(f_r_no);
                this.isModalViewed = true;
            })
                .catch(error => {
                    console.error(error);
                });
        },

    }
};
</script>