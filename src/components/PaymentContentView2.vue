<template>
  <div class="content">
    <!-- 이미지등록 팝업(모달)창 -->
    <form action="" method="" enctype="multipart/form-data">
      <div class="m-body">
        <div class="ticket">
          <div v-if="recList.length > 0">
            <div class="order-number"> 주문 <br> 번호</div>
            <div class="number"> {{ recList[0].f_r_no }} </div>
            <div class="money">
              [결제 내역]<br>
            </div>
            <div v-for="item in recList" :key="item.f_p_no" class="moneyList">
              {{ item.f_name }} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ item.f_count }}개
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ item.f_count * item.f_price }}원
            </div>
            <div class="point">
              {{ recList[0].user_name }} 님!
              <br>
              사용 가능 포인트 {{ recList[0].user_point }} 점
            </div>
            <div class="barcode-wrapper">
              <img src="../assets/qrimages.png" class="barcode">
            </div>
            <div>
              <router-link to="/" id="return-button">돌아가기</router-link>
            </div>
          </div>
          <div v-else>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>




<script>
import axios from 'axios';
import "@/assets/css/PaymentContent2View.css";

export default {
  name: "PaymentContent2View",
  components: {},
  props: {
    f_r_no: Number
  },
  data() {
    return {
      recList: []
    };
  },
  methods: {
    //모달창 닫기 버튼(X) 클릭했을 때
    closePayModal() {
      console.log("클릭");
    },
    getList() {
      axios({
        method: 'get',
        url: 'http://localhost:9000/api/food/rec',
        headers: { "Content-Type": "application/json; charset=utf-8" },
        params: {
          f_r_no: this.f_r_no
        },
        responseType: 'json'
      }).then(response => {
        this.recList = response.data.apiData;
        console.log(this.recList);
      }).catch(error => {
        console.log(error);
      });
    }

  },
  created() {
    console.log("------------------------");
    console.log(this.f_r_no);

    this.getList();
  }
};
</script>
