<template>
    <div>
  <sui-modal v-model="open" id="projectModal">
     
        <sui-modal-header class="projetTitleModal">{{ project.title }}</sui-modal-header>
        <i id="closeX" class="large x icon" @click="toggle"></i>
        
          <sui-modal-content class="modalContent" ref="modalContent" >
            <div class="modalDescrib">   
          <sui-modal-description >
             <div class="projetPresent">
              
              <div class="presentBloc">
              <h3 class="featuresTitle presentTitle">{{ $parent.$parent.$parent.langData.metaproject.present }}</h3>
              <p ref="textGlobal" class="textGlobal"></p>
              </div>
              <div class="presentImage">
              <img class="mainImage" :src="project.img[1]" />
              </div>
            </div>

        <div class="fresco">
            <div class="presentImageBis seconde">
                <img class="projetIlluFresco" :src="project.img[0]" />
            </div>
            <div class="featureBloc">
                <h3 class="featuresTitle">{{ $parent.$parent.$parent.langData.metaproject.feature }}</h3>
                <ul class="features">
                    <li v-for="feature in project.features" :key="feature" class="feature">{{ feature }}</li>
                </ul>
            </div>
        </div>

        <div class="fresco2">
            <div class="presentImageBis derniere">
              <img class="projetIlluFresco " :src="project.img[2]" />
            </div>
            <div class="contribBloc" v-if="project.contributor[0]">
                <h3 class="featuresTitle">{{ $parent.$parent.$parent.langData.metaproject.contrib }}</h3>
                <ul class="features">
                    <li v-for="contributor in project.contributor" :key="contributor" class="feature">{{ contributor }}</li>
                </ul>
            </div>
            
        </div>
   <div class="antiBlur" :style="{'background-image':'url('+ project.img[0] +')'}">
                    </div>
          </sui-modal-description>
        </div>

          </sui-modal-content>

        <sui-modal-actions class="linksProject">
            
          <button  class="ui orange button" v-if="project.projectLink" positive @click="openProjectLink">
            {{ project.projectLink[1] }}
          </button>
          <button class="ui orange button" v-if="project.codeUrl" positive @click="openProjectCode">
          {{ $parent.$parent.$parent.langData.metaproject.seeCodeLink }}
          </button>
        </sui-modal-actions>
               
     </sui-modal>

    </div>
</template>

<script>
export default {
  name: 'ProjectModal',
   props: {
           project :  {type: Object, required : true}
  }, 
watch: {
    project : function () { this.$refs.textGlobal.innerHTML = this.project.text  }
  },
data: function () {
    return {
        open : false
    }
  },
  mounted : function () {
            this.$refs.textGlobal.innerHTML = this.project.text  
  },
  methods : {
    toggle() {
        if(this.open == false) {
            setTimeout(() => {
                this.$router.replace('/' + this.project.nameIndex)
            }, 100);
        } else {
            this.$router.replace('/')
            this.$refs.modalContent.$el.scrollTop = 0;
        }
        this.open = !this.open
    },
    openProjectLink() {
       if (this.project.projectLink) {window.open(this.project.projectLink[0], '_blank');
    }
    },
      openProjectCode() {
        if (this.project.codeUrl) {window.open(this.project.codeUrl, '_blank');
      }
    }
  }
}

</script>

<style>
    #projectModal .ui.modal {
      width : 80% !important;
      max-width: 1400px;
    }

@media (max-width: 500px) {
    #projectModal .ui.modal {
      width : 95% !important;
      max-width: 1400px;
    }
}
</style>

<style scoped>


.modalContent::-webkit-scrollbar {
  display: none;
}

.modalContent {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.linksProject {
   background-color: rgba(19, 19, 19, 1) !important;
}

.modalDescrib {
    position: relative;
    z-index: 1000 !important;
    
}

.antiBlur {
    position: absolute !important;
    top:0%;
    filter: blur(15px);
    background-size: cover !important;
    background-position: center !important;
    overflow: hidden !important;
    margin-left : -40px;
    margin-top : -40px;
    margin-bottom : -200px;
    width: 120%;
    height: 110%;
    z-index: -1 !important;
    opacity: 0.3;
}

.modalContent {
    background-color: rgba(0, 0, 0, 1) !important;
    overflow-x: hidden !important;
    position: relative !important;
}


#closeX {
  position: absolute;
  top : 23px;
  right : 20px;
  opacity : 0.5;
  transition : opacity 0.7s;
}

