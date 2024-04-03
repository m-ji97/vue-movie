<template>
    <div>
        <div id="wrap">

            <AppHeader />

            <div id="container" class="clearfix">

                <div id="content">




                    <div>
                        <div id="app">
                            <div id="input-container">
                                <div class="clearfix"></div>
                                <div id="point-title2">
                                    <h1>포인트적립</h1>
                                </div>
                                <div class="clearfix"></div>
                                <div id="point-box">
                                    <input id="hp-input" type="text" v-model="hp" placeholder="핸드폰 번호를 입력해 주세요">
                                    <div id="point-btn">
                                        <router-link id="search-btn" to="/ticket/endpoint">적립하기</router-link>
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
                            <router-link to="/ticket/choosepoint" id="return-button">돌아가기</router-link>
                        </div>
                    </div>





                </div>

            </div>

            <AppFooter />

        </div>
    </div>
</template>


<script>
import "@/assets/css/PlusPointView.css"
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
    name: "PlusPointView",
    components: {
        AppHeader,
        AppFooter,
    },
    data() {
        return {
            hp:"",
            dataInput:"",
        };
    },
    methods: {
        numberPlate(num) {
            if (this.hp.length < 11) {
                this.hp += num;
            } else if (this.dataInput.length < 8) {
                this.dataInput += num;
            }
        },
        deleteLastNum() {
            if (this.dataInput.length > 0) {
                this.dataInput=this.dataInput.slice(0, -1);
            } else if (this.hp.length > 0) {
                this.hp=this.hp.slice(0, -1);
            }
        },
        clearScreen() {
            this.hp="";
        },
    },
};
</script>


<style></style>