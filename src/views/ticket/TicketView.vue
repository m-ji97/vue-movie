<template>
    <div>
        <div id="wrap">

            <AppHeader />

            <div id="container" class="clearfix">

                <div id="content">

                   


                    <h1 id="m-title">영화 리스트</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>제목</th>
                                <th>상영시간</th>
                                <th>잔여석</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowspan="3">1</td>
                                <td class="title" rowspan="3"><img src="https://search.pstatic.net/common?type=o&size=176x264&quality=85&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20240222_175%2F1708609058134r4oaq_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2">파묘</td>
                                <td>09:30~11:45</td>
                                <td>
                                    <ModalView v-if="isModalViewed" @close-modal="isModalViewed = false">
                                        <SeatContentView></SeatContentView>
                                    </ModalView>
                                    <button @click="isModalViewed = true">29/40</button>
                                </td>
                            </tr>
                            <tr>
                                <td>13:05~15:20</td>
                                <td>
                                    <ModalView v-if="isModalViewed" @close-modal="isModalViewed = false">
                                        <SeatContentView></SeatContentView>
                                    </ModalView>
                                    <button @click="isModalViewed = true">13/40</button>
                                </td>
                            </tr>
                            <tr>
                                <td>23:00~25:15</td>
                                <td>
                                    <ModalView v-if="isModalViewed" @close-modal="isModalViewed = false">
                                        <SeatContentView></SeatContentView>
                                    </ModalView>
                                    <button @click="isModalViewed = true">08/40</button>
                                </td>
                            </tr>

                            <tr>
                                <td rowspan="3">2</td>
                                <td class="title" rowspan="3"><img id="img-movie" src="https://search.pstatic.net/common?type=o&size=176x264&quality=85&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20240327_285%2F1711521875538PWaOx_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2">댓글부대</td>
                                <td>12:20~14:19</td>
                                <td>
                                    <ModalView v-if="isModalViewed" @close-modal="isModalViewed = false">
                                        <SeatContentView></SeatContentView>
                                    </ModalView>
                                    <button @click="isModalViewed = true">38/40</button>
                                </td>
                            </tr>
                            <tr>
                                <td>17:00~18:59</td>
                                <td>
                                    <ModalView v-if="isModalViewed" @close-modal="isModalViewed = false">
                                        <SeatContentView></SeatContentView>
                                    </ModalView>
                                    <button @click="isModalViewed = true">26/40</button>
                                </td>
                            </tr>
                            <tr>
                                <td>24:00~25:59</td>
                                <td>
                                    <ModalView v-if="isModalViewed" @close-modal="isModalViewed = false">
                                        <SeatContentView></SeatContentView>
                                    </ModalView>
                                    <button @click="isModalViewed = true">40/40</button>
                                </td>
                            </tr>

                            <tr>
                                <td rowspan="3">3</td>
                                <td class="title" rowspan="3"><img id="img-movie" src="https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_3246458%2F32464584735.20221019114947.jpg&type=w216">극장판 짱구는 못말려: 습격!! 외계인 덩덩이</td>
                                <td>07:50~09:50</td>
                                <td>
                                    <ModalView v-if="isModalViewed" @close-modal="isModalViewed = false">
                                        <SeatContentView></SeatContentView>
                                    </ModalView>
                                    <button @click="isModalViewed = true">18/20</button>
                                </td>
                            </tr>
                            <tr>
                                <td>10:10~12:10</td>
                                <td>
                                    <ModalView v-if="isModalViewed" @close-modal="isModalViewed = false">
                                        <SeatContentView></SeatContentView>
                                    </ModalView>
                                    <button @click="isModalViewed = true">10/20</button>
                                </td>
                            </tr>
                            <tr>
                                <td>14:35~16:35</td>
                                <td>
                                    <ModalView v-if="isModalViewed" @close-modal="isModalViewed = false">
                                        <SeatContentView></SeatContentView>
                                    </ModalView>
                                    <button @click="isModalViewed = true">01/20</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="clearfix"></div>
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
import "@/assets/css/TicketView.css";
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue"
import ModalView from "@/components/ModalView.vue";
import SeatContentView from "@/components/SeatContentView.vue";

export default {
    name: "TicketView",
    components: {
        AppFooter,
        AppHeader,
        ModalView,
        SeatContentView
    },
    data() {
        return {
            isModalViewed: false,
        };
    },
    computed: {
        

    },
    methods: {
        

    }
};
</script>