<template>
    <section>
      <div class="Projets"> 
        <h2 id="projectTitle">{{ $parent.$parent.langData.metaproject.title }}</h2>
        <div id="Catégories">
          <button  v-for="(categorieName, index) in $parent.$parent.langData.metaproject.categoriesName" 
            :key="categorieName" class="catButton" 
            @click="changeCategorie($parent.$parent.langData.metaproject.categories[index])" 
            :class="{'selected': ($parent.$parent.langData.metaproject.categories[index] == currentCategorie)}"
            >
            {{ categorieName }}
          </button>
        </div>
        
        <div class="AllProject">
        <div id="catDescrib"><p>{{ $parent.$parent.langData.metaproject.textCategories[currentCategorie] }}</p></div>
        <Projet v-for="(project, index) in selectProject" :key="project.title" :project="project" :right="index % 2" />
        </div>
        <div id="moreButtonBloc" v-if="categorieProject.length > currentViewProject">
          <button id="moreButton" @click="expendCategorie()">{{ $parent.$parent.langData.metaproject.moreButton }}</button>
        </div>
      
      </div>
      <ProjectModal ref="ProjectModal" :project="currentModalProject"/>
      
    </section>
</template>

<script>
import Projet from '@/components/Projet.vue'
import ProjectModal from "@/components/ProjectModal.vue"


export default {
  name: 'Projets',
  components: {
    Projet,
    ProjectModal
  },
  data: function () {
    return {
      all : true,
      currentCategorie: "All",
      currentModalProject: this.$parent.$parent.langData.projects[0],
      currentViewProject: 3
    }
  },
  computed: {
    categorieProject : function () {
      return this.$parent.$parent.langData.projects.filter(this.verifCategorie)
    },
    selectProject : function () {
      return this.$parent.$parent.langData.projects.filter(this.verifCategorie).slice(0, this.currentViewProject)
    }
  },
  methods : {
    changeCategorie : function (categorie) {
      this.currentViewProject = 3
      this.currentCategorie = categorie
    },
    verifCategorie : function (projet) {
      return this.currentCategorie == "All" || projet.categories.includes(this.currentCategorie)
    },
    expendCategorie : function () {
      this.currentViewProject += 2
    }
  }
}

</script>


<style scoped>

#catDescrib {
  margin : 0 auto;
  width : 60%;
  text-align: center;
  color: #b9946e;
  font-family: 'Merriweather', serif;
  font-size : 16px;
  margin-bottom : 60px;
}


#projectTitle {
  position : relative;
  top: -180px;
  padding-top : 50px;
  text-align: center;
  font-size : 40px;
  color:#e3581f;
  font-family: 'Sansita Swashed', cursive;
}

.AllProject {
  margin-top : -230px;
}

.Projets {
  margin-top:80px;
  margin-left : 8%;
  margin-right : 8%;
  padding-bottom: 50px;
  background-color:  rgba(12,12,12,0.65);
  box-shadow: 0 4px 10px 0 rgba(0,0,0,1);
  border-radius : 40px;
  margin-bottom : 80px;
  transition: margin-left 1s, margin-right 1s;
}

#Catégories {
  position : relative;
  top: -185px;
  width : 60%;
  margin-left : 20%;
  margin-right : 20%;
  margin-bottom : 100px;
  display: flex;
  justify-content: space-around;
  transition : width 1s, margin-left 1s,  margin-right 1s;
}


.catButton {
  position:relative;
  transition : top 0.7s, left 0.7s, box-shadow 0.7s, background-color 0.7s;
  margin-top : 50px;
  padding : 15px 30px 15px 30px;
  background-color : #e3581f;
  border : 0;
  font-size : 20px;
  color : white;
  box-shadow: 4px 4px 10px 0 rgba(0,0,0,0.70);

  top : 0px;
  left : 0px;
  font-family: 'Sansita Swashed', cursive;
  border-radius : 6px;

}

.catButton:hover {
  top : 4px;
  left : 4px;
  box-shadow: 0px 0px 10px 0 rgba(0,0,0,0.35);
  background-color : #a93636;
}

.selected {
    top : 4px;
  left : 4px;
  box-shadow: 0px 0px 10px 0 rgba(0,0,0,0.35);
  background-color : #a93636;
}

#moreButton {
  margin-top : 20px;
  padding : 15px 30px 15px 30px;
  background-color : #e3581f;
  border : 0;
  font-size : 20px;
  color : white;
    position:relative;
    top : 0px;
  left : 0px;
    font-family: 'Sansita Swashed', cursive;
    transition : top 0.7s, left 0.7s, box-shadow 0.7s, background-color 0.7s;
      box-shadow: 4px 4px 10px 0 rgba(0,0,0,0.70);
}

#moreButtonBloc {

  display: flex;
  justify-content: center;
}

#moreButton:hover {
  top : 4px;
  left : 4px;
  box-shadow: 0px 0px 10px 0 rgba(0,0,0,0.35);
   background-color :  #a93636;
}

@media (max-width: 1677px) {

.Projets {

  margin-left : 4.5%;
  margin-right : 4.5%;

}

}

@media (max-width: 1472px) {

.Projets {

  margin-left : 3%;
  margin-right : 3%;

}

#Catégories {

  width : 70%;
  margin-left : 15%;
  margin-right : 15%;

}

}

@media (max-width: 1410px) {
.Projets {
  margin-top :-20px;
  margin-left : 3%;
  margin-right : 3%;

}
}

@media (max-width: 1265px) {

  
  #Catégories {

    width : 80%;
    margin-left : 10%;
    margin-right : 10%;

  }
}


@media (max-width: 1090px) {

  
  #Catégories {
    flex-wrap: wrap;
    width : 80%;
    margin-left : 10%;
    margin-right : 10%;

  }
}

@media (max-width: 500px) {

  
  #catDescrib {
    display : none;

  }
}




</style>
