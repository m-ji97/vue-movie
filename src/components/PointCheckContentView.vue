<template>
  <div class="content">
    <!-- 이미지등록 팝업(모달)창 -->
    <form action="" method="" enctype="multipart/form-data">

        <div id="closeBtn" class="closeBtn">×</div>

        <div class="m-header">예매 조회</div>
        
        <div class="m-body">



          <div id="result">
            <table id="result-table">
                <thead>
                    <tr>
                        <th>예약번호</th>
                        <th>영화 제목</th>
                        <th>상영일시</th>
                        <th>상영관</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{ reservationNumber }}</td>
                        <td>어벤져스: 엔드게임</td>
                        <td>2024년 1월 1일 18:00</td>
                        <td>1관</td>
                    </tr>
                    <!-- 기타 조회 결과 항목들 -->
                </tbody>
            </table>
        </div>

















        </div>

        <div class="m-footer">
          <div class="button-container">
              <router-link to="/" class="btn-home">홈으로 돌아가기</router-link>
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
