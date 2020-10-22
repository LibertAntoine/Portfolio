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



      <sui-modal v-model="open">
        <sui-modal-header>Hello</sui-modal-header>
        <i id="closeX" class="large x icon" @click="toggleModal"></i>
        <sui-modal-content image>
        Content
        </sui-modal-content >
        <sui-modal-actions class="linksProject">
          <button class="ui orange button" @click="toggleModal">OK</button>
        </sui-modal-actions>
     </sui-modal>


    </section> 
</template>

<script>
import SkillCard from '@/components/SkillCard.vue'

export default {
  name: 'Skills',
  components : {
    SkillCard
  },
  data: function () {
    return {
      open: false
    }
  },
  methods: {
    toggleModal() {
      this.open = !this.open;
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
    color: #e3581f;
  font-family: 'Merriweather', serif;
  font-size : 16px;
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
</style>
