<template>
  <div id="app">
    <p id="menuButton" :class="{hidden:isHidden, visible2:!isHidden}"><i class="bars icon big"></i></p>
    <button id="langButton" :class="{hidden:isHidden, visible2:!isHidden}" class="ui orange button" @click="toogleLang">{{ this.langData.otherLang }}</button>
    <TitleBloc id="titleBloc"/>
    <Sections id="sections"/>
  </div>
</template>

<script>

import TitleBloc from '@/components/TitleBloc.vue'
import Sections from '@/components/Sections.vue'
import DataFr from "@/datas/DataFr.js"
import DataEn from "@/datas/DataEn.js"

export default {
  name: 'App',
  components: {
    TitleBloc,
    Sections
  },
  data: function () {
    return {
      langData: DataFr,
      isHidden : true
    }
  },
    mounted: function()  {
    setTimeout(() => {
      this.isHidden = false;
    }, 2500);
  },
  methods: {
    toogleLang : function () {
      if (this.langData.lang == "Français") {
        this.langData = DataEn
      } else {
        this.langData = DataFr
      }   
    }
  }
}
</script>

<style>

#menuButton {
  position: fixed;
  top : 4%;
  left : 2%;
  z-index: 10;
  color: #ff8f60;
    transition: opacity 0.3s;
}

#menuButton:hover {
  opacity : 1;
}

button:focus {
    outline:none;
}

.hidden {
  opacity : 0;
}

.visible2 {
  opacity : 0.7;
}

body::-webkit-scrollbar {
  display: none;
}

body {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

body{
  margin : 0px;
  overflow: auto;
  /*background-image: url("./assets/back.png");
  background-size: cover;*/
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, #090034 31%,#e3581f 120%);
  background-size: cover;


}


#Particules {
  position: absolute;
  top : 0%;
  z-index : 1;
}

#langButton {
  position: fixed;
  top : 4%;
  right : 2%;
  z-index: 10;

  box-shadow: 0 0px 8px 0 rgba(0,0,0,1);
  transition: opacity 0.3s;
}

#langButton:hover {
  opacity : 1;
}

#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  z-index: 0;
}
</style>
