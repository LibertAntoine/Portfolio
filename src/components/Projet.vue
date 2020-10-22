<template>
        <div class="projetBloc"> 
          <div :class="{'left': !right , 'right': right, 'Projet':true}">
            <img v-if="!right || mobile" ref="imageProject" class="projetIllu" :src="project.img[0]" />
            <div class="projetDescrip">
              <h3 class="projetTitle"> {{ project.title }} </h3>
              <div class="projetType"> {{ project.type }} </div>
              <p ref="text" class="projetText"></p>
              <div class="projetButtonBloc">
                <p class="projetButton">
                  <a @click="toggleNodal">{{ $parent.$parent.$parent.langData.metaproject.discoverLink }}</a>
                  <span v-if="project.projectLink">
                     | <a :href="(project.projectLink) ? project.projectLink[0] : null" target="_blank">
                       {{ project.projectLink[1] }}</a></span>
                       <span v-if="project.codeUrl"> | <a :href="(project.codeUrl) ? project.codeUrl : null" target="_blank">
                         {{ $parent.$parent.$parent.langData.metaproject.seeCodeLink }}</a></span></p></div>
            </div>
            <img v-if="right && !mobile" ref="imageProject" class="projetIllu" :src="project.img[0]" />


        
    <sui-modal v-model="open">
        <sui-modal-header>{{ project.title }}</sui-modal-header>
        <i id="closeX" class="large x icon" @click="toggleNodal"></i>
          <sui-modal-content class="modalContent">
        <sui-modal-content image>
          <div class="fresco">
            <img class="projetIlluFresco" :src="project.img[1]" />
            <img class="projetIlluFresco" :src="project.img[0]" />
            <img class="projetIlluFresco" :src="project.img[2]" />
          </div>
          </sui-modal-content>
          <sui-modal-content>
          <sui-modal-description>
            <p ref="textGlobal" class="textGlobal"></p>
            <h3 class="featuresTitle">{{ $parent.$parent.$parent.langData.metaproject.feature }}</h3>
            <lu class="features">
              <li v-for="feature in project.features" :key="feature" class="feature">{{ feature }}</li>
            </lu>
          </sui-modal-description>
          </sui-modal-content>
        </sui-modal-content >
        <sui-modal-actions class="linksProject">
          <button  class="ui orange button" v-if="project.projectLink" positive @click.native="toggle">
            <a :href="(project.projectLink) ? project.projectLink[0] : null" target="_blank">
            {{ project.projectLink[1] }}</a>
          </button>
          <button class="ui orange button" v-if="project.codeUrl" positive @click.native="toggle"><a :href="(project.codeUrl) ? project.codeUrl : null" target="_blank">
          {{ $parent.$parent.$parent.langData.metaproject.seeCodeLink }}</a>
          </button>
        </sui-modal-actions>
     </sui-modal>

          </div>
        </div>
</template>

<script>
export default {
  name: 'Projets',
  props: {
    project :  {type: Object, required : true},
    right : {type: Number, default: 0 },
  },
  watch: {
    project : function () { this.$refs.text.innerHTML = this.project.text; this.$refs.textGlobal.innerHTML = this.project.text }
  },
  data: function () {
    return {
      mobile : false,
      open: false
    }
  },
  mounted : function () {
    this.$refs.text.innerHTML = this.project.text
    this.$refs.textGlobal.innerHTML = this.project.text
    window.addEventListener('resize', this.onResize)
    this.onResize();
  },
  methods: {
    onResize() {
      this.mobile = (window.innerWidth <= 930) ? true : false;
    },
    toggleNodal() {
      this.open = !this.open;
    },
  }
}
</script>

<style scoped>


.Projet {
  border-radius : 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px 0 rgba(0,0,0,1);
}


a {
  color : #e3581f !important;
  font-family: 'Sansita Swashed', cursive;
  cursor: pointer;
  transition : color 1s;
}

a:hover {
  color : #090034 !important;
}



.linksProject {
  font-size: 20px;
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

.left {
  margin-left : 10%;
  margin-right : 20%;
}

.right {
  margin-left : 20%;
  margin-right : 10%;
}

.Projet {
  display: flex;
  margin-top : 50px;
  margin-bottom : 50px;
  width : 70%;
  height : 300px;
  background-color :  #b9946e;

}

.projetIllu {
  height : 100%;
  width : 400px;
  object-fit: cover;
}

.projetIlluFresco {
  
  width : 33%;
  object-fit: cover;
}

.fresco {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.textGlobal {
  font-size : 17px;
  text-align: justify;
  padding-left: 2%;
  padding-right: 2%;
  margin-top: 30px;
}

.featuresTitle {
    font-size : 20px;
  text-align: justify;
  padding-left: 2%;
  padding-right: 2%;
}

.feature {
  font-size : 17px;
  text-align: justify;
  padding-left: 5%;
  padding-right: 5%;
}

.modalContent {
  max-height : calc(90vh - 200px);
  overflow-y: auto
}

.projetDescrip {
  padding : 30px;
  color : black;
  position: relative;
}

.projetText {
  font-family: 'Merriweather', serif;
  text-align: justify;
  text-indent: 20px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  
}

.projetButtonBloc {
  font-size : 20px;
  position: absolute;
  display: flex;
  justify-content: center;
  width: calc(100% - 60px);

  margin-bottom : 30px;
  margin-left: auto;
  margin-right: auto;
  bottom: 0%;
  background-color: rgba(0, 0, 0, 0);
  border: 0;
  color : #e3581f

}

.projetButton {
  margin: 0px;
}

.projetTitle {
  font-family: 'Merriweather', serif;
  margin-top : 0px;
  
}

.projetType {
  position: absolute;
  margin-right : 30px;
  margin-top : 30px;
  right: 0%;
  top:0%;
  font-weight: bold;
  font-size: 16px;
  color : #090034;
  font-family: 'Sansita Swashed', cursive;

}



@media (max-width: 1550px) {
  .left {
    margin-left : 5%;
    margin-right : 10%;
  }

  .right {
    margin-left : 10%;
    margin-right : 5%;
  }

  .Projet {
    width : 85%;
  }
}

@media (max-width: 1265px) {
  .left {
    margin-left : 3%;
    margin-right : 3%;
  }

  .right {
    margin-left : 3%;
    margin-right : 3%;
  }

  .Projet {
    width : 94%;
  }

  .projetType {
  position: relative;
  margin-right : 0px;
  margin-top : -10px;
  font-weight: bold;
  color : #090034;

  }

}

@media (max-width: 930px) {

  .Projet {
    flex-direction: column;
    height : 600px;
  }

  .projetIllu {
    height : 50%;
    width : 100%;
    object-fit: cover;
  }

  .projetDescrip {
    height : 50%;
  }

}





</style>
