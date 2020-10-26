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
          </div>
        </div>
</template>

<script>


//window.open('https://waytolearnx.com', '_blank');
export default {
  name: 'Projets',
  props: {
    project :  {type: Object, required : true},
    right : {type: Number, default: 0 },
  },
  watch: {
     project : function () { 
       this.$refs.text.innerHTML = this.project.text
       if (this.$parent.currentModalProject.nameIndex == this.project.nameIndex)
        this.$parent.currentModalProject = this.project
    }
  },
  data: function () {
    return {
      mobile : false,
      open: false
    }
  },
  mounted : function () {
    this.$refs.text.innerHTML = this.project.text

    window.addEventListener('resize', this.onResize)
    this.onResize();
  },
  methods: {
    onResize() {
      this.mobile = (window.innerWidth <= 930) ? true : false;
    },
    toggleNodal() {
      this.$parent.currentModalProject = this.project
      this.$parent.$refs.ProjectModal.toggle()
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
</style>

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
  width : 72%;
  height : 300px;
  background-color :#b9946e; /* #e6ba8c;*/
  transition : width 1s;
}

.projetIllu {
  height : 100%;
  width : 400px;
  object-fit: cover;
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



@media (max-width: 1640px) {
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
    height : 320px;
  }

  .projetType {
  position: relative;
  margin-right : 0px;
  margin-top : -10px;
  margin-bottom: 10px;
  font-weight: bold;
  color : #090034;

  }


  .projetButtonBloc {

  margin-bottom : 18px;


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


@media (max-width: 480px) {


  .Projet {
    height : 100%;
  }


  .projetIllu{
    height: 30%;
    max-height: 200px;
    
  }

.projetText {
  margin-bottom: 30px;
}

  .projetButtonBloc {
    font-size: 16px;
    margin-left: -30px;
    width : calc(100%)
}


}





</style>
