<template>
    <div>
      <section ref="Headband" class="Headband">
      <div id="cv" :class="{'onTop' : scrollOffset < 30}">
        <button id="cvButton" :class="{hidden:isHidden, visible:!isHidden}" @click="toggleModal">{{ $parent.$parent.langData.headband.cv }}</button>
      </div>
      <div id="description">
        <h3 id="titleIngenieur">{{ $parent.$parent.langData.headband.presentationTitle }}</h3>
        <p>{{ $parent.$parent.langData.headband.presentationText }}</p>
      </div>
      <div id="links">
        <a class="link" target="_blank" @click="test" href="https://github.com/LibertAntoine"><i class="github icon"></i>Github</a> 
        <a id="LinkedIn" target="_blank" class="link" @click="test" href="https://www.linkedin.com/in/antoine-libert-ab28b0107/"><i class="linkedin icon"></i>LinkedIn</a>
        <br/>
        <p id="vimeo"> <a class="link" target="_blank"  @click="test" href="https://vimeo.com/user124790866"><i class="vimeo v icon"></i>Vimeo</a> </p>
      </div>
      </section>
      <CVModal ref="CVModal"/>
    </div>
</template>

<script>
import CVModal from '@/components/CVModal.vue'

export default {
  name: 'Headband',
  components: {
    CVModal
  },
  mounted : function () {
    window.addEventListener('scroll', this.onScroll)
    this.onScroll()
    window.addEventListener('resize', this.onResize)
    this.onResize();
    setTimeout(() => {
      this.isHidden = false;
    }, 2300);
  },
  data: function () {
    return {
      scrollOffset : 0,
      isHidden: true
    }
  },
  methods: {
    test: function () {
      console.log("test");
    },
    onScroll : function () {
      this.scrollOffset = window.pageYOffset
    },
    onResize() {
      this.$refs.Headband.style.marginTop =   window.innerWidth / 11 + "px"
    },
    toggleModal() {
      this.$refs.CVModal.toggle()
    }
  }

}

</script>


<style scoped>


h3 {
  z-index: 40;
}

p {
  z-index: 40;
}

#links {
  margin-top: 4.5%;
  font-family: 'Sansita Swashed', cursive;
  -webkit-transform: rotate(-10deg);
  transform: rotate(-10deg);
  position: absolute;
  right: 10.5%;
  transition : right 1s,  margin-top 1s;
}





#titleIngenieur {
  margin-top : 10px;
  font-family: 'Sansita Swashed', cursive;
  font-size: 25px;
  color: #e3581f;
}


.link {
  color :#a93636;

  font-size: 30px;
  margin-top : 25px;
  padding: 30px;
  cursor: pointer;
  text-decoration: none;
   transition : color 0.7s;
}

#cv {
  position: absolute;
  top: 47%;
  left : 18%;
  -webkit-transform: rotate(-10deg);
  transform: rotate(-10deg) translateY(-50%);
  transition : left 2s, top 2s, margin-top 1s;

}


.hidden {
  opacity: 0;

}

.visible {
  opacity: 1;
}



.onTop {
  top: 25% !important;
  left : 9% !important;

}

#cvButton {
  position:relative;
  top : 0px;
  left : 0px;
  font-family: 'Sansita Swashed', cursive;
  background-color: #e3581f;
  border : 0;

  padding : 15px 30px 15px 30px;
  font-size : 20px;
  color : white;
  box-shadow: 4px 4px 10px 0 rgba(0,0,0,0.35);
  transition : top 0.7s, left 0.7s, box-shadow 0.7s, opacity 2s, background-color 0.7s;
}

#cvButton:hover {
  top : 4px;
  left : 4px;
  box-shadow: 0px 0px 10px 0 rgba(0,0,0,0.35);
  background-color: #a93636;

}

.link:hover {
  color :#e3581f;
}

#vimeo {
  margin-top : 23px;
  text-align: center;
  padding-top : 40px;
 
}

#description {
  color: #ff8f60;
  font-family: 'Merriweather', serif;
  font-size : 15px;

  text-align: center;
  width : 27%;
  margin-top: 40px;
  -webkit-transform: rotate(-10deg);
  transform: rotate(-10deg);
  opacity : 1;
  z-index: 40;
}


.Headband {
    height: 320px;
    background: #0c0c0c;
    -webkit-transform: rotate(10deg);
    transform: rotate(10deg);
    padding-left : 50px;
    width: 115%;
    margin-left: -10%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    box-shadow: 0 4px 40px 0 rgba(0,0,0,1);
    z-index: 3;
}

@media (max-width: 1500px) {
  #links {
    margin-top: 6.5%;
    right: 6%;
  }
}

@media (max-width: 1325px) {
  #description {
    font-size : 14px;
  }


  #titleIngenieur {

    font-size: 21px;
    margin-top : 30px;
  }

  #links {
    margin-top: 10.5%;
  }


.Headband {
    height: 400px;
}



  .link {
    font-size: 25px !important;
  }


}



@media (max-width: 1000px) {
  #description {
    font-size : 14px;
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    width : 85%;
    margin: 0 auto;
    
  }


  #titleIngenieur {

    font-size: 21px;
    margin-top : 30px;
  }

  #links {
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  position: relative;
  right: 0%;
  margin-top : 25px;
  padding: 30px;
  }


.Headband {
    -webkit-transform: rotate(00deg);
    transform: rotate(00deg);
    height: 100%;
    flex-direction: column;
    align-items: center;
    width : 100%;
    margin-left: 0%;
    padding-left : 0px;
}


#cv {
  position: relative;
  top: 0%;
  left : 0%;
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg) translateY(0%);
  margin : 0 auto;
  margin-top : 20px;
  margin-bottom : 40px;
}


#cvButton {
  position:relative;
  top : 0px;
  left : 0px;
}

#cvButton:hover {
  top : 0px;
  left : 0px;
}

.onTop {
  top: 0% !important;
  left : 0% !important;

}



  .link {
    font-size: 25px !important;

  }


}

@media (max-width: 700px) {


#cv {
  margin-top : 40px;
}


}




@media (max-width: 420px) {

  .link {
    font-size: 23px !important;
    padding: 15px;

  }

  #vimeo {
      margin-top : 10px;
  text-align: center;
  padding-top : 20px;
  }



}


@media (max-width: 340px) {

#links {
  padding: 30px 0px 30px 0px;
}


  .link {
    font-size: 20px !important;


  }

}



</style>
