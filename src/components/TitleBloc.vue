<template>
  <div class="TitleBloc">
    <img id="title" :class="{hidden:isHidden, visible:!isHidden}" :src="this.$parent.langData.title" />
  </div>
</template>

<script>
export default {
  name: 'TitleBloc',
  data: function () {
    return {
      isHidden: true
    }
  },
  mounted: function()  {
    setTimeout(() => {
      this.isHidden = false;
    }, 1500);
    
  }
}


/* Set de couleur 1
Main
#e3581f

Traine
#c02525
#6c2e70
#ffffff

Back
#090034
#0b0039
#23155f

Back Compétences 
#792114


#080020

Idée police
Perpetua
Adobe Arabic
*/

/* Set de couleur 2
HeadBand
#1d0707
#380e0e


*/







</script>


<style scoped>
h1, h2 {
    color: #ffffff;
}

.hidden {
  opacity: 0;
  width : 29%;
}

.visible {
  width : 31%;
}



#title {
  z-index: 2;
  position: absolute;
  top: 40%; /* poussé de la moitié de hauteur du référent */
  left: 50%; /* poussé de la moitié de hauteur du référent */
  transform: translateX(-50%) translateY(-50%);
  transition : opacity 2s, width 1.5s;
  pointer-events: none;
}

@media (max-width: 1100px) {
  .hidden {

    width : 48%;
  }

  .visible {
    width : 50%;
  }
}


@media (max-width: 600px) {
  .hidden {

    width : 78%;
  }


  .visible {
    width : 80%;
  }
}


</style>
