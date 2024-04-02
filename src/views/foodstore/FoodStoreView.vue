<template>
    <div>
        <div id="wrap">
            <AppHeader />
            <div id="container" class="clearfix">
                <div id="content">
                    <div id="foodmenu">
                        <div id="list">
                            <div id="clearfix"></div>
                            <ul id="viewArea">
                                <li v-bind:key="i" v-for="(foodVo, i) in foodList" @click="selectItem(foodVo)">
                                    <div class="view">
                                        <img class="img" v-bind:src="`http://localhost:9000/upload/${foodVo.saveName}`">
                                        <div class="imgWriter">
                                            {{ foodVo.fName }}
                                            <br>
                                            <strong>{{ foodVo.fPrice }}원</strong>
                                            <span v-if="countSelected(foodVo) > 0"> ({{ countSelected(foodVo)
                                                }}개)</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div id="cart">
                        <h2>장바구니</h2>
                        <p v-for="(item, index) in cartItems" :key="index">{{ item.fName }} ({{ item.fPrice }}원) x
                            <button class="plusminus" @click="minusItem(item)">-</button>
                            {{ item.count }}
                            <button class="plusminus" @click="plusItem(item)">+</button>

                        </p>
                        <div class="cartLast">
                            <p>총 {{ getTotalItemsCount }}개의 상품이 선택됨 <br> 총 가격: {{ getTotalPrice }}원</p>
                            <button class="pay" @click="goToPayment">결제하기</button>
                        </div>
                    </div>



                    <div id="clearfix"></div>
                    
                    

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
import axios from 'axios';
import "@/assets/css/FoodStore.css";
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue"

export default {
    name: "FoodstoreView",
    components: {
        AppFooter,
        AppHeader,
    },
    data() {
        return {
            foodList: [],
            cartItems: []

        };
    },
    computed: {
        getTotalItemsCount() {
            let totalCount = 0;
            for (let i = 0; i < this.cartItems.length; i++) {
                totalCount += this.cartItems[i].count;
            }
            return totalCount;
        },
        getTotalPrice() {
            let totalPrice = 0;
            for (let i = 0; i < this.cartItems.length; i++) {
                totalPrice += this.cartItems[i].fPrice * this.cartItems[i].count;
            }
            return totalPrice;
        }

    },

    methods: {
        getList() {
            axios({
                method: 'get',
                url: 'http://localhost:9000/api/food/list',
                headers: { "Content-Type": "application/json; charset=utf-8" },

                responseType: 'json'
            }).then(response => {
                this.foodList = response.data.apiData;
                console.log(this.foodList);
            }).catch(error => {
                console.log(error);
            });
        },
        selectItem(food) {
            let found = false;
            for (let i = 0; i < this.cartItems.length; i++) {
                if (this.cartItems[i].fName == food.fName) {
                    this.cartItems[i].count++;
                    found = true;
                    break;
                }
            }
            if (!found) {
                this.cartItems.push({ ...food, count: 1 }); /* 먼 배열 추가 방식 */
            }
        },
        countSelected(food) {
            const selected = this.cartItems.find(cartItem => cartItem.fName == food.fName);
            /* cartItems 배열에서 fName이 food.fName과 동일한 첫 번째 요소 찾는 함수임 */
            return selected ? selected.count : 0; /* 참이면 앞에 값, 아니면 뒤에 0 반환 */
        },
        plusItem(item) {
            item.count++;
        },
        minusItem(item) {
            if (item.count > 0) {
                item.count--;
                if (item.count == 0) {
                    /* findIndex 상품의 fName이 item의 이름과 일치하는지 확인 */
                    const index = this.cartItems.findIndex(cartItem => cartItem.fName === item.fName);
                    if (index !== -1) { /* index = -1 > 상품이 없음 */
                        this.cartItems.splice(index, 1); /* 배열에서 1개 제거 함수 */
                    }
                }
            }
        },
        goToPayment() {
            this.$router.push({ name: 'PaymentCheckView',
            query: { totalPrice: this.getTotalPrice } })
            
        }
    },
    created() {
        this.getList();
    }
};
</script>