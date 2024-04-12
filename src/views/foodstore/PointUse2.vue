<template>
    <div>
        <div id="wrap">
            <AppHeader />
            <div id="app">
                <div id="input-container">
                    <div class="clearfix"></div>
                    <div id="pointInfo">
                        <div id="pointInput">
                            <div id="check-hp">
                                <input type="text" v-model="phoneNumber" >
                            </div>
                            <div id="birth">
                                <input type="text" v-model="dateInput" placeholder="YYYYMMDD">
                            </div>
                        </div>
                        <div id="check-btn">
                            <ModalView v-if="isModalViewed" @close-modal="isModalViewed = false">
                                <PointCheckContent2View></PointCheckContent2View>
                            </ModalView>
                            <button id="search-button02" @click="getPoint">포인트조회</button>
                        </div>
                    </div>
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
                    <router-link to="/foodstore/choosepoint2" id="return-button">돌아가기</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import "@/assets/css/PointUse2.css";
import AppHeader from "@/components/AppHeader.vue"
import ModalView from "@/components/ModalView.vue";
import PointCheckContent2View from "@/components/PointCheckContent2View.vue";

export default {
    name: "PointUse2",
    components: {
        AppHeader,
        ModalView,
        PointCheckContent2View,
    },
    data() {
        return {
            isModalViewed: false,
            phoneNumber: '010',
            dateInput: '',
            reservationNumber: '',
        };
    },
    methods: {
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
            this.dateInput = ''; // 휴대폰 번호를 초기화합니다.
        },
        getPoint() {
            this.isModalViewed = true
            axios({
                method: 'get',
                url: 'http://localhost:9000/api/food/point02',
                params: {
                    phoneNumber: this.phoneNumber,
                    birth: this.dateInput
                },
                headers: { "Content-Type": "application/json; charset=utf-8" },
                responseType: 'json'
            }).then(response => {
                this.point = response.data.apiData;

                const usePoint = this.point;
                this.$store.commit('setUsePoint', usePoint);
            }).catch(error => {
                console.log(error);
            });
        }
    },
    created() {
    }
};
</script>

<style></style>