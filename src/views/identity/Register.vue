<template>
    <div id="container">
        <div id="menu">
            <!-- logo !! -->
            <router-link to="/home/">Home</router-link>
        </div>
        <div class="school">
            <div id="questions">
                <p style="text-align:left">소속된
                    <strong>대학교 또는 기관</strong>을 선택해주세요.</p>
                <b-form-select v-model="selected" :options="options"></b-form-select>
            </div>
        </div>

        <br>
            <div class="register">
                <div id="questions">소속된 기관 E-Mail</div>
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
                        <b-button variant="success">인증메일 전송</b-button>
                    </b-form>
                    </div>
                    <br>
                    <div id="id" line-height="11.6em">
                        <div>
                            <b-form @submit.stop.prevent align="left">
                                <label for="feedback-user">
                                    <strong>ID</strong>를 입력해주세요
                                </label>
                                <b-form-input v-model="userId" :state="validation" id="feedback-user"></b-form-input>
                                <b-form-invalid-feedback :state="validationid">
                                    <strong>4자에서 15자 사이</strong>로 입력해주세요 </b-form-invalid-feedback>
                                <b-form-valid-feedback :state="validationid">좋아요!</b-form-valid-feedback>
                            </b-form>
                        </div>
                    </div>
                    <br>
                    <div id="pw" line-height="11.6em">
                        <div>
                            <b-form @submit.stop.prevent align="left">
                                <label for="feedback-user">
                                    <strong>비밀번호</strong>를 입력해주세요</label>
                                <b-form-input v-model="userId" :state="validation" id="feedback-user"></b-form-input>
                                <b-form-invalid-feedback :state="validation">비밀번호는 <strong>5글자 이상</strong>으로 설정해주셔야 합니다</b-form-invalid-feedback>
                                <b-form-valid-feedback :state="validation">좋아요!</b-form-valid-feedback>
                            </b-form>
                            <br>
                            <b-form @submit.stop.prevent align="left">
                                <label for="feedback-user">
                                    <strong>비밀번호</strong>를 다시 입력해주세요
                                </label>
                                <b-form-input v-model="userId" :state="validation" id="feedback-user"></b-form-input>
                                <b-form-invalid-feedback :state="validation">동일한 비밀번호가 아닙니다</b-form-invalid-feedback>
                                <b-form-valid-feedback :state="validation">좋아요!</b-form-valid-feedback>
                            </b-form>
                        </div>
                    </div>
                </div>
                <div class="clause">
    <!-- <div id="questions" text-align="left" line-helight="100%"> 약관 </div> -->
    <br>
    <div id="clause-list">
        <p class="text-left">
            <b-form-checkbox
                id="checkbox-1"
                v-model="status"
                name="checkbox-1"
                value="accepted"
                unchecked-value="not_accepted">
                <div id="questions"><a href="google.com">서비스 이용약관</a> 동의 (필수)</div>
            </b-form-checkbox>
        </p>

        <p class="text-left">
            <b-form-checkbox
                id="checkbox-2"
                v-model="status"
                name="checkbox-2"
                value="accepted"
                unchecked-value="not_accepted">
                <div id="questions"><a href="google.com">개인정보처리방침</a> 동의 (필수)</div>
            </b-form-checkbox>
        </p>

        <p class="text-left">
            <b-form-checkbox
                id="checkbox-3"
                v-model="status"
                name="checkbox-3"
                value="accepted"
                unchecked-value="not_accepted">
                <div id="questions"><a href="google.com">커뮤니티 이용 방침</a> 동의 (필수)</div>
            </b-form-checkbox>
        </p>
    </div>
</div>
    <b-button variant="success">회원가입</b-button>
    <br><br>
    이미 계정이 있으신가요? <router-link to="/login/">로그인</router-link>
    </div>
</template>

<script>
    // @ is an alias to /src
    export default {
        data() {
            return {
                userId: '',
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
        computed: {
            validationid() {
                return this.userId.length > 4 && this.userId.length < 15
            },
            validation() {
                return this.userId.length > 5
            }
        }
    }
</script>

<style scoped="scoped">
    #container {
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
        /* font-size: 0; */
        background-color: #fff;
        display: block;
        color: #292929;
    }

    #questions {
        display: block;
        font-size: 15px;
        letter-spacing: -0.5px;
        font-family: sans-serif;
        text-align: left;
    }

    #clause {
        display: block;
        font-size: 15px;
        letter-spacing: -0.5px;
        font-family: sans-serif;
        text-align: left;
    }

    #clause-list {
        display: block;
        font-size: 12px;
        letter-spacing: -0.5px;
        font-family: sans-serif;
        text-align: left;
    }

    #schoolholder {
        padding: 8px;
        line-height: 24px;
        border: 1px solid #ededed;
        color: #292929;
        font-size: 16px;
        background-color: #f9f9f9;
        display: block;
        box-sizing: border-box;
        width: 100%;
        height: 40px;
        border-radius: 12px;
        font: 400 14px Arial;
    }

    #description {
        display: block;
        font-size: 12px;
        letter-spacing: -0.5px;
        font-family: sans-serif;
        text-align: left;
    }

    #emailholder {
        padding: 8px;
        line-height: 24px;
        border: 1px solid #ededed;
        color: #292929;
        font-size: 16px;
        background-color: #f9f9f9;
        display: block;
        box-sizing: border-box;
        width: 100%;
        height: 40px;
        border-radius: 12px;
        font: 400 14px Arial;
    }

    #sendemail {
        border: 0;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        background-color: #42b983;
        margin-top: 1px;
        display: block;
        box-sizing: border-box;
        width: 20%;
        height: 40px;
        border-radius: 12px;
        letter-spacing: -0.5px;
    }

    #signupsubmit {
        border: 0;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        background-color: #42b983;
        margin-top: 8px;
        display: block;
        box-sizing: border-box;
        width: 100%;
        height: 40px;
        border-radius: 12px;
        letter-spacing: -0.5px;
    }
</style>
