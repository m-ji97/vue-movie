<template>
    <div class="content">
        <div id="closeBtn" class="closeBtn">×</div>
        <div class="main">
            <div class="infoTextBox">
                <div class="m-header">
                    <h4>인원 선택</h4>
                </div>
                <div class="person">
                    <div class="adult">
                        성인
                        <button class="plusminus" @click="minusAdult()">-</button>
                        {{ adultCount }}
                        <button class="plusminus" @click="plusAdult()">+</button>
                    </div>
                    <div class="youth">
                        청소년
                        <button class="plusminus" @click="minusYouth()">-</button>
                        {{ youthCount }}
                        <button class="plusminus" @click="plusYouth()">+</button>
                    </div>
                </div>
                <br>
                <div class="m-header">
                    <h4>좌석 선택</h4>
                </div>
            </div>
            <div class="m-body">
                <div class="seats-content">
                    <div class="seats-container">
                        <div class="screen">□ Screen</div>
                        <div class="seat-group" v-for="(group, index) in seatGroups" :key="index">
                            <div class="seat-group-label">{{ String.fromCharCode(65 + index) }}</div>
                            <div class="seat" v-for="seat in group" :key="seat.id"
                                :class="{ 'selected': seat.selected }" @click="toggleSeatSelection(seat)">
                                <div class="seat-content">
                                    <span class="seat-number">{{ seat.number }}</span>
                                    <span class="check-mark" v-if="seat.selected">&#10003;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="right-section">
                        <div class="m-footer">
                            <p>성인 {{ adultCount }}명 {{ adultCount * 15000 }}원</p>
                            <p>청소년 {{ youthCount }}명 {{ youthCount * 10000 }}원</p>
                            <p>최종 결제 금액: {{ adultCount * 15000 + youthCount * 10000 }}원</p>
                            <br><br>
                            <router-link id="seatpay-btn" to="/ticket/choosepoint"
                                :disabled="!seatSelect">결제</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    </div>
</template>

<script>
import "@/assets/css/SeatContentView.css";

export default {
    name: "SeatContentView",
    data() {
        return {
            adultCount: 0,
            youthCount: 0,
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
                groups.push(this.seats.slice(i, i + seatsPerGroup)); /* 배열을 새롭게 만들어 추가 */
            }
            return groups;
        },
        selectedSeatCount() { /* 좌석 선택 갯수 확인 */
            return this.seats.filter(seat => seat.selected).length;
        },
        totalPersonCount() {
            return this.adultCount + this.youthCount;
        },
        seatSelect() { /* 좌석 선택 여부 */
            return this.selectedSeatCount <= this.totalPersonCount;
        }
    },
    methods: {
        toggleSeatSelection(seat) {
            if (!seat.selected && this.selectedSeatCount < this.totalPersonCount) {
                seat.selected = true;
            } else if (seat.selected) {
                seat.selected = false;
            }
        },
        plusAdult() {
            this.adultCount++;
        },
        minusAdult() {
            if (this.adultCount > 0) {
                this.adultCount--;
            }
        },
        plusYouth() {
            this.youthCount++;
        },
        minusYouth() {
            if (this.youthCount > 0) {
                this.youthCount--;
            }
        }
    }
}
</script>