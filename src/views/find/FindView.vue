<template>
    <div>
        <div id="wrap">
            <AppHeader />
            <div id="app">
                <div class="content" v-if="reservationOnOff">

                    <ModalView v-if="isModalViewed"  :is-open="isModalViewed" :selected-movie="selectedMovie" @close-modal="isModalViewed = false">
                        <FindContentView v-bind:m_r_no="click_m_r_no"></FindContentView>
                    </ModalView>

                    <!-- 
                    <ModalView :is-open="isModalViewed" @close-modal="isModalViewed = false"
                        :selected-movie="selectedMovie">
                        <FindContentView></FindContentView>
                    </ModalView>
                    -->

                    <!-- 예매 내역 조회 창 -->
                    <form action="" method="" enctype="multipart/form-data">
                        <div class="m-body">
                            <div id="result">
                                <table id="result-table">
                                    <thead>
                                        <tr>
                                            <th>예약번호</th>
                                            <th>영화 제목</th>
                                            <th>상영일자</th>
                                            <th>상영시간</th>
                                            <th>상영관</th>
                                            <th>좌석번호</th>
                                            <th>영화가격</th>
                                            <th>구매자이름</th>
                                            <th>포인트</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-bind:key="i" v-for="(userVo, i) in reservationList"
                                            @click="openModal(userVo.m_r_no)">
                                            <!--@click="openModal(userVo)-->
                                            <td>{{ userVo.m_r_no }}</td>
                                            <td>{{ userVo.m_name }}</td>
                                            <td>{{ userVo.m_r_date }}</td>
                                            <td>15:00 ~ 17:14</td>
                                            <!--<td>{{ userVo.s_date }}</td>-->
                                            <td>1관</td>
                                            <td>D4 , D5</td>
                                            <!--<td>{{ userVo.m_s_no }}</td>-->
                                            <td>{{ userVo.m_price }}</td>
                                            <td>{{ userVo.user_name }}</td>
                                            <td>{{ userVo.user_point }} </td>
                                            <!-- <td @click="openModal(userVo)">{{ userVo.m_r_no }}</td>
                                            <td @click="openModal(userVo)">{{ userVo.m_name }}</td>
                                            <td @click="openModal(userVo)">{{ userVo.m_r_date }}</td>
                                            <td @click="openModal(userVo)">{{ userVo.s_date }}</td>
                                            <td @click="openModal(userVo)">1관</td>
                                            <td @click="openModal(userVo)">{{ userVo.m_s_no }}</td>
                                            <td @click="openModal(userVo)">{{ userVo.m_price }}</td>
                                            <td @click="openModal(userVo)">{{ userVo.user_name }}</td>
                                            <td @click="openModal(userVo)">{{ userVo.user_point }}</td> -->
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </form>
                </div>
                <!-- //isModalViewed -->



                <div id="input-container">
                    <input type="text" v-model="phoneNumber" placeholder="01000000000">
                    <button id="search-button" @click="getList">핸드폰번호조회</button>

                </div>
                <div class="dial-container">
                    <div class="dial-button" @click="appendNumber(1)">1</div>
                    <div class="dial-button" @click="appendNumber(2)">2</div>
                    <div class="dial-button" @click="appendNumber(3)">3</div>
                    <br>
                    <div class="dial-button" @click="appendNumber(4)">4</div>
                    <div class="dial-button" @click="appendNumber(5)">5</div>
                    <div class="dial-button" @click="appendNumber(6)">6</div>
                    <br>
                    <div class="dial-button" @click="appendNumber(7)">7</div>
                    <div class="dial-button" @click="appendNumber(8)">8</div>
                    <div class="dial-button" @click="appendNumber(9)">9</div>
                    <br>
                    <div class="dial-button" @click="appendNumber(0)">0</div>
                    <div class="dial-button" @click="deleteLastDigit">지움</div>
                    <div class="dial-button" @click="clearPhoneNumberMethod">전체삭제</div>
                </div>
                <div>
                    <router-link to="/" id="return-button">돌아가기</router-link>
                </div>
            </div>
           
        </div>

    </div>




</template>

<script>
import "@/assets/css/FindView.css";
import AppHeader from "@/components/AppHeader.vue";

import FindContentView from "@/components/FindContentView.vue";
import ModalView from "@/components/ModalView.vue";
import axios from 'axios';

export default {
    name: "FindView",
    components: {
        AppHeader,
        FindContentView,
        ModalView,
    },
    data() {
        return {
            phoneNumber: '010',
            reservationList: [],
            reservationOnOff: false,
            
            click_m_r_no: "",  //리스트에서 선택한 예약번호


            
            isModalViewed: false,
           
        };


    },
    methods: {
        openModal(m_r_no) {
            console.log("모달");
            this.click_m_r_no = m_r_no;


            this.isModalViewed = true; // 모달 창을 열기 위해 true로 설정


           
           
        },

        openReservationList() {
            //this.isModalViewed = true;
            axios({
                method: 'get',
                url: 'http://localhost:9000/api/movie',
                params: { phoneNumber: this.phoneNumber },
                responseType: 'json'

            }).then(response => {
                console.log(response);
                console.log(response.data);
                this.reservationList = response.data.apiData;

            }).catch(error => {
                console.log(error);
            });
        },

        getList() {
            console.log("getList()");
            //this.isModalViewed = false;
            axios({
                method: 'get',
                url: 'http://localhost:9000/api/movie',
                params: { phoneNumber: this.phoneNumber },
                responseType: 'json'

            }).then(response => {
                console.log(response);
                console.log(response.data);
                this.reservationList = response.data.apiData;
                this.reservationOnOff = true;

            }).catch(error => {
                console.log(error);
            });

        },

        appendNumber(num) {
            if (this.phoneNumber.length < 11) {
                this.phoneNumber += num;
            }
        },

        deleteLastDigit() {
            if (this.phoneNumber.length > 0) {
                this.phoneNumber = this.phoneNumber.slice(0, -1);
            }
        },

        clearPhoneNumberMethod() {
            this.phoneNumber = '';
        },
    },
    created() {

        //this.getList(); // 핸드폰 번호 조회를 버튼 클릭 시에만 수행되도록 제거
    }
};
</script>