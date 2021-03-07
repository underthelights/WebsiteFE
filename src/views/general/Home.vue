<template>
<div id="menu">
    <div id="left">
    <div class="left-content">
        <br><strong style='font-size:60px'>너울가지</strong><br>
        <span style='font-size:30px'>프로그래밍을 함께<br>프로젝트는 즐겁게</span><br>
        <a href="/" class="macbook">
        <!-- main home screenshot here!! -->
        <img src="../../assets/image/MB.png" alt="neoul-gazi" width="50%"></a>
        <br><strong style='font-size:60px'><br>프로젝트를 함께 진행할 <br>팀원을 찾으시나요?</strong><br>

        <span style='font-size:30px'><br>더욱 발전할 당신의 프로그래밍</span><br>
    </div>
    </div>
    <aside id="aside" style="position:absolute;top:30%;margin-top:-50px;background-color: #ffffff;margin-left: 50%;width: 50%;">

        <div id="login" style='line-height:300% display:table-cell vertical-align:middle'>
            <a href="/" class="logo">    <img src="../../assets/image/logo.png" alt="neoul-gazi" width="17%"></a>
            <p style='line-height:150%'><br>
                <strong style='font-size:60px'>너울가지</strong><br><br>
                <span style='line-height:200%; font-size:19px'>
                    Hack your Lifes to Fantasy<br>Code your Dreams to Reality</span>
            </p>
            <div id="buttons" style='line-height:300%'>
            <b-button pill="pill" :style="{width: '395px'}" variant="outline-danger" to="/login/">
                <span style='font-size:19px'>로그인</span>
            </b-button><br>
            <b-button pill="pill" :style="{width: '395px'}" variant="danger" to="/login/">
                <span style='font-size:19px'>회원가입</span>
            </b-button>
            <p class="find" style='line-height:140%'><br>
                <router-link to="/apply-reset-id/">아이디 찾기</router-link>|
                <router-link to="/apply-reset-password/">비밀번호 찾기</router-link>
            </p>
            </div>
        </div>
    </aside>

    <footer id="footer" style="position:absolute;width:100%;bottom:0;height: 50px; ">
        <div id="footer-content" >
            <p>
            <a href="termsofservice">서비스이용약관</a>  |  <a href="termsofservice">개인정보처리방침</a>  |  <a href="termsofservice">커뮤니티 이용방침  </a>| <a href="https://github.com/neoul-gaji"> ©너울가지</a>
        </p>
        </div>
    </footer>
</div>


</template>

<script>
    export default {
    }
</script>

<style scoped="scoped" > 

.left-content {
  background-color: #d4d4d3;
  position: absolute;
  left: 0px;
  height:100%;
  width: 50%;
}

.right-content{
 display: table-cell;
    vertical-align: middle;
  background-color: #ffffff;
  right: 0px;
  width: 50%;
}
#menu {
    text-align: center;
}
#footer-content {
    background-color: #e9ecef;
    height: 50px; 
    /* height + top/bottom paddding + top/bottom border must add up to footer height */
    text-align: center;
    padding: 8px;
}
@font-face{
    font-family: "GBold";
    src: url("../../assets/TTF/Bold.ttf");
    /* font-weight: bold; */
}

@font-face {
    font-family: "GMedium";
    src: url("../../assets/TTF/Medium.ttf");
    /* font-weight: normal; */
}


g-medium {
    font-family: "GMedium";
    font-style: normal;
    font-weight: normal;
}

g-bold {
    font-family: "GBold";
    font-style: normal;
    font-weight: normal;
}

div{
    font-family: "GMedium";
}
@media (max-width: 700px) {
    #aside {
        text-align: left;
    }    

}
</style>
