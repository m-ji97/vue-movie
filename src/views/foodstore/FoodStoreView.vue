<template>
    <div>
        <div id="wrap">

            <AppHeader />

            <div id="container" class="clearfix">

                <div id="content">
                    <div id="foodmenu">
                        <div id="list">
                            <div class="clear"></div>
                            
                            <ul id="viewArea">

                                <li>
                                    <div class="view" >
                                        
                                    <p>팝콘</p>
                                    <img class="imgItem" src="#">
                                        <div class="imgWriter">이름: 
                                            <strong>1000 원</strong>
                                            <span> (1042 개)</span>
                                        </div>

                                    </div>
                                </li>

                                <li>
                                    <div class="view" >
                                        
                                    <p>음료</p>
                                    <img class="imgItem" src="#">
                                        <div class="imgWriter">이름: 
                                            <strong>2000 원</strong>
                                            <span> (50 개)</span>
                                        </div>

                                    </div>
                                </li>
                                <li>
                                    <div class="view" >
                                        
                                    <p>음료</p>
                                    <img class="imgItem" src="#">
                                        <div class="imgWriter">이름: 
                                            <strong>2000 원</strong>
                                            <span> (50 개)</span>
                                        </div>

                                    </div>
                                </li>
                                <li>
                                    <div class="view" >
                                        
                                    <p>음료</p>
                                    <img class="imgItem" src="#">
                                        <div class="imgWriter">이름: 
                                            <strong>2000 원</strong>
                                            <span> (50 개)</span>
                                        </div>

                                    </div>
                                </li>
                                <li>
                                    <div class="view" >
                                        
                                    <p>음료</p>
                                    <img class="imgItem" src="#">
                                        <div class="imgWriter">이름: 
                                            <strong>2000 원</strong>
                                            <span> (50 개)</span>
                                        </div>

                                    </div>
                                </li>
                                <li>
                                    <div class="view" >
                                        
                                    <p>음료</p>
                                    <img class="imgItem" src="#">
                                        <div class="imgWriter">이름: 
                                            <strong>2000 원</strong>
                                            <span> (50 개)</span>
                                        </div>

                                    </div>
                                </li>
                                
                            </ul>
                        </div>
                        

                      

                    </div>
                    
                    <div id="cart" class="cart">
                        <h2>장바구니</h2>
                        <div>
                            <p> (100000원) x 3</p>
                        </div>
                        <div class="cartLast">
                            <p>총 5개의 상품이 선택됨 <br> 총 가격: 2000원</p>
                        </div>
                        <div id="pay-btn">
                            <router-link to="/payment/paymentform" class="pay" >결제하기</router-link>
                        </div>
                    </div>


                    <div id="clearfix"></div>
                    <div>
                        <router-link to="/" id="return-button" >돌아가기</router-link>
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
        };
    },
    computed: {
        

    },
    methods: {
        

    }
};
</script>