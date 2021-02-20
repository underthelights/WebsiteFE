<template>
  <div id="arpmain">
    <div id="nav">
      <div id="container">
        <div id="menu">
          <router-link to="/apply-reset-id/">ID</router-link> 
          <router-link to="/apply-reset-password/">Password</router-link>
        </div>
        <div class="id">
          <input id="emailholder" type="email" name="email" placeholder="가입된 이메일" autocomplete="off">
          <input id="findidsubmit" type="submit" value="아이디 찾기">
          <div id="description">
              <br>
            <p>※ 가입된 아이디가 있을 경우, 입력하신 이메일로 아이디를 안내해 드립니다.</p>
            <p>※ 만약 이메일이 오지 않는다면, 스팸 편지함으로 이동하지 않았는지 확인해주세요.</p>
            <p>※ 이메일 서비스 제공자 사정에 의해 즉시 도착하지 않을 수 있으니, 최대 30분 정도 기다리신 후 다시 시도해주세요.</p>
          </div>
        </div>
        <router-view/>
      </div>
    </div>
    
  </div>
</template>


<script>
// @ is an alias to /src

export default {
  
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
  padding: 50px;
  position: relative;
  top:10px;
  /* margin-left: 250px;
  margin-right: 250px; */
  margin: 24px auto;
  width: 480px;
  display: block;

}

#menu {
  margin-top: 24px;
  padding-left: 16px;
  width: 100%;
  height: 48px;
  box-sizing: border-box;
  /* font-size: 0; */
  background-color: #fff;
  display: block;
  color: #292929;

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

#findidsubmit {
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
