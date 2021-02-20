<template>
  <div id="arpmain">
    <div id="nav">
      <div id="container">
        <div id="menu">
          <router-link to="/apply-reset-id/">ID</router-link> 
          <router-link to="/apply-reset-password/">Password</router-link>
        </div>
        <div class="password">
          <input id="emailholder" type="email" name="email" placeholder="가입된 아이디" autocomplete="off">
          <input id="findidsubmit" type="submit" value="비밀번호 찾기">
        </div>
        <router-view/>
      </div>
    </div>
    
  </div>
</template>

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


.description{
  font-size: 12px;
  letter-spacing: -0.5px;
  font-family: sans-serif;
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
