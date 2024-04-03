<template>
    <div>
      <div id="wrap">
        <AppHeader />
  
        <div id="container" class="clearfix">
          <div id="content">
  
  
  
  
  
  
  
  
  
  
  
  
              
  
  
  
            <h1 id="m-title">영화 리스트</h1>
            <table>
              <thead>
                <tr>
                  <th>번호</th>
                  <th>제목</th>
                  <th>상영시간</th>
                  <th>잔여석</th>
                </tr>
              </thead>
              <tbody v-bind:key="i" v-for="(movieVo, i) in mList">
                <tr>
                  <td id="mNo">{{ movieVo.mNo }}</td>
                  <td id="mName">
                    <img src="@/assets/img/코난.jpg" id="img-movie" />
                    <img src="@/assets/img/12.svg" />
                    {{ movieVo.mName }}
                  </td>
                  <td id="mTime">{{ movieVo.mTicketing }}</td>
                  <td id="mSeats">
                    <ModalView
                      v-if="isModalViewed"
                      @close-modal="isModalViewed = false"
                    >
                      <SeatContentView></SeatContentView>
                    </ModalView>
                    <button @click="isModalViewed = true">
                      {{ movieVo.mRemarks }}
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
  
            <div class="clearfix"></div>
            <div>
              <router-link to="/" id="return-button">돌아가기</router-link>
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
  import "@/assets/css/TicketView.css";
  import AppHeader from "@/components/AppHeader.vue";
  import AppFooter from "@/components/AppFooter.vue";
  import ModalView from "@/components/ModalView.vue";
  import SeatContentView from "@/components/SeatContentView.vue";
  import axios from "axios";
  
  export default {
    name: "TicketView",
    components: {
      AppFooter,
      AppHeader,
      ModalView,
      SeatContentView,
    },
    data() {
      return {
        isModalViewed: false,
        mList: [],
        movieVo: {
          mNo: "",
          mName: "",
          mTicketing: "",
          mRemarks: "",
        },
      };
    },
    computed: {},
    methods: {
      getList() {
        console.log("리스트 가져오기");
  
        axios({
          method: "get", // put, post, delete
          url: "http://localhost:9000/api/movie/list",
          headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
          //params: guestbookVo, //get방식 파라미터로 값이 전달
          //data: guestbookVo, //put, post, de    lete 방식 자동으로 JSON으로 변환 전달
  
          responseType: "json", //수신타입
        })
          .then((response) => {
            console.log(response.data); //수신데이타
  
            this.mList = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    created() {
      this.getList();
    },
  };
  </script>