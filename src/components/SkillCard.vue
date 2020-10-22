<template>
        <div class="SkillCard">
            <p class="skillIcon"><i ref="icon" class="fas"></i></p>
            <h3 class="SkillTitle">{{ card.title }}</h3>
              <ul class="bullets">
                <li v-for="bullet in card.bullets" :key="bullet" class="bullet"><span class="bulletContent">{{ bullet }}</span></li>
              </ul>
              <div class="skillButton"><button class="ui inverted red button skillbuttonitem">{{ $parent.$parent.$parent.langData.skills.skillButton }}</button></div>
        </div>
</template>

<script>

export default {
  name: 'SkillCard',
  props: {
    card : {type: Object, required : true},
  },
  mounted: function () {
    this.$refs.icon.classList.add(this.card.icon)
  }
}
</script>


<style scoped>

.skillbuttonitem {

  border-radius : 30px !important;
}

.skillButton {
  position: absolute;
  bottom: 35px;
  text-align: center;
  width: calc(100% - 40px);
  
}


.skillIcon {
 margin-top : 17px;
 text-align: center;
}

.fas {
  font-size : 60px;
}

.textCard {
  text-align: justify;
  text-indent: 20px;
  color : #ff8f60;
  font-size : 14px;
}

.bullets {
  margin-left : -6px;
  margin-right : 20px;
  margin-top : 18px;
  color : #c02525;
}

.bulletContent {
  color : #ff8f60;
}

.bullet {
  text-align: justify;
  margin-top : 15px;
  font-size : 16px;
}

.SkillCard {
  position: relative;
  font-family: 'Oxygen', sans-serif;
  width : 370px;
  height : 480px;
  background-color:  rgba(12,12,12,0.65);;
  box-shadow: 0 4px 10px 0 rgba(0,0,0,1);
  border-radius: 6px;
  color : #e3581f;
  padding : 20px;
}

.SkillTitle {
  font-family: 'Sansita Swashed', cursive;
  margin-top : 15px;
  margin-bottom : 25px;
  font-size : 30px;
  text-align: center;
}

</style>
