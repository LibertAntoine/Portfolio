<template>
    <section>
      <div id="Footer"> 
          <p id="footerName">Antoine Libert<p>
          <p><i class="phone icon"></i>(+33)6 01 21 96 91</p>
          <p><i class="envelope outline icon"></i><a id="mailTo" href="mailto:antoine.libert@outlook.com">antoine.libert@outlook.com</a></p>
          <p>
            <a href="https://www.facebook.com/antoine.libert.50" target="_blank"><i class="facebook icon huge linkicon"></i></a>
            <a href="https://www.linkedin.com/in/antoine-libert-ab28b0107/" target="_blank"><i class="linkedin icon huge linkicon"></i></a>
            <a href="https://github.com/LibertAntoine" target="_blank"><i class="github square icon huge linkicon"></i></a>
          </p>
          <p>Copyright © Portfolio Antoine Libert 2020</p>
      </div>
    </section>
</template>

<script>
export default {
  name: 'Footer'
}

</script>


<style scoped>

#mailTo {
  color : #e3581f;
  transition : color 0.2s;
}

#mailTo:hover {
  color : #c02525;
}


#footerName {
  font-size : 30px;
  font-weight: bold;
  margin-bottom: 0px;
  
}

i {
  color : #c02525;
  transition : color 0.7s;
}

.linkicon:hover {
  color : #e3581f;
}

#Footer {
  height : 300px;
  text-align: center;
  color: #e3581f;
}

</style>
