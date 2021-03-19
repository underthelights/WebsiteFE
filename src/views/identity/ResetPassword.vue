// 이메일로 인증번호를 받고 비밀번호를 변경하는 page
/<template lang="">
    <div id="create-post-container">
        <NavBar/>
        <div id="container" class="container shadow-lg">
            <div id="post-container">
                <h1 id="title"><strong>새로운 비밀번호 설정</strong></h1>
        <span style="text-align : center; margin-top:80px; font-size:20px" >계정의 새로운 비밀번호를 설정하세요. 비밀번호를 초기화하면 <br><strong>기존의 비밀번호는 사용할 수 없게 됩니다.</strong></span>
        <div id="bigbox">
                
            
            
                <div id="newpassword" class="mb-3">
                    <b-form-group
                    id="fieldset-1"
                    valid-feedback="유효한 비밀번호입니다."
                    :invalid-feedback="invalidFeedback"
                    :state="state"
                    >
                    <label for="passwordinput"><strong>새로운 비밀번호</strong>를 입력해 주세요.</label>
                    <b-form-input id="passwordinput" value="kk" lazy-formattertype="password" v-model="passwordin" :state="state" trim></b-form-input>
                    
                    </b-form-group>
                </div>
                <div id="newpasswordcheck" class="mb-3">
                    <b-form-group
                    id="fieldset-1"
                    valid-feedback="비밀번호가 일치합니다."
                    :invalid-feedback="invalidFeedback2"
                    :state="state2"
                    >
                    <label for="passwordinputcheck"><strong>새로운 비밀번호</strong>를 정확히 다시 입력해 주세요</label>
                    <b-form-input id="passwordinputcheck" value="kk" type="password" v-model="passwordincheck" :state="state2" trim></b-form-input>
                    </b-form-group>
                </div>


                
            
        </div>
        <div id="changebutton1">
                    <b-button id="changebutton" size="lg" @click="changed" v-bind:disabled="state3"  >비밀번호 변경</b-button>

                </div>
            </div>
        </div>
        <footer>
            hi
        </footer>
    </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'

export default {
    data(){
        return {
            passwordin :'' ,
            passwordincheck : ''
        }

    },
    computed: {
      state() {
        return this.passwordin.length >= 10
      },
      invalidFeedback() {
        if (this.passwordin.length > 0) {
          return '비밀번호는 10자 이상이여야 합니다.'
        }
        return '새 비밀번호를 입력해 주세요.'
      },
      state2() {
        
          
            return (this.passwordincheck == this.passwordin)&&(this.passwordincheck.length>=10)
        
            
          
      }
      ,
      state3() {
        
          
            return !((this.passwordincheck == this.passwordin)&&(this.passwordincheck.length>=10))
        
            
          
      }
      ,
      invalidFeedback2() {
         
        return '비밀번호가 다릅니다.'
      }
    },
    methods :{
        changed(){
            alert('비밀번호가 성공적으로 변경되었습니다.');
        }
        
    },
    components : {
        NavBar
    }
}

</script>
<style scoped>

#post-container {
    padding: 50px;
    text-align: center;
}

#create-post-container {
    margin-top:100px; 
    padding-top:70px;
}

#container {
    width: 880px;
    height: 1300px;
    background: white;
    margin-bottom: 100px;
}

    #bigbox{
        
        text-align: center;
        background-color: #f9f9f9;
        border-color: black ;
        border-radius: 12px;
        width: 80%;
        position : relative;
        /*margin : 10px auto;*/
        display: block;
        top: 50px;
        margin-right : auto;
        margin-left : auto;
        padding : 30px;
    }
    #newpassword{
        display: block;
        text-align: left;
       margin-right: 24px;
        margin-left: 24px;
    }
    #newpasswordcheck{
        display: block;
        
        text-align: left;
        margin-right: 24px;
        margin-left: 24px;
        margin-top : 50px;
        position : relative;
     
    }
    #title{
        margin-top:100px;
        font-size : 50px;
        text-decoration: underline;
        text-decoration-color: #42b983;
        text-underline-position: under;
        text-decoration-thickness : 10px;
    } 
    #changebutton1{
        display: block;
        position: relative;
        margin-right: 24px;
        margin-left: 24px;
        margin-top : 100px;
       
    }
    #changebutton{
       background-color : #42b983;
       color : #ffffff;
       font-weight: bold;
    }
</style>
