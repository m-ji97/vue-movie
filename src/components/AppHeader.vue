<template>
    <div>
        <div id="header" class="clearfix">
            
            <router-link to="/">
                <img id="logo" src="@/assets/img/conan.png" alt="conan" width="150px" />
            </router-link>
            
        </div>
        <!-- //header -->
        <nav id="nav">
            <router-link to="/main/main">
                <img id="home" src="@/assets/img/home_bt.png" alt="home" width="50px" />
            </router-link>
        </nav>
    </div> 
</template>
<script>
import '@/assets/css/AppHeader.css'

export default {
    name: "AppHeader",
    components: {},
    data() {
        return {};
    },
    methods: {
    },
    created() { }
};
</script>