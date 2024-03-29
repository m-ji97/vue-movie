<template>
    <div>
        <AppHeader />
            <div>
               <table>
                    <tr>
                        <td>티켓</td>
                        <br>
                        <td>매점</td>
                        <br>
                        <td>조회</td>
                    </tr>
               </table> 
                <br><br><br><br><br><br><br><br><br>
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