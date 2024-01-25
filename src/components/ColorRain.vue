<template>
  <div class="rain-background">
    <div class="color-rain">
      <div class="drop" v-for="i in 120" :key="i"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$total: 120;
$time: 4;
$height: 400;
$percent: 0.833333%; // 100 / $total
$dotSize: 0.8;

.rain-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
}

.color-rain {
  position: relative;
  height: 100%;
}

.drop {
  position: relative;
  height: $height + px;
  width: $percent;
  margin-top: -$height + px;
  animation: drop $time + s infinite ease-in;
  z-index: -1;
  &:after {
    content: '';
    position: absolute;
    width: $dotSize + vw;
    height: $dotSize + vw;
    border-radius: 50%;
    left: 50%;
    bottom: -($dotSize/2) + vw;
    margin-left: -($dotSize/2) + vw;
  }
}

@for $i from 1 through $total {
  $hue: (300 / $total) * $i;
  .drop:nth-child(#{$i}) {
    left: ($i - 1) * $percent;
    background-image: linear-gradient(to bottom, white, hsla($hue, 100%, 50%, 0.8));
    animation-delay: random($total) * ($time/$total) * -1s;
    &:after {
      background: hsla($hue, 100%, 50%, 1);
    }
  }
}

@keyframes drop {
  80% {
    opacity: 1;
  }
  100% {
    transform: translate3d(0, 150vh, 0);
    opacity: 0;
  }
}
</style>
