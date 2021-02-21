<template>
  <div id="arpmain">
    <div id="nav">
      <div id="container">
        <div id="menu">
          <!-- logo !! -->
            <router-link to="/home/">Home</router-link>
        </div>
        <div class="school">
            <div id="questions">
                <p>소속 대학/기관</p>
            </div>
            <div>
                <b-form-select v-model="selected" :options="options"></b-form-select>
                <!-- <b-form-select v-model="selected" :options="options" size="sm" class="mt-3"></b-form-select> -->
                <!-- <div class="mt-3"><strong>{{ selected }}</strong>를 선택하셨습니다.</div> -->
            </div>
        </div>
        <br>
        <div class="clause">
            <!-- <b-form-checkbox
                id="checkbox-all"
                v-model="status"
                name="checkbox-all"
                value="checkbox-1"
                unchecked-value="not_accepted"
                >
                <div id="questions">아래 약관에 모두 동의합니다.</div>
            </b-form-checkbox> -->

            <div id="questions" text-align="left" line-helight="100%"> 약관 </div> 

            <div id="clause-list">

                <p class="text-left">            
                    <b-form-checkbox
                        id="checkbox-1"
                        v-model="status"
                        name="checkbox-1"
                        value="accepted"
                        unchecked-value="not_accepted"
                        ><div id="questions">서비스 이용약관 동의 (필수)</div>
                    </b-form-checkbox>
                </p>
                
                <p class="text-left">            
                    <b-form-checkbox
                        id="checkbox-2"
                        v-model="status"
                        name="checkbox-2"
                        value="accepted"
                        unchecked-value="not_accepted"
                        ><div id="questions">개인정보처리방침 동의 (필수)</div>
                    </b-form-checkbox>
                </p>

                <p class="text-left">            
                    <b-form-checkbox
                        id="checkbox-3"
                        v-model="status"
                        name="checkbox-3"
                        value="accepted"
                        unchecked-value="not_accepted"
                        >
                        <div id="questions">커뮤니티 이용 방침 동의 (필수)</div>
                    </b-form-checkbox>
                </p>
            </div>
        </div>
        <br>
        <div class="register">
            <div id="questions">학교/기관 메일</div>
            <div id="email">
                <b-form inline>
                    <label class="sr-only" for="inline-form-input-name">Username</label>
                    <b-form-input id="inline-form-input-name" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Username"></b-form-input>
                    <label class="sr-only" for="inline-form-input-username">Institute</label>
                    <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
                    <b-form-input id="inline-form-input-username" placeholder="Institute mail"></b-form-input>
                    </b-input-group>
                    <input id="sendemail" type="submit" value="인증메일 전송" >

                    <!-- <b-button variant="primary">인증메일 전송</b-button> 
                    v-on:click"sendemail"-->
                </b-form>
                <!-- <input id="emailholder" type="email" name="email" placeholder="학교 및 기관의 이메일 주소를 입력해주세요" autocomplete="off"> -->
            </div>
            <br>
            <div id="questions">Password</div>
            <div id="pw" line-height="11.6em">
                <input id="emailholder" type="pw" name="pw" placeholder="비밀번호를 입력해주세요" autocomplete="off">
                <input id="emailholder" type="pw-chk" name="pw-chk" placeholder="비밀번호를 다시 입력해주세요" autocomplete="off">
            </div>
             
        </div>

        <div class="">
            <input id="signupsubmit" type="submit" value="회원 가입">
        </div>

        <br>
        이미 계정이 있으신가요? 로그인 
        
        <router-view/>
      </div>
    </div>
    
  </div>
</template>


<script>
// @ is an alias to /src
export default {
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: '소속 대학/기관을 선택해주세요' },
          { value: 'GIST', text: 'GIST 광주과학기술원' },
          { value: 'Hanyang U', text: 'Hanyang U. 한양대학교' },
          { value: 'KAIST', text: 'KAIST 한국과학기술원' },
          { value: 'SKKU', text: 'SungKyunKwan U. 성균관대학교' },
          { value: 'SNU', text: 'Seoul National U. 서울대학교' },
          { value: 'Sogang U', text: 'Sogang U. 서강대학교' },
          { value: 'UNIST', text: 'UNIST 울산과학기술원' },   
          { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: '다른 대학교/기관은 개발 중 입니다.', disabled: true }
        ]
      }
    }
  }
</script>

<style scoped>

#arpmain {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#container {

  border: 1px solid #ededed;
  border-radius: 12px;
  padding: 20px;
  position: relative;
  top:10px;

  /* margin-left: 250px;
  margin-right: 250px; */
  margin: 24px auto;
  width: 780px;
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

#questions{
  display: block;
  font-size: 15px;
  letter-spacing: -0.5px;
  font-family: sans-serif;
  text-align: left;
}

#clause{
  display: block;
  font-size: 15px;
  letter-spacing: -0.5px;
  font-family: sans-serif;
  text-align: left;
}

#clause-list{
  display: block;
  font-size: 12px;
  letter-spacing: -0.5px;
  font-family: sans-serif;
  text-align: left;
}

#schoolholder{
  padding:8px;
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

#description{
  display: block;
  font-size: 12px;
  letter-spacing: -0.5px;
  font-family: sans-serif;
  text-align: left;
}

#emailholder{
  padding:8px;
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
  background-color:  #42b983;
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
  background-color:  #42b983;
  margin-top: 8px;
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  border-radius: 12px;
  letter-spacing: -0.5px;  
}

</style>
