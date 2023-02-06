<template>
  <div id="Rouages">
  <div class="INCR3"></div>
  <div class="INCR13"></div>
  <div class="INCR14"></div>
  <div class="INCR18"></div>
  <div class="INCR1"></div>
  <div class="INCR2"></div>
  <div class="INCR4"></div>
  <div class="INCR5"></div>
  <div class="INCR6"></div>
  <div class="INCR7"></div>
  <div class="INCR8"></div>
  <div class="INCR9"></div>
  <div class="INCR10"></div>
  <div class="INCR11"></div>
  <div class="INCR12"></div>
  <div class="INCR15"></div>
  <div class="INCR16"></div>
  <div class="INCR17"></div>
  <div class="INCR19"></div>
  <div class="INCR20"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#Rouages{
  overflow-y: hidden;
}

@keyframes fil {
  0%   {rotate:0deg;}
  50%  {rotate:180deg}
  100% {rotate:360deg}
}
.INCR1{
  background-image: url(@/assets/rouage.png);
  width: 300px;
  height: 300px;
  background-repeat:no-repeat;

  animation-name:fil;
  animation-duration:50s;
  position:absolute;
  animation-iteration-count: infinite;
}

.INCR1::content{
  content:"le";
}

@keyframes ynv {
  0%   {rotate:0deg;}
  50%  {rotate:-180deg}
  100% {rotate:-360deg}
}
.INCR2{
  background-image: url(@/assets/rouage.png);
  width: 400px;
  height: 400px;
  background-repeat:no-repeat;
  background-size: cover;
  left:40%;
  top :15%;
  animation-name:ynv;
  animation-duration:60s;
  position:absolute;
  animation-iteration-count: infinite;
}

.INCR2::content{
  content:"mot";
}

@keyframes tic {
  0%   {left: 0%;}
  50%  {left: 2%;}
  100% {left: 0%;}
}
.INCR3{
  color: red;
  background-color:grey;
  width:15px;
  height:15px;
  animation-name:tic;
  animation-duration:120s;
  position:absolute;
  animation-iteration-count: infinite;
  bottom:0%;
}

.INCR3::content{
  content:"à";
}

@keyframes ony {
  0%   {rotate:0deg;}
  50%  {rotate:180deg}
  100% {rotate:360deg}
}
.INCR5{
  background-image: url(@/assets/rouage.png);
  width: 300px;
  height: 300px;
  background-repeat:no-repeat;
  background-size: cover;
  top:10%;
  right:10%;
  animation-name:ony;
  animation-duration:40s;
  position:absolute;
  animation-iteration-count: infinite;
}

.INCR5::content{
  content:"trouver";
}

@keyframes tac {
  0%   {left: -10%;}
  1%  {left: 90%;}
  2% {right: -10%;}
  100% {left :-10%;}
}
.INCR7{
  background-color: red;
  width:30px;
  height:30px;
  animation-name:tac;
  animation-duration:20s;
  position:absolute;
  animation-iteration-count: infinite;

}

.INCR7::before{
  content:"A TROUVER";
}

@keyframes nov {
  0%   {rotate:0deg;}
  50%  {rotate:180deg}
  100% {rotate:360deg}
}
.INCR10{
  background-image: url(@/assets/rouage.png);
  width: 400px;
  height: 400px;
  background-repeat:no-repeat;
  background-size: cover;
  left:15%;
  top:5%;
  animation-name:nov;
  animation-duration:80s;
  position:absolute;
  animation-iteration-count: infinite;
}

.INCR10::content{
  content:"est";
}

@keyframes vyn {
  0%   {left: 0%;}
  50%  {left: 2%;}
  100% {left: 0%;}
}
.INCR13{
  color: red;
  background-color:#21C6B2;
  width:15px;
  height:15px;
  animation-name:vyn;
  animation-duration:120s;
  position:absolute;
  animation-iteration-count: infinite;
  top:0%;
}

.INCR13::content{
  content:"dans";
}

@keyframes ovn {
  0%   {right: 0%;}
  50%  {right: 2%;}
  100% {right: 0%;}
}
.INCR14{
  color: red;
  background-color:#21C6B2;
  width:15px;
  height:15px;
  animation-name:ovn;
  animation-duration:120s;
  position:absolute;
  animation-iteration-count: infinite;
  bottom:0%;
}

.INCR14::content{
  content:"un";
}

@keyframes oyv {
  0%   {right: 0%;}
  50%  {right: 2%;}
  100% {right: 0%;}
}
.INCR18{
  color: red;
  background-color:grey;
  width:15px;
  height:15px;
  animation-name:oyv;
  animation-duration:120s;
  position:absolute;
  animation-iteration-count: infinite;
  top:0%;
}

.INCR18::content{
  content:"content";
}

</style>
