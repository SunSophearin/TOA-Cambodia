<script setup>

</script>
<template>

<footer class="footer" style="margin-top: 30px;">
    <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4   logo-footer">
                <h4>RedEYe</h4>
                <ul>
                     <li>
                        <span>+(855) 96 496 2121</span>
                    </li>
                    <li>
                        <span>phearin2121@gmail.com</span>
                    </li>
                </ul>
               
            </div>
            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4  more-footer">
                <h4>More</h4>
                <ul>
                    <li>
                        <RouterLink to="/project">Project</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/aboute">About-us</RouterLink>
                    </li>
                    <li>
                        <span>Terms And Conditions</span>
                    </li>
                    <li>
                        <span>privacy</span>
                    </li>
                </ul>
            </div>
            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4   socail-footer" >
                <h4>Socail</h4>
                <ul>
                    <li><a href="https://www.facebook.com/zi.rin.75?mibextid=ZbWKwL">
                        <img src="../assets/img/fb2.png" alt="">
                    </a></li>
                    <li><a href="https://www.instagram.com/zi.rin?igsh=ZGUzMzM3NWJiOQ==">
                        <img src="../assets/img/ig2.png" alt="">
                    </a></li>
                    <li><a href="https://t.me/Sunsophearin">
                        <img src="../assets/img/tele2.png" alt="">
                    </a></li>
                    <li><a href="https://www.facebook.com/zi.rin.75?mibextid=ZbWKwL">
                        <img src="../assets/img/git3.png" alt="">
                    </a></li>
                </ul>
            </div>
        </div>
    </div>
   
    <p>&copy; 2024|| All Rights Reserved by Rin</p>
  </footer>

</template>
<style scoped>
@import '../assets/styles/footer.css';
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap");

* {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: "Poppins", sans-serif;
list-style: none;
text-decoration: none;

}

body {
display: flex;
background: #333;
justify-content: flex-end;
align-items: flex-end;
min-height: 100vh;
}

.footer {
position: relative;
width: 100%;
background: #FF6900;
min-height: 100px;
padding: 3% 5%;
text-align: center;
color: #fff;
}
.wave {
position: absolute;
top: -100px;
left: 0;
width: 100%;
height: 100px;
background: url("../assets/img/footer.png");
background-size: 1000px 100px;
}

.wave#wave1 {
z-index: 1000;
opacity: 1;
bottom: 0;
animation: animateWaves 4s linear infinite;
}

.wave#wave2 {
z-index: 999;
opacity: 0.5;
bottom: 10px;
animation: animate 4s linear infinite !important;
}

.wave#wave3 {
z-index: 1000;
opacity: 0.2;
bottom: 15px;
animation: animateWaves 3s linear infinite;
}

.wave#wave4 {
z-index: 999;
opacity: 0.7;
bottom: 20px;
animation: animate 3s linear infinite;
}
@keyframes animateWaves {
0% {
background-position-x: 1000px;
}
100% {
background-positon-x: 0px;
}
}

@keyframes animate {
0% {
background-position-x: -1000px;
}
100% {
background-positon-x: 0px;
}
}


</style>