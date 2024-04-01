<template>
  <div class="content">


        <div id="closeBtn" class="closeBtn">×</div>

        <div class="m-header">좌석 선택</div>
        
        <div class="m-body">





          <div>
              <div class="seats-container">
                  <div class="screen">□ Screen</div>
                  <div class="seat-group" v-for="(group, index) in seatGroups" :key="index">
                      <div class="seat-group-label">{{ String.fromCharCode(65 + index) }}</div>
                      <div class="seat" v-for="seat in group" :key="seat.id" :class="{ 'selected': seat.selected }"
                          @click="toggleSeatSelection(seat)">
                          <div class="seat-content">
                              <span class="seat-number">{{ seat.number }}</span>
                              <span class="check-mark" v-if="seat.selected">&#10003;</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>




















        </div>

        <div class="m-footer">
            <router-link id="seatpay-btn" to="/payment/paymentform">결제</router-link>
        </div>
        
  </div>
</template>


<script>
import "@/assets/css/SeatContentView.css";

export default {
    name: "ContentView",
    components: {},
    data() {
        return {
          seats: [
                { id: "A-1", number: 1, selected: false },
                { id: "A-2", number: 2, selected: false },
                { id: "A-3", number: 3, selected: false },
                { id: "A-4", number: 4, selected: false },
                { id: "A-5", number: 5, selected: false },
                { id: "A-6", number: 6, selected: false },
                { id: "A-7", number: 7, selected: false },
                { id: "A-8", number: 8, selected: false },
                { id: "B-1", number: 1, selected: false },
                { id: "B-2", number: 2, selected: false },
                { id: "B-3", number: 3, selected: false },
                { id: "B-4", number: 4, selected: false },
                { id: "B-5", number: 5, selected: false },
                { id: "B-6", number: 6, selected: false },
                { id: "B-7", number: 7, selected: false },
                { id: "B-8", number: 8, selected: false },
                { id: "C-1", number: 1, selected: false },
                { id: "C-2", number: 2, selected: false },
                { id: "C-3", number: 3, selected: false },
                { id: "C-4", number: 4, selected: false },
                { id: "C-5", number: 5, selected: false },
                { id: "C-6", number: 6, selected: false },
                { id: "C-7", number: 7, selected: false },
                { id: "C-8", number: 8, selected: false },
                { id: "D-1", number: 1, selected: false },
                { id: "D-2", number: 2, selected: false },
                { id: "D-3", number: 3, selected: false },
                { id: "D-4", number: 4, selected: false },
                { id: "D-5", number: 5, selected: false },
                { id: "D-6", number: 6, selected: false },
                { id: "D-7", number: 7, selected: false },
                { id: "D-8", number: 8, selected: false }
            ]

        };
    },
    computed: {
        seatGroups() {
            const groups = [];
            const seatsPerGroup = 8;
            for (let i = 0; i < this.seats.length; i += seatsPerGroup) {
                groups.push(this.seats.slice(i, i + seatsPerGroup));
            }
            return groups;
        }
    },

    methods: {
      toggleSeatSelection(seat) {
            seat.selected = !seat.selected;
        }

    },
    created() {
    }
};
</script>
