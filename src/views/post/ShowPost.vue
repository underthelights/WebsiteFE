// Post를 누르면 post를 보여주는 page ex) https://www.beginmate.com/team/6425

/<template lang="">
    <div id="create-post-container">
        <NavBar/>
        <div id="container" class="container shadow-lg">
            <div id="post-container">
                
                    <div id='title'>
                        <strong>팀이름<br>
                        목적/현재진행단계/현재팀원/선호지역/창립일자
                        </strong>
                    </div>
                    <hr>
                    <div id='introduce'>
                        한국 전기공사 영상공모전 팀 구합니다.<br><br>
                        한국 전기공사에서 이번회에 주최하는 공모전 팀 모집합니다.<br>자세한 사항은 기획서 공유해 드리겠습니다.영상 촬영 가능하신 분을 찾고 있어요.

                    </div>
                    
                    <hr>

                    <span>
                        <strong>모집안내</strong><br>
                        분야 : 영상촬영디렉터
                    </span>
                    <br>
                    <hr>
                    <button type="btn-outline-button" id="needbutton">
                        요구사항 / 우대사항
                    </button>
                    <table id="lnr" style="">
                        <colgroup>
                            <col width="55%"/>
                            <col width="45%"/>
                        </colgroup>
                        
                        
                        <th>
                            <strong>담당자 연락처</strong>
                            <br><br>
                            이름 : {{leadername}}<br>
                            이메일 : {{leaderemail}}<br>
                            핸드폰 : {{leaderphone}}<br><br>
                            <button id ='lbbb' class='twobutton' >팀 지원하기</button>  
                            <button id = 'rbbb' class='twobutton'>관심등록</button>
                            
                        </th>
                        <th>
                        
                            <strong>팀 요약정보</strong><br><br>
                            <div>
                                <img id='teamimage' class='righttext' align='left' src="../../assets/logo.png">
                                <p class='righttext'>팀 이름 : {{teamname}}<br>
                                분야 : {{field}}<br>
                                개발단계 : {{stage}}<br>
                                </p>
                                
                            </div>
                        </th>
                    
                    </table>
                    <div id="comment" style="width : 100%;">
                        <div id="comment-num">
                            댓글이 <strong><span id="comnum">2</span></strong>개 있습니다.<br><br>
                        </div>
                        <div class="commentwindow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                            </svg>
                            <span style="margin:5px;"><strong>{{username}}</strong></span>
                        <textarea id="newc" rows=3 placeholder="댓글을 작성해주세요"></textarea>
                            <button  class="twobutton" type="submit" v-on:click="commentwrite" style="margin-right : 10px; background-color : #ed5c73; color : white;">댓글 달기</button>
                            <button class="twobutton" v-on:click="erasecommentwindow" style="background-color : white; color : black">취소</button>
                        </div>
                        <br>
                        <div class="commentwindow">
                            <div class="commenttime">2020-03-08 03:05:23</div>
                            
                            <!-- <div class="comment-content">심심심</div> -->
                            <div class="username">심심심</div>
                        </div>
                        
                  
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
        return{
             leadername : '송영욱',
             leaderemail : 'songsari_onlylives@clean.water',
            leaderphone : '회원만 접근 가능한 정보입니다.',
            teamname : '송사리와 친구들',
            field : '영상디렉팅',
            stage : '주제 구상 중',
            username : '김계원'
            
        }
    },
    components:{
        NavBar

    },
    methods :{
        warnEmpty(){
            alert("댓글을 입력해주세요!");

        },
        datetoString(date){
            const dateString= date.toISOString();
            const dateToString= dateString.substring(0,10)+" "+dateString.substring(11,19);
            return dateToString;
        },
        commentwrite(){
            const newcommentEL=document.getElementById("newc");
            const newcomment= newcommentEL.value.trim();
            const usern=this.username;
            alert(usern);
            if(newcomment){
                const dateEL=document.createElement('div');
                dateEL.classList.add("commenttime");
                const nowdate=this.datetoString(new Date());
                dateEL.innerText=nowdate;

                const contentEL=document.createElement('div');
               contentEL.classList.add("comment-content");
               //contentEL.innerText=newcomment;

                 const usernEL=document.createElement('div');
                usernEL.classList.add("username");
                usernEL.innerText=usern+' : '+newcomment;
               const commentEL=document.createElement('div');
               commentEL.classList.add('commentwindow');
                
               commentEL.appendChild(dateEL);
               commentEL.appendChild(usernEL);
                //commentEL.appendChild(contentEL);
                

               document.getElementById("comment").appendChild(commentEL);
               newcommentEL.value="";
              

               const countEL=document.getElementById('comnum');
               const count=countEL.innerText;
               countEL.innerText=parseInt(count)+1;
            }
            else this.warnEmpty();

        },
        erasecommentwindow(){
            document.getElementById("newc").value='';
        }
    }
}

</script>
<style scoped>

#post-container {
    padding: 50px;
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
    #title{
        position: relative;
        display : block;
        text-align: center;
        margin-top : 20px;
    }
    /* .box{
        display : block;
        align-items: center;
        margin : auto;
        font-size : 8px;
        width:70%;
    } */
    #block{
        display : block;
        border: 10px solid red;
        border-radius : 10px;
    }
    #needbutton{

        
        border-radius: 20px;
        border : 2px solid red;
        background-color : white;
    }
    #lnr{
        position: relative;
        width: 100%;
        margin-top : 10px;
        display: block;
         border-bottom: 2px solid black; 
        padding-bottom : 20px;
        margin-bottom: 20px;
        table-layout:fixed
    }
    #left{
        width: 50%;
        float: left;
        box-sizing: border-box;
        position: relative;
        display: block;

    }
    #right{
        position: relative;
        width: 50%;
        float: right;
        box-sizing: border-box;   
        display: block;  
    }
    #teamimage{
        width : 30%;
        height : 30%;
        border : 1px solid black;
        border-radius : 10px;
        box-sizing: border-box;
        
    }
    .righttext{
        /* margin-top : 20px; */
        margin-right : 10px;
        position: relative;

    }
    #lbbb{
        margin-right:10px;
        background: #ed5c73;
        border-color : #ed5c73;

    }
    #rbbb{
        background: #4d4d6a;
        border-color : #4d4d6a;

    }
    .twobutton{
        width : auto;
        border-radius : 10px;
        color : white;
        display: inline;
        
    }
   #comment{


       width : 100%;
       /* border : 1px solid gray; */
   } 
   #newc{
       width : 100%;
       border : 1px solid gray;
       resize : none;
         margin-top: 10px;
         border-radius: 10px;
   }
   .bi bi-person-circle{
       margin : 200px;
       
   }
   .username{
       /* font-weight: bold; */
   }
</style>
