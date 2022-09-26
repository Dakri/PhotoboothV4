<template>
  <div class="countdownBackground">
    <div class="snesCountdownWrapper">
      <div class="countdown"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "snesCountdown",
  components: {}
}
</script>

<style lang="scss">


.countdownBackground {
  height: 100vh; width: 100vw; display: flex;
  background-color: #1e1e1f;
}
/*
   Street Fighter countdown style
   Aitor Porro
   @lastpotion

  Based on a Joan Leon(@nucliweb) pen:
  https://codepen.io/nucliweb/pen/doJXwM
*/

/************
* Imports
*************/

/************
* Variables
*************/

/* Colors */
$white :  #FFFFFF;
$red   :  #D72B37;
$gray  :  #8A8A8A;

$columns : 6;
// States
$on:  #ffff47;
$off: #521313;

$state: (
1: $off,
2: $on
);
// Numbers maps
$number-0:  1,2,2,2,2,1,
2,2,1,1,2,2,
2,2,1,1,2,2,
2,2,1,1,2,2,
2,2,1,1,2,2,
2,2,1,1,2,2,
2,2,1,1,2,2,
1,2,2,2,2,1;

$number-1:  1,1,2,2,1,1,
1,2,2,2,1,1,
1,1,2,2,1,1,
1,1,2,2,1,1,
1,1,2,2,1,1,
1,1,2,2,1,1,
1,1,2,2,1,1,
1,2,2,2,2,1;

$number-2:  1,2,2,2,2,1,
2,2,1,1,2,2,
2,2,1,1,2,2,
1,1,1,1,2,2,
1,2,2,2,2,1,
2,2,1,1,1,1,
2,2,1,1,1,1,
2,2,2,2,2,2;

$number-3:  1,2,2,2,2,1,
2,2,1,1,2,2,
1,1,1,1,2,2,
1,1,2,2,2,1,
1,1,1,1,2,2,
2,2,1,1,2,2,
2,2,1,1,2,2,
1,2,2,2,2,1;

$number-4:  1,1,1,1,2,1,
1,1,1,2,2,1,
1,1,2,2,2,1,
1,2,1,2,2,1,
2,1,1,2,2,1,
2,2,2,2,2,2,
1,1,1,2,2,1,
1,1,1,2,2,1;

$number-5:  2,2,2,2,2,2,
2,2,1,1,1,1,
2,2,1,1,1,1,
2,2,2,2,2,1,
1,1,1,1,2,2,
2,2,1,1,2,2,
2,2,1,1,2,2,
1,2,2,2,2,1;

$number-6:  1,2,2,2,2,1,
2,2,1,1,2,2,
2,2,1,1,1,1,
2,2,2,2,2,1,
2,2,1,1,2,2,
2,2,1,1,2,2,
2,2,1,1,2,2,
1,2,2,2,2,1;


$number-7:  2,2,2,2,2,2,
2,2,1,1,2,2,
1,1,1,1,2,2,
1,1,1,2,2,1,
1,1,1,2,2,1,
1,1,2,2,1,1,
1,1,2,2,1,1,
1,1,2,2,1,1;


$number-8:  1,2,2,2,2,1,
2,2,1,1,2,2,
2,2,1,1,2,2,
1,2,2,2,2,1,
2,2,1,1,2,2,
2,2,1,1,2,2,
2,2,1,1,2,2,
1,2,2,2,2,1;


$number-9:  1,2,2,2,2,1,
2,2,1,1,2,2,
2,2,1,1,2,2,
2,2,1,1,2,2,
1,2,2,2,2,2,
1,1,1,1,2,2,
2,2,1,1,2,2,
1,2,2,2,2,1;


//Grid animator
@function countdown($num, $lights-count: $columns){
$lights: ();
$c : 1;
$r : 0;

  @for $i from 1 through length($num){
    @if( nth($num,$i) > 0 ) {
      $lights: append($lights, ($c * 40px) ($r * 40px) 2px map-get($state,nth($num,$i)), 'comma');
    }
    @if($i % $columns == 0) {
      $r: $r+1;
      $c: 0;
    }
  $c: $c + 1;
  }
  @return $lights;
}
// Plain Styles
   body{
     background-color:#1A1A1A;
     width:100%;
     height: 100%;
     overflow:hidden;
   }


.continue{
  width:100%;
  height: 150px;
  display:inline-block;
  font-family: 'VT323';
  font-size:3.5em;
  text-transform: uppercase;
  margin-left:5%;
p{
  margin:2% 0;
  background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, stop(0%, #ff6500), color-stop(100%, #b30013));
  background-image: -webkit-linear-gradient(#ff6500,#b30013);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #ff6500;
  position: relative;
  display:inline-block;
&:after {
   background: none;
   content: attr(data-text);
   left: 0;
   position: absolute;
   text-shadow: 3px 3px 2px rgba(0, 37, 140, 1);
   top: 0;
   z-index: -1;
 }
&.pull-right{
   position:absolute;
   top:0;
   right:10%;
 }
}
}

.snesCountdownWrapper{
  display:flex;
  width:200px;
  height:320px;
  margin:auto auto auto auto;
  color:#fff;
.countdown{
  width:40px;
  height: 40px;
  border-radius:40px;
  animation: count 4s step-start ;
  box-shadow: countdown($number-0);
  margin-left:-40px;
}

}

@keyframes count {

  25%  { box-shadow: countdown($number-3); }
  50%  { box-shadow: countdown($number-2); }
  75%  { box-shadow: countdown($number-1); }
  100%  { box-shadow: countdown($number-0); }
  //10%  { box-shadow: countdown($number-9); }
  //20%  { box-shadow: countdown($number-8); }
  //30%  { box-shadow: countdown($number-7); }
  //40%  { box-shadow: countdown($number-6); }
  //50%  { box-shadow: countdown($number-5); }
  //60%  { box-shadow: countdown($number-4); }
  //70%  { box-shadow: countdown($number-3); }
  //80%  { box-shadow: countdown($number-2); }
  //90%  { box-shadow: countdown($number-1); }
  //100%  { box-shadow: countdown($number-0); }
}


footer{
  font-family:'Roboto';
  position:absolute;
  bottom:10px;
  right:20px;
  font-size:15px;
  color: #FAFAFA;
a{
  color:$red;
}
span{
  color:$white;
}
}



</style>
