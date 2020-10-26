<template>
  <section class="Skills">
      <h2 id="titleForm">{{ $parent.$parent.langData.skills.title }}</h2>
      <div class="describBloc"><p>{{ $parent.$parent.langData.skills.text }}</p></div>
      <div id="contact">
        <button id="contactButton" @click="toggleModal">{{ $parent.$parent.langData.skills.contactButton }}</button>
      </div>
      <div id="SkillsBlocs">
        <SkillCard v-for="card in $parent.$parent.langData.skills.cards" :key="card.title" :card="card" />
      </div>
      <ContactsModal ref="ContactsModal"/>
    </section> 
</template>

<script>
import SkillCard from '@/components/SkillCard.vue'
import ContactsModal from '@/components/ContactsModal.vue'

export default {
  name: 'Skills',
  components : {
    SkillCard,
    ContactsModal
  },
  methods: {
    toggleModal() {
      this.$refs.ContactsModal.toggle()
    }
  }
}

</script>

<style scoped>






.describBloc {
  margin-top : 40px;
  text-align: justify;
  margin-left : 60px;
  width: 40%;
    color:#ff8f60;
  font-family: 'Merriweather', serif;
  font-size : 16px;
  transition : width 1s;
}

#titleForm {
  font-family: 'Sansita Swashed', cursive;
}

.Skills {
  margin-top: 100px;
  padding-left: 8%;
  padding-right: 8%;
  padding-bottom: 200px;
}

h2 {
  margin-left : 60px;
  font-size: 30px;
  color : #e3581f;
}

#SkillsBlocs {
  margin-top : 120px;
  display : flex;
  justify-content: space-between; /* ou space-around */
}

#contact {
  position: absolute;
  top : 690px;
  right : 27%;
  transition : right 1s, top 1s;
}

#contactButton {
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
  transition : top 0.7s, left 0.7s, box-shadow 0.7s, background-color 0.7s;
}

#contactButton:hover {
  top : 4px;
  left : 4px;
  box-shadow: 0px 0px 10px 0 rgba(0,0,0,0.35);
background-color: #a93636;
}


@media (max-width: 1410px) {
  #SkillsBlocs {
      flex-wrap: wrap;
      padding: 0% 21% 0% 21%;
      
  }
}


@media (max-width: 1255px) {
  #SkillsBlocs {
      flex-wrap: wrap;
      padding: 0% 17% 0% 17%;

  }
}


@media (max-width: 1070px) {
  #SkillsBlocs {
      flex-wrap: wrap;
      padding: 0% 14% 0% 14%;

  }
}



@media (max-width: 970px) {
  #SkillsBlocs {
      flex-direction: column;
      align-items: center;
      flex-wrap: wrap;
      padding: 0% 0% 0% 0%;
      transition : none;
  }
}






@media (max-width: 1270px) {
    #contact {
      top : 720px;
      right : 13%;
  }

  .describBloc {
    width: 60%;

  }
}

@media (max-width: 1000px) {
    #contact {
      top : 750px;
      right : 10%;
  }

  .describBloc {
    width: 55%;

  }
}


@media (max-width: 900px) {
    #contact {
      top : 930px;

  }

  .describBloc {
    width: 80%;
    margin-bottom: 100px;

  }
}


@media (max-width: 670px) {
    #contact {
      position: relative;
      transition : none;
      top : 0px;
      text-align: right;
      width : 100%;

  }



  .describBloc {
    width: 90%;
    margin-left : 20px;
    margin-bottom: 60px;
  }

  #titleForm {
    margin-left : 20px;

  }
}



</style>
