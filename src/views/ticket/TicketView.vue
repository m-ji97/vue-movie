<template>
  <div>
    <div id="wrap">
      <AppHeader />

      <div id="container" class="clearfix">
        <div id="content">
          <div>
            <h1 id="m-title">영화 리스트</h1>
            <table>
              <thead id="mlist-head">
                <tr>
                  <th>제목</th>
                  <th>상영시간</th>
                </tr>
              </thead>
              <tbody v-bind:key="i" v-for="(movieVo, i) in mList" id="mlist-tbody">
                <tr>
                  <td id="mName" class="space2" rowspan="2">
                    <!-- 
                    <img
                      v-bind:src="`http://localhost:9000/upload/${movieVo.saveName}`"
                      id="img-movie"
                    />
                  -->
                  <img src="../../assets/img/파묘.jpg" id="img-movie" />
                    <img src="@/assets/img/12.svg" />
                      {{ movieVo.m_name }} + ({{ movieVo.m_no }})
                  </td>

                  <!-- 상영시간 for 문 -->
                  <td>
                    <div>
                      <div v-bind:key="i" v-for="(timeVo, i) in movieVo.tList" id="btn-ticketbox">
                        
                        {{ timeVo.s_date }}
                        <ModalView v-if="isModalViewed" @close-modal="isModalViewed = false">
                                <SeatContentView></SeatContentView>
                          </ModalView>
                        <button id="ticket-btn" @click="isModalViewed=true">예매하기</button>
                        
                      </div>
                    </div>
                  </td>
                  <!-- //상영시간 for 문 -->

                  
                </tr>
              </tbody>
            </table>
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
import "@/assets/css/TicketView.css";
import AppHeader from "@/components/AppHeader.vue";
import axios from "axios";
import ModalView from "@/components/ModalView.vue";
import SeatContentView from '@/components/SeatContentView.vue';

export default {
  name: "TicketView",
  components: {
    AppHeader,
    ModalView,
    SeatContentView
  },
  data() {
    return {
      isModalViewed: false,
      mList: [],
      tList: [],
      
      movieVo: {
        m_no: "",
        m_name: "",
        m_remarks: "",
        saveName: "",
      },
      timeVo: {
        s_s_no:"",
        s_m_no: "",
        s_s_date: "",
      },
      count: "",
      m_no: ""
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
          //console.log(response.data.apiData); //수신데이타
          this.mList = response.data.apiData;
          console.log(this.mList);
         
          
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