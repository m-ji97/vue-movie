<template>
    <div class="content">
      <!-- 이미지등록 팝업(모달)창 -->
      <form action="" method="" enctype="multipart/form-data">
  
          <div id="closeBtn" class="closeBtn">×</div>
  
          <div class="m-header"></div>
          
          <div class="m-body">

            <div id="yearolds">
                <img id="Age18" src="@/assets/img/18.png">세 이상 관람가<br>
                입장 시, 신분증을 반드시 지참해주세요!<br>
                만 18세 미만의 고객님은(영,유아 포함) 보호자를 동반하여도<br>
                관람이 불가하며, 만 18세 이상이라도<br>
                고등학교 재학중인 고객님은 관람이 불가합니다<br />
                        
                    <div class="payment-methods">
                        <ModalView v-if="isModalViewed" @close-modal="isModalViewed = false">
                            <TestView></TestView>
                        </ModalView>

                        <div id="agree" @click="isModalViewed = true">
                            확인</div>
                    </div>
                    <input type="hidden" name="payment_method" id="paymentMethod">
                    <input type="submit" value="결제">
                </div>
          </div>
          
      </form>
    </div>
  </template>
  
  
  <script>
  import "@/assets/css/PointUseView.css";
  import ModalView from "@/components/ModalView.vue";
  import TestView from '@/components/TestView.vue';
  
  
  export default {
      name: "PointUseView",
      components: {
        ModalView,
        TestView
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