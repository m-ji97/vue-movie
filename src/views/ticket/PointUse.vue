<template>
    <div>
        <div id="wrap">
            <AppHeader />
            <div id="app">
                <div id="input-container">
                    <div class="clearfix"></div>
                    <div id="point-title">
                        <h1>포인트사용</h1>
                    </div>
                    <div class="clearfix"></div>
                    <div id="pointInfo">
                        <div id="pointInput">
                            <div id="check-hp">
                                <input type="text" v-model="phoneNumber" placeholder="010-0000-0000">
                            </div>
                            <div id="birth">
                                <input type="text" v-model="dateInput" placeholder="YYYYMMDD">
                            </div>
                        </div>
                        <div id="check-btn">
                            <ModalView v-if="isModalViewed" @close-modal="isModalViewed = false">
                                <PointCheckContentView></PointCheckContentView>
                            </ModalView>
                            <button id="check-button" @click="isModalViewed=true">포인트조회</button>
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
                    <router-link to="/ticket/choosepoint" id="return-button">돌아가기</router-link>
                </div>
            </div>
            <AppFooter />
        </div>
    </div>
</template>

<script>
import "@/assets/css/PointUse.css";
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue"
import ModalView from "@/components/ModalView.vue";
import PointCheckContentView from "@/components/PointCheckContentView.vue";

export default {
    name: "PointUse",
    components: {
        AppHeader,
        AppFooter,
        ModalView,
        PointCheckContentView,
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
    },
    created() {
    }
};
</script>

<style></style>