<template>
  <div id="app">

    <sui-sidebar-pushable class="sidebar" @click="(e) => e.stopPropagation()">
    <sui-menu class="sidebar menuSidebar"
      is="sui-sidebar"
      :visible="this.visible"
      animation="overlay"
      width="thin"
      icon="labeled"
      inverted
      vertical
    >
      <a href="#app"> <sui-menu-item to="" class="menuItem" > <sui-icon name="home" /> Acceuil </sui-menu-item></a>
      <a href="#cv"> <sui-menu-item to="/" class="menuItem"> <sui-icon name="user" /> Profil </sui-menu-item></a>
      <a href="#titleForm"> <sui-menu-item to="/" class="menuItem"> <sui-icon name="clone" /> Compétences </sui-menu-item></a>
      <a href="#projectTitle"> <sui-menu-item to="/" class="menuItem"> <sui-icon name="star" /> Projets </sui-menu-item></a>
      <sui-menu-item to="/" class="menuItem"> <sui-icon name="envelope" /> Contact </sui-menu-item>
    </sui-menu>
    <sui-sidebar-pusher class="allSegment">
      <sui-segment class="allSegment">
      </sui-segment>
    </sui-sidebar-pusher>
  </sui-sidebar-pushable>

    <p id="menuButton" v-show="!visible" :class="{hidden:isHidden, visible2:!isHidden}" @click="(e) => {e.stopPropagation(); toogleSidebar()}"><i class="bars icon big"></i></p>
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
      isHidden : true,
      visible : false,
    }
  },
    mounted: function()  {
    setTimeout(() => {
      this.isHidden = false;
    }, 2500);

    window.addEventListener('click', () => {       
      if(this.visible == true) {
        this.toogleSidebar()
    } })
  },
  methods: {
    toogleLang : function () {
      if (this.langData.lang == "Français") {
        this.langData = DataEn
      } else {
        this.langData = DataFr
      }   
    },
    toogleSidebar : function () {
      console.log(this.visible)
        this.visible = !this.visible;
    }
  }
}
</script>

<style>

html {
	scroll-behavior: smooth;
}

.menuItem {
  
background-color:#a93636 !important;
transition: background-color 0.7s !important;
 pointer-events: all !important;
}

.menuItem:hover {
  background-color:#090034 !important;
}

.allSegment {
  background-color: rgba(0,0,0,0) !important;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  pointer-events: none;
}

.pushable {
  pointer-events: none;
}

.sidebar {
  z-index: 5 !important;
  position: fixed !important;
}

.menuSidebar {
  background-color: #a93636 !important;
  pointer-events: all !important;
}




#menuButton {
  position: fixed;
  top : 4%;
  left : 2%;
  z-index: 10;
  color: #ff8f60;
    transition: opacity 0.3s;
    z-index: 1500;
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
  overflow-y: auto;
  overflow-x: hidden;
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
