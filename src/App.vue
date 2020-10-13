<template>
  <div id="app">


    <TitleBloc id="titleBloc"/>
  </div>
</template>

<script>

import TitleBloc from '@/components/TitleBloc.vue'

export default {
  name: 'App',
  components: {
    TitleBloc
  }
}
</script>

<style>


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
}


#Particules {
  position: absolute;
  top : 0%;
  z-index : -2;
}

#titleBloc {

  position: absolute;
  top: 40%;
  left: 45%;
}

#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
