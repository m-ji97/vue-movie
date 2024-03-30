<template>
    <div>
        <AppHeader />
            <div>
               <table class="mc">
                    <tr>
                        <td class="main_bt">
                            <img id="ticket" src="@/assets/img/ticket.png">
                            <p><br></p>
                            영화예매
                        </td>
                       
                        <td width="10"></td>
                        <td class="main_bt">
                            <img id="popcorn" src="@/assets/img/popcorn.png">
                            <p><br></p>
                            매점구매
                        </td>
                        <td width="10"></td>
                        <td class="main_bt">
                            <img id="receipt" src="@/assets/img/receipt.png">
                            <p><br></p>
                            예약조회
                        </td>
                    </tr>
               </table> 
            </div>
        <AppFooter />
    </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue"

export default {
    name: "MainView",
    components: {
        AppFooter,
        AppHeader
    },
    data() {
        return {};
    },
    methods: {},
    created(){}
};
</script>
<style></style>