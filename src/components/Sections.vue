<template>
  <div class="Sections">
    <Headband />
    <Skills ref="Skills"/>
    <Projets ref="Projects"/>
    <Footer />
  </div>
</template>

<script>
  import Headband from '@/components/Headband.vue'
  import Skills from '@/components/Skills.vue'
  import Projets from '@/components/Projets.vue'
  import Footer from '@/components/Footer.vue'

export default {


  name: 'Sections',
  components : {
    Headband,
    Skills,
    Projets,
    Footer
  },
  methods: {
    test: function () {
      console.log("test");
    }
  }

}

</script>


<style scoped>

.Sections {
    position: absolute;
    top : calc(100% - 170px);
    z-index: 3; 
    width: 100%;
}
</style>
