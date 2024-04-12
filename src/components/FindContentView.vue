<template>
  <!-- <div class="modal" v-if="isOpen"> -->

  <div class="modal">


    <div class="modal-content">
      <!-- 

      <div class="modal-header">
          <span class="close" @click="closeModal">&times; fdsafdadfdafdafd</span>
      </div>
 -->

      <div class="modal-body">


        <div class="ticket">
          <div class="order-number">코난 영화관</div>

          <div class="info">
            <strong>{{ reservationList.m_name }}</strong>
          </div>

          <div class="infoList">
            {{ reservationList.m_r_date }} <br><br>
            15:00 ~ 17:14
          </div>

          <div class="infoList">
            <span>좌석번호 : D4 , D5</span>
            <!-- 상영관 정보를 받아와야 함 -->
            <!--<span>좌석번호 : {{ reservationList.m_s_no }}</span>-->
          </div>

          <div class="info">
            [결제 내역]
          </div>

          <div class="infoList">
            <span>영화가격 : {{ reservationList.m_price }}원</span>
          </div>

          <div class="point">
            <span>{{ reservationList.user_name }} 님!</span><br>

            <!-- 사용 가능 포인트 정보를 받아와야 함 -->
            <span>사용 가능 포인트: {{ reservationList.user_point }} P</span>
          </div>

          <!-- 바코드 이미지 추가 -->
          <img src="../assets/qrimages.png" alt="바코드" class="barcode">
        </div>

        <div>
          <router-link to="/" id="return-button">돌아가기</router-link>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';


export default {
  props: {
    m_r_no: Number,

    isOpen: {
      type: Boolean,
      required: true
    },

    selectedMovie: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      reservationList: {} // 예약 정보를 저장할 객체
    };
  },

  methods: {
    getReservationMovie() {
      // 서버로부터 예약 정보를 가져오는 메서드
      console.log("=======================");
      console.log(this.m_r_no);

      //통신
      axios({
        method: 'get',
        url: 'http://localhost:9000/api/moviebyno',
        params: { m_r_no: this.m_r_no },
        responseType: 'json'

      }).then(response => {
        console.log(response);
        console.log(response.data);
        this.reservationList = response.data.apiData;// 예약 정보를 저장
        console.log(this.reservationListreservationList);


      }).catch(error => {
        console.log(error);
      });

    },

    closeModal() {
      // 모달 닫기 이벤트를 부모 컴포넌트로 emit
      this.$emit('close-modal');
    }

  },
  computed: {
    barcodeImage() {
      // 선택된 영화의 바코드 이미지 URL 반환
      return this.selectedMovie.barcodeImage || ''; // 바코드 이미지 URL이 없으면 빈 문자열 반환
    }
  },
  created() {
    this.getReservationMovie();
  }
};
</script>