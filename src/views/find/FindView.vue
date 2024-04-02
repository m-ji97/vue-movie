<template>
    <div>
        <div id="wrap">
            <AppHeader />
            <div id="app">
                <div id="input-container">
                    <input type="text" v-model="phoneNumber" placeholder="010-0000-0000">
                    <!--
                <input type="text" v-model="dateInput" placeholder="YYYYMMDD">
            -->
                    <ModalView v-if="isModalViewed" @close-modal="isModalViewed = false">
                        <FindContentView></FindContentView>
                    </ModalView>
                    <button id="search-button" @click="isModalViewed=true">핸드폰번호조회</button>
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
            <AppFooter />
        </div>
    </div>
</template>

<script>
import "@/assets/css/FindView.css";
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue"
import ModalView from "@/components/ModalView.vue";
import FindContentView from "@/components/FindContentView.vue";
import axios from 'axios';

export default {
    name: "FindView",
    components: {
        AppHeader,
        AppFooter,
        ModalView,
        FindContentView,
    },
    data() {
        return {
            isModalViewed: false,
            phoneNumber: '',
            dateInput: '',
            reservationNumber: '',
        };
    },
    methods: {
        getList() {
            console.log("데이터 가져오기");

            axios({
                method: 'get', // put, post, delete                   
                url: 'http://localhost:9000/api/movie',
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                //data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타

            }).catch(error => {
                console.log(error);
            });
        },
        appendNumber(num) {
            if (this.phoneNumber.length < 11) {
                this.phoneNumber += num;
            } else if (this.dateInput.length < 8) {
                this.dateInput += num;
            }
        },
        deleteLastDigit() {
            if (this.dateInput.length > 0) {
                this.dateInput = this.dateInput.slice(0, -1);
            } else if (this.phoneNumber.length > 0) {
                this.phoneNumber = this.phoneNumber.slice(0, -1);
            }
        },
        clearPhoneNumberMethod() {
            this.phoneNumber = ''; // 휴대폰 번호를 초기화합니다.
        },
    },
    created() {
        // 컴포넌트가 생성될 때 데이터를 가져오도록 설정
        this.getList();
    }
};
</script>

<style></style>