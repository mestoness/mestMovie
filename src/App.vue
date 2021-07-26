<template>
  <div>
    <top-header />
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
    <div style="color:white;text-align:center;padding:10px 0">
      Coded by Ahmet Baki Memiş
    </div>
  </div>
</template>
<script>
import "./assets/main.css";
import Header from "./components/Header";
export default {
  components: {
    "top-header": Header,
  },
};
</script>
<style>

.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
