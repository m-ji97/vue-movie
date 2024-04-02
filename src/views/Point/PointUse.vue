<template>
    <div>
        <div id="wrap">

            <AppHeader/>

            <div id="container" class="clearfix">

                <div id="content">
                    <div>
                        <h1>포인트사용</h1>

                        <p>휴대폰번호 <input type="number" inputmode="numeric" class="input-number"/></p>
                        <p> 생년월일  <input type="number" inputmode="numeric" class="input-number-password"/></p>
                    
                    
                        <button id="n_button" style="width: 50px;">1</button>
                        <button id="n_button" style="width: 50px;">2</button>
                        <button id="n_button" style="width: 50px;">3</button>
                        <br>
                        <button id="n_button" style="width: 50px;">4</button>
                        <button id="n_button" style="width: 50px;">5</button>
                        <button id="n_button" style="width: 50px;">6</button>
                        <br>
                        <button id="n_button" style="width: 50px;">7</button>
                        <button id="n_button" style="width: 50px;">8</button>
                        <button id="n_button" style="width: 50px;">9</button>
                        <br>
                        <button id="n_button" style="width: 50px;">0</button>
                        <button id="n_button" style="width: 50px;">지움</button>
                        <button id="n_button" style="width: 50px;">ㅁ</button>
                    </div>

                </div>

            </div>

            <AppFooter/>

        </div>
    </div>
</template>


<script>
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';


export default {
    name: "PointUse",
    components: {
        AppHeader,
        AppFooter,
    },
    data() {
        return {};
    },
    methods: {},
};
</script>


<style></style>