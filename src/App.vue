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
      <a href="#app"> <sui-menu-item to="" class="menuItem" > <sui-icon name="home" />{{ langData.menu[0] }}</sui-menu-item></a>
      <a href="#cv"> <sui-menu-item to="/" class="menuItem"> <sui-icon name="user" />{{ langData.menu[1] }}</sui-menu-item></a>
      <a href="#titleForm"> <sui-menu-item to="/" class="menuItem"> <sui-icon name="clone" />{{ langData.menu[2] }}</sui-menu-item></a>
      <a href="#projectTitle"> <sui-menu-item to="/" class="menuItem"> <sui-icon name="star" />{{ langData.menu[3] }}</sui-menu-item></a>
      <sui-menu-item class="menuItem" @click.native="openContact"> <sui-icon name="envelope"/>{{ langData.menu[4] }}</sui-menu-item>
    </sui-menu>
    <sui-sidebar-pusher class="allSegment">
      <sui-segment class="allSegment">
      </sui-segment>
    </sui-sidebar-pusher>
  </sui-sidebar-pushable>

    <p id="menuButton" v-show="!visible" :class="{hidden:isHidden, visible2:!isHidden}" @click="(e) => {e.stopPropagation(); toogleSidebar()}"><i class="bars icon big"></i></p>
    <button id="langButton" :class="{hidden:isHidden, visible2:!isHidden}" class="ui orange button" @click="toogleLang">{{ this.langData.otherLang }}</button>
    <TitleBloc id="titleBloc"/>
    <Sections id="sections" ref="Sections"/>
  </div>
</template>

<script>

import TitleBloc from '@/components/TitleBloc.vue'
import Sections from '@/components/Sections.vue'
import DataFr from "@/datas/DataFr.js"
import DataEn from "@/datas/DataEn.js"
import ProjectIndex from "@/datas/ProjectIndex.js"

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

    if(this.$route.params.title && (ProjectIndex[this.$route.params.title] != undefined))
    {
      this.$refs.Sections.$refs.Projects.currentModalProject = this.langData.projects[ProjectIndex[this.$route.params.title]]
      this.$refs.Sections.$refs.Projects.$refs.ProjectModal.toggle()
    } else {
      this.$router.replace('/')
    }

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
        this.visible = !this.visible;
    },
    openContact : function () {
      this.$refs.Sections.$refs.Skills.$refs.ContactsModal.open = true    }
  }
}
</script>

<style>

html {
	scroll-behavior: smooth;
   width:100%;
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
    transition: opacity 0.3s, left 1s;
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
  width:100%;


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


@media (max-width: 940px) {
#menuButton {
  left : 3.5%;
}
}




@media (max-width: 400px) {
#menuButton {
  left : 5%;
}


}




</style>
