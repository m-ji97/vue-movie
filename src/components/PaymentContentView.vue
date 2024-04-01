<template>
  <div class="content">
    <!-- 이미지등록 팝업(모달)창 -->
    <form action="" method="" enctype="multipart/form-data">

        <div id="closeBtn" class="closeBtn">×</div>

        <div class="m-header">간단한 타이틀</div>
        
        <div class="m-body">


          

          <h1>결제 완료</h1>
          <p>결제가 성공적으로 완료되었습니다!</p>
          <p>음식메뉴: 팝콘 x 100</p>
          <p>예약 번호: ABC123</p> <!-- 여기에 예약 번호를 출력 -->
          



















        </div>

        <div class="m-footer">
          <div class="button-container">
              <a href="/" class="btn-home">홈으로 돌아가기</a>
          </div>
        </div>
        
    </form>
  </div>
</template>


<script>
import "@/assets/css/PaymentContentView.css";

export default {
    name: "ContentView",
    components: {},
    data() {
        return {
        
        };
    },
    methods: {

    },
    created() {
    }
};
</script>
