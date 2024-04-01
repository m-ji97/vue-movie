<template>
    <div>
        <div id="wrap">

            <AppHeader />

            <div id="container" class="clearfix">

                <div id="content">

                  


                    <h1>결제하시겠습니까?</h1>

                    <div id="paymentForm" action="" method="">
                        <div class="price-info">
                            <p>티켓 예매 가격: 15,000원</p>
                            <p>매점 가격: 10,000원</p>
                            <p class="total-price">총 금액: 25,000원</p>
                        </div>
                        <div class="payment-methods">
                            <ModalView v-if="isModalViewed" @close-modal="isModalViewed = false">
                                <PaymentContentView></PaymentContentView>
                            </ModalView>
                            <div class="payment-method" @click="isModalViewed = true" style="background-color: #ff4d4d; color: white;">카드 결제</div>
                            <div class="payment-method" @click="isModalViewed = true" style="background-color: #ff4d4d; color: white;">현금 결제</div>
                            <div class="payment-method" @click="isModalViewed = true" style="background-color: #ff4d4d; color: white;">포인트 결제</div>
                            <router-link to="/foodstore/foodform" class="payment-method" style="background-color: #ff4d4d; color: white;" >음식메뉴보기</router-link>
                            <router-link to="/ticket/ticketform" class="payment-method" style="background-color: #ff4d4d; color: white;" >영화메뉴보기</router-link>
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


            <AppFooter />
<!-- //footer -->
</div>
<!-- //wrap -->
    </div>
</template>

<script>
import "@/assets/css/PaymentCheckView.css";
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue"
import ModalView from "@/components/ModalView.vue";
import PaymentContentView from '@/components/PaymentContentView.vue';

export default {
    name: "FoodstoreView",
    components: {
        AppFooter,
        AppHeader,
        ModalView,
        PaymentContentView
    },
    data() {
        return {
            isModalViewed: false,
        };
    },
    computed: {
        

    },
    methods: {
        

    }
};
</script>