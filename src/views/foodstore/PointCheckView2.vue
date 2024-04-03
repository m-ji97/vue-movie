<template>
    <div>
        <div id="wrap">

            <AppHeader />

            <div id="container" class="clearfix">

                <div id="content">




                    
                    <div id="paymentForm" action="" method="">
                        <h1>결제 수단 선택</h1>
                        <div class="price-info">
                            <p class="total-price">잔여포인트: {{ totalPrice }}원</p>
                            <p class="total-price">사용가능포인트: {{ totalPrice }}원</p>
                            <p class="total-price">사용포인트: {{ totalPrice }}원</p>
                            <p class="total-price">총 금액: {{ totalPrice }}원</p>
                        
                        </div>
                        <div class="payment-methods">
                            <ModalView v-if="isModalViewed" @close-modal="isModalViewed = false">
                                <PaymentContentView></PaymentContentView>
                            </ModalView>

                            
                            <div class="payment-method" @click="isModalViewed = true">
                                <img id="card" src="@/assets/img/card.png">카드 결제</div>
                            <div class="payment-method" @click="isModalViewed = true">
                                <img id="cash" src="@/assets/img/cash.png">현금 결제</div>
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
    name: "PointckeckView",
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
        totalPrice() {
            return this.$route.query.totalPrice;
        }

    },
    methods: {


    }
};
</script>