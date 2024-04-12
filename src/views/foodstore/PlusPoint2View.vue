<template>
    <div>
        <div id="wrap">

            <AppHeader />

            <div id="container" class="clearfix">

                <div id="content">
                    <div>
                        <div id="app">
                            <div id="input-container">
                                <div id="point-box">
                                    <input id="hp-input" type="text" v-model="phoneNumber"
                                        placeholder="핸드폰 번호를 입력해 주세요">
                                    <div id="point-btn">
                                        <button id="search-btn" @click="getPoint">적립하기</button>
                                    </div>
                                </div>
                            </div>

                            <div class="dial-container">
                                <div class="dial-button" @click="numberPlate(1)">1</div>
                                <div class="dial-button" @click="numberPlate(2)">2</div>
                                <div class="dial-button" @click="numberPlate(3)">3</div>
                                <br>
                                <div class="dial-button" @click="numberPlate(4)">4</div>
                                <div class="dial-button" @click="numberPlate(5)">5</div>
                                <div class="dial-button" @click="numberPlate(6)">6</div>
                                <br>
                                <div class="dial-button" @click="numberPlate(7)">7</div>
                                <div class="dial-button" @click="numberPlate(8)">8</div>
                                <div class="dial-button" @click="numberPlate(9)">9</div>
                                <br>
                                <div class="dial-button" @click="numberPlate(0)">0</div>
                                <div class="dial-button" @click="deleteLastNum">지움</div>
                                <div class="dial-button" @click="clearScreen">전체삭제</div>
                            </div>

                        </div>
                        <div id="return-btn">
                            <router-link to="/foodstore/choosepoint2" id="return-button">돌아가기</router-link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import axios from 'axios';
import "@/assets/css/PlusPoint2View.css"
import AppHeader from '@/components/AppHeader.vue';

export default {
    name: "PlusPoint2View",
    components: {
        AppHeader,
    },
    data() {
        return {
            phoneNumber: "010",
            dataInput: "",
            point: "",
            plusPoint: ""
        };
    },
    methods: {
        numberPlate(num) {
            if (this.phoneNumber.length < 11) {
                this.phoneNumber += num;
            } else if (this.dataInput.length < 8) {
                this.dataInput += num;
            }
        },
        deleteLastNum() {
            if (this.dataInput.length > 0) {
                this.dataInput = this.dataInput.slice(0, -1);
            } else if (this.phoneNumber.length > 0) {
                this.phoneNumber = this.phoneNumber.slice(0, -1);
            }
        },
        clearScreen() {
            this.phoneNumber = "";
        },
        getPoint() {
            axios({
                method: 'get',
                url: 'http://localhost:9000/api/food/point',
                params: {
                    phoneNumber: this.phoneNumber
                },
                headers: { "Content-Type": "application/json; charset=utf-8" },
                responseType: 'json'
            }).then(response => {
                this.point = response.data.apiData;
                this.plusPoint = this.totalPrice * 0.05;
                this.$store.commit('setPoint', this.point);
                this.$store.commit('setPhoneNumber', this.phoneNumber);
                this.goToPayment();
            }).catch(error => {
                console.log(error);
            });
        },
        goToPayment() {
            this.$router.push({
                name: 'EndPoint2View'
            });
        },
    },
};
</script>
