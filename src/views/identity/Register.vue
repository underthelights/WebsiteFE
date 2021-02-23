<template>
    <div id="container">
        <div id="menu">
            <!-- logo !! -->
            <router-link to="/home/">Home</router-link>
        </div>
        <div class="school">
            <div id="clause">
                <p style="text-align:left">소속된
                    <strong>대학교 또는 기관</strong>을 선택해주세요.</p>
                <b-form-select v-model="selected" :options="options"></b-form-select>
            </div>
        </div>

        <br>
            <div class="register">
                <div id="clause">
                    <p style="text-align:left">
                        <strong>대학 또는 기관의 E-Mail</strong>을 입력해주세요. 확인 메일을 보내드립니다</p>
                </div>
                <div id="email">
                    <b-form inline="inline">
                        <label class="sr-only" for="inline-form-input-name">Username</label>
                        <b-form-input
                            id="inline-form-input-name"
                            class="mb-2 mr-sm-2 mb-sm-0"
                            placeholder="Username"></b-form-input>
                        <label class="sr-only" for="inline-form-input-username">Institute</label>
                        <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
                            <b-form-input id="inline-form-input-username" placeholder="Institute mail"></b-form-input>
                        </b-input-group>
                        <div id="clause">
                        <b-button @click="mail" variant="success">인증메일 전송</b-button></div>

                    </b-form>
                    </div>
                    <br>
                    <div id="id" line-height="11.6em">
                        <div>
                            <b-form @submit.stop.prevent align="left">
                                <div id="clause"><label for="feedback-user">
                                    사용하실 <strong>별명</strong>을 입력해주세요
                                </label></div>
                                <b-form-input v-model="userNick" :state="validationnick" id="feedback-user"></b-form-input>
                                <b-form-invalid-feedback :state="validationnick">
                                    <strong>15자 이내</strong>로 입력해주세요 </b-form-invalid-feedback>
                                <b-form-valid-feedback :state="validationnick">좋아요!</b-form-valid-feedback>
                            </b-form>
                        </div>
                    </div>
                    <br>
                    <div id="id" line-height="11.6em">
                        <div>
                            <b-form @submit.stop.prevent align="left">
                                <div id="clause"><label for="feedback-user">
                                    <strong>ID</strong>를 입력해주세요
                                </label></div>
                                <b-form-input v-model="userId" :state="validationid" id="feedback-user"></b-form-input>
                                <b-form-invalid-feedback :state="validationid">
                                    <strong>5자에서 15자 사이</strong>로 입력해주세요 </b-form-invalid-feedback>
                                <b-form-valid-feedback :state="validationid">좋아요!</b-form-valid-feedback>
                            </b-form>
                        </div>
                    </div>
                    <br>
                    <!-- <div id="pw" line-height="11.6em">
                        <b-form @submit.stop.prevent align="left">
                            <div id="clause"><label for="feedback-user"><strong>비밀번호</strong>를 입력해주세요</label></div>
                            <b-form-input v-model="userId_pw" :state="validationpw" id="feedback-user"></b-form-input>
                            <b-form-invalid-feedback :state="validationpw">비밀번호는 <strong>5글자 이상</strong>으로 설정해주셔야 합니다</b-form-invalid-feedback>
                            <b-form-valid-feedback :state="validationpw">좋아요!</b-form-valid-feedback>
                        </b-form>
                        <br>
                        <b-form @submit.stop.prevent align="left">
                            <div id="clause"><label for="feedback-user"><strong>비밀번호</strong>를 다시 입력해주세요</label></div>
                            <b-form-input v-model="userId_repw" :state="validationrepw" id="feedback-user"></b-form-input>
                            <b-form-invalid-feedback :state="validationrepw">동일한 비밀번호가 아닙니다</b-form-invalid-feedback>
                            <b-form-valid-feedback :state="validationrepw">좋아요!</b-form-valid-feedback>
                            </b-form>
                    </div> -->
                    <div id="pw" line-height="11.6em">
                        <div>
                            <b-form @submit.stop.prevent align="left">
                                <div id="clause"><label for="feedback-user">
                                    <strong>Password</strong>를 입력해주세요<!-- <strong>Password</strong>를 입력해주세요 -->
                                </label></div>
                            </b-form>
                            <b-form-group
                                id="fieldset-1"
                                label-for="input-1"
                                valid-feedback="좋아요!"
                                :invalid-feedback="invalidFeedback2"
                                :state="state"
                            >
                            <b-form-input id="input-1" v-model="userPw" :state="state" trim></b-form-input>
                            </b-form-group>
                        </div>
                        <div>
                            <b-form @submit.stop.prevent align="left">
                                <div id="clause"><label for="feedback-user">
                                    <strong>Password</strong>를 <strong>다시 정확하게</strong> 입력해주세요
                                </label></div>
                            </b-form>
                            <b-form-group
                                id="fieldset-1"
                                label-for="input-1"
                                valid-feedback="좋아요!"
                                :invalid-feedback="invalidFeedback"
                                :State="state2"
                            >
                            <b-form-input id="input-2" v-model="userrePw" :state="state2" trim></b-form-input>
                            </b-form-group>
                        </div>  
                        
                    </div>
                </div>
                
    <!-- <div id="clause" text-align="left" line-helight="100%"> 약관 </div> -->
        <br>
        <!-- termsofservice.vue create !!!! -->
        <div id="clause">
            <p class="text-left">
                <b-form-checkbox
                    id="checkbox-1"
                    v-model="status"
                    name="checkbox-1"
                    value="accepted"
                    unchecked-value="not_accepted">
                    <div id="clause"><a href="termsofservice">서비스 이용약관</a> 동의 (필수)</div>
                </b-form-checkbox>
            </p>

            <p class="text-left">
                <b-form-checkbox
                    id="checkbox-2"
                    v-model="status"
                    name="checkbox-2"
                    value="accepted"
                    unchecked-value="not_accepted">
                    <div id="clause"><a href="termsofservice">개인정보처리방침</a> 동의 (필수)</div>
                </b-form-checkbox>
            </p>

            <p class="text-left">
                <b-form-checkbox
                    id="checkbox-3"
                    v-model="status"
                    name="checkbox-3"
                    value="accepted"
                    unchecked-value="not_accepted">
                    <div id="clause"><a href="termsofservice">커뮤니티 이용 방침</a> 동의 (필수)</div>
                </b-form-checkbox>
            </p>
        </div>
            <div class="d-flex justify-content-center">
                <b-button @click="signup" variant="success" align-v="center">회원가입</b-button>
            </div>
            <br>
            <div class="d-flex justify-content-center">
                <div id="clause" text-align=center>이미 계정이 있으신가요? <router-link to="/login/">로그인</router-link></div>    
            </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    export default {
        data() {
            return {
                userPw:'',
                userId: '',
                userrePw: '',
                userNick: '',
                // userID_pw: '',
                // userID_repw: '',
                selected: null,
                options: [
                    {
                        value: null,
                        text: '소속 대학교 (기관)'
                    }, {
                        value: 'GIST',
                        text: 'GIST 광주과학기술원'
                    }, {
                        value: 'Hanyang U',
                        text: 'Hanyang U. 한양대학교'
                    }, {
                        value: 'KAIST',
                        text: 'KAIST 한국과학기술원'
                    }, {
                        value: 'SKKU',
                        text: 'SungKyunKwan U. 성균관대학교'
                    }, {
                        value: 'SNU',
                        text: 'Seoul National U. 서울대학교'
                    }, {
                        value: 'Sogang U',
                        text: 'Sogang U. 서강대학교'
                    }, {
                        value: 'UNIST',
                        text: 'UNIST 울산과학기술원'
                    }, {
                        value: 'd',
                        text: '다른 대학교/기관은 개발 중 입니다.',
                        disabled: true
                    }
                ]
            }
        },
        methods:{
            mail(){
                alert('귀하의 E-Mail로 확인 Mail을 전송하였습니다');
            },
            signup(){
                alert('회원가입을 완료합니다')
            }

        },
        computed: {
            validationnick() {
                return this.userNick.length <= 15 && this.userNick.length >=1
            },


            validationid() {
                return this.userId.length >= 5 && this.userId.length <= 15
            },
            // validationpw() {
            //     return this.userID_pw.length== 1
            //     // return this.userID_pw.length >= 5 && this.userID_pw.length <=10
            // },
            // validationrepw() {
            //     return this.userID_repw == 1
            // },
            state2() {
                return this.userPw == this.userrePw 
            },
            invalidFeedback2() {
                if (this.userrePw.length > 0) {
                  return '비밀번호는 5글자 이상으로 설정해주셔야 합니다'
                }
                return '입력해주세요'
            },
            state() {
                return this.userPw.length >= 5
            },
            invalidFeedback() {
                return '비밀번호를 알맞게 입력해주세요'
                 
                // if (this.userPw == this.userrePw) {
                //   return '비밀번호를 정확히 입력해주세요'
                // }
                // // return '입력해주세요'
                // if (this.userPw != this.userrePw) {
                    
                // }return 0
                // if (this.userPw.length == 0) {
                //     return '입력해주세요'
                // }  
                // if (this.userPw.length != 0) {
                //   return '비밀번호를 정확히 입력해주세요'
                // }
                // return '입력해주세요'
            }
        }
    }
</script>

<style scoped="scoped">
    #container {
        background-color: #eff3f6;
        border: 1px solid #ededed;
        border-radius: 12px;
        padding: 20px;
        position: relative;
        top: 10px;
        /* margin-left: 250px; margin-right: 250px; */
        margin: 24px auto;
        width: 600px;
        display: block;
    }
    #menu {
        margin-top: 14px;
        padding-left: 16px;
        width: 100%;
        height: 48px;
        box-sizing: border-box;
        text-align: center;
        /* font-size: 0; */
        background-color: #eff3f6;
        display: block;
        color: #292929;
    }
    #clause {
        display: block;
        font-size: 15px;
        letter-spacing: -0.5px;
        font-family: sans-serif;
        text-align: left;
    }
</style>
