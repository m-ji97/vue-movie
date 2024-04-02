<template>
    <div>
        <div id="file">
            <form v-on:submit.prevent="uploadFile" action="" method="post" enctype="multipart/form-data">
                <table>
                    <tr>
                        <td class="text-left"><input v-on:change="selectFile" type="file" name="file"></td>
                        <td class="text-right"><button type="submit">파일업로드</button></td>
                    </tr>
                </table>
            </form>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
export default {
    name: "AttachView",
    components: {},
    data() {
        return {};
    },
    methods: { selectFile(event) {
            console.log("파일 선택");
            this.file = event.target.files[0];

            
        },
        uploadFile() {
            console.log("파일 업로드");

            //데이터 서버 전송용 전용 박스
            let formData = new FormData();
            formData.append("file", this.file); // ->data로 보낸다(json방식이 아님)

            axios({
                method: 'post', // put, get, delete                   
                url: 'http://localhost:9000/api/movie/attach',
                headers: {"Content-Type": "multipart/form-data"}, //전송타입
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                data: formData, //Json으로 보내는 거 아님

                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타
                console.log(response.data.apiData);
            }).catch(error => {
                console.log(error);
            });

        }
    },
    created() { }
};
</script>