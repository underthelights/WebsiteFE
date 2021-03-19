<template lang="ko">
<div class="total-page">
    <div class="nav">
        <NavBar/>
    </div>
    <div class="main">
        <div class="container">
            <div class="shout">
                <ul>
                    <li class="text">
                        <h1>당신의 메이트를 쉽고 빠르게 찾는 방법</h1>
                        <h3>위대한 시작을 여기에서</h3>
                    </li>
                    <li class="logo">
                        <img src="@/assets/logo.png" alt="logo">
                    </li>
                </ul>
            </div>
            <div class="card">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div> 
        </div>   
    </div>
</div>
</template>
<script>

import NavBar from '@/components/NavBar.vue'
import Card from '@/components/MainHomeCard.vue'
export default {
    data(){


    },
    methods: {

    },
    components: {
        'NavBar' : NavBar,
        'Card' : Card
    }
}

</script>

<style scoped>

    /* ----css reset---- */
    * {
      margin: 0;
      padding: 0;
    }

    .main {
        /* height: 100vh;
        width: 100vw; */
        background-color: #EFF3F6; 
        padding-top: 55px;
    }

    .main > .container > .card {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        border: none;
        background-color: #EFF3F6; 
        width: 1180px; /* navbar와 맞춤 */   
        position: relative;
        left: -30px;
        top: -80px;
    }
    
    .shout > ul > li {
        display: inline-block;
    }

    .shout > ul > .logo{
        -ms-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        transform: rotate(0deg);
        transition: all 10s ease-in-out;
    }

    .shout > ul > .logo:hover{
        -ms-transform: rotate(3600deg);
        -webkit-transform: rotate(3600deg);
        -moz-transform: rotate(3600deg);
        transform: rotate(3600deg);
    }

    .container {
        position: center;
    }

    .total-page {
        height: 100vh;
        width: 100vw;
    }
    
</style>
