<template>
  <div>
    <div id="wrap">
      
      <AppHeader />

      <div id="container" class="clearfix">
        <!-- aside 없음 -->
        <div id="full-content" >
          <!-- content-head 없음 -->

          <div id="index">
            <div id="greetings" style="width: 1020px;">

              <div id="mPage-btn">
                <div id="btn_main">
                  <router-link to="/ticket/ticketform">
                    <img id="popcorn" src="@/assets/img/ticket.png">
                    <p font-weight=bold>영화예매</p></router-link>
                </div>
                <div id="btn_main">
                  <router-link to="/foodstore/foodform"><img id="popcorn" src="@/assets/img/popcorn.png">
                    <p font-weight=bold>매점구매</p></router-link>
                </div>
                <div id="btn_main">
                  <router-link to="/find/findform"><img id="receipt" src="@/assets/img/receipt.png">
                    <p font-weight=bold>예약조회</p></router-link>
                </div>
              </div>




            </div>
            <!-- //greetings -->
            <div class="clear"></div>
          </div>
          <!-- //index -->
        </div>
        <!-- //full-content -->
      </div>
      <!-- //container -->

      <AppFooter />
      <!-- //footer -->
    </div>
    <!-- //wrap -->
  </div>
</template>

<script>
import "@/assets/css/MainView.css"

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