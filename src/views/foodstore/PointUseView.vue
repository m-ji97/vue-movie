<template>
    <div>
        <div id="wrap">

            <AppHeader />

            <div id="container" class="clearfix">

                <div id="content">

                    

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
import "@/assets/css/PointUseView.css";
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue"



export default {
    name: "PointUseView",
    components: {
        AppFooter,
        AppHeader,
       
        
    },
    data() {
        return {
            isModalViewed: false,
        };
    },
    computed: {
        totalPrice() {
            return this.$route.query.totalPrice;
        }

    },
    methods: {


    }
};
</script>