<template>
    <div>
        <AppHeader />
            <div>
               <table class="mc">
                    <tr>
                        <td class="main_bt">티켓</td>
                        <td width="10"></td>
                        <td class="main_bt">매점</td>
                        <td width="10"></td>
                        <td class="main_bt">조회</td>
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