#closeX:hover {
  opacity : 1;
}


@media (max-width: 768px) {
  #closeX {
  top : 16px;
  right : 12px;
}
}

.projetTitleModal {
   background-color: rgba(19, 19, 19, 1) !important;
  font-family: 'Sansita Swashed', cursive !important;
  color : #a93636 !important;
}

.seconde {
   padding-left : 20px;
}

.derniere {
  padding-left : 20px;

  margin-bottom: 50px;
}

.contribBloc {
    padding: 10px;
  padding-left: 40px;
  padding-bottom: 80px;
  width : 60%;
}

.featureBloc {
  padding: 10px;
  padding-left: 40px;
  width : 60%;
}

li {
    margin-bottom: 10px;
    font-family: 'Oxygen', sans-serif;
}

.fresco {
  margin-top : 50px;
  min-height: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

.fresco2 {
  margin-top : 50px;
  padding-left : 60px;
  padding-right : 60px;
  min-height: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;

}

.presentBloc {
    /*background-color: rgba(12, 12, 12, 0.5) !important;
    border-radius: 10px;*/
    padding:  10px 5px 10px 5px;
  margin: 10px 30px 30px 0px;
  width: 47%;

}

.presentImage {
  width : 53% !important;
}

.presentImageBis {
   
  width : 60% !important;
}


.mainImage {
    box-shadow: 2px 2px 14px 0 rgba(0,0,0,0.55) !important;
  border-radius: 20px;
  width: 100% !important;
  max-height: 400px;

}

.presentTitle {
  text-align: right !important;
}

.projetPresent {
    
  display: flex;
  align-items: center;
  padding : 10px;
}

.modalContent {
  max-height : calc(90vh - 200px);
  overflow-y: auto
}


.projetIllu {
       
  height : 100%;
  width : 400px;
  object-fit: cover;
}

.projetIlluFresco {
    box-shadow: 2px 2px 14px 0 rgba(0,0,0,0.55) !important;
     max-height: 400px;
  width : 100%;
  object-fit: cover;
  border-radius: 20px;
}

.textGlobal {
  color: #b9946e;
  font-size : 17px;
  text-align: justify;
  padding-left: 2%;
  padding-right: 2%;
  margin-top: 30px;
  font-family: 'Oxygen', sans-serif;
}

.featuresTitle {
    font-size : 20px;
  text-align: justify;
  padding-left: 2%;
  padding-right: 2%;
    font-family: 'Sansita Swashed', cursive !important;
  color : #a93636 !important;

}

.feature {
    color: #b9946e;
  font-size : 17px;
  text-align: justify;
  padding-left: 5%;
  padding-right: 5%;
}

@media (max-width: 1060px) {
    .fresco {
        flex-direction: column;
    }

    .fresco2 {
        flex-direction: column;
    }

    .presentBloc {
        width: 90%;
    }

    .projetPresent {
        flex-direction: column-reverse;
    }

    .presentTitle {
        text-align: left !important;
    }

    .presentImage {
        width : 80% !important;
    }

        .presentImage {
        width : 80% !important;
    }

    .presentImageBis {
        width : 80% !important;
    }

    .featureBloc {
        width : 80% !important;
        margin-top : 30px;
    }

    .contribBloc {
        width : 80% !important;
        padding-left: 0px;
        padding-bottom: 0px;
    }
}

@media (max-width: 500px) {
    .presentBloc {
        width : 100% !important;
    }

    .presentImage {
        width : 100% !important;
    }

    .presentImageBis {
        width : 100% !important;
    }

    .fresco {
        padding-left: 5px;
        padding-right: 5px;
    }

    .fresco2 {
                padding-left: 5px;
        padding-right: 5px;
    }

    .seconde {
        
    }

.derniere {
padding-left:0px;
}

        .featureBloc {
        width : 100% !important;
        margin-top : 30px;
        padding-left:0px;
    }

    .contribBloc {
        width : 100% !important;
    }

    .presentBloc {
        
        margin : 5px;
        margin-top : 15px;
    }
}




</style>