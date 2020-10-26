<template>
      <sui-modal v-model="open">
        <sui-modal-header class="modalHeader">{{ $parent.$parent.$parent.langData.headband.cvTitle }}</sui-modal-header>
        <div id="CVIcons">
            <a :href="($parent.$parent.$parent.langData.lang == 'Français') ? imageFR : imageEN" download>
                <i id="download" class="large download icon"></i>
            </a>
            <i id="closeX" class="large x icon" @click="toggle"></i>
        </div>
        <sui-modal-content image id="modalContentCV">
          <sui-image id="cv"
          wrapped
          size="medium"
          :src="($parent.$parent.$parent.langData.lang == 'Français') ? imageFR : imageEN"
        />
        </sui-modal-content>
     </sui-modal>
</template>

<script>
export default {
  name: 'CVModal',
data: function () {
    return {
        open : false,
        imageFR : require('@/assets/CV/CV_FR.jpg'),
        imageEN : require('@/assets/CV/CV_EN.jpg'),
    }
  },
  methods : {
    toggle() {
        this.open = !this.open
    }
  }
}

</script>


<style scoped>

.modalHeader {
  font-family: 'Sansita Swashed', cursive !important;
  color : #a93636 !important;
  background-color: rgba(19, 19, 19, 1) !important;
  /*background-color: #ffcab7 !important;*/
}



#modalContentCV {
    background-color: rgba(50, 50, 50, 1) !important;
    padding: 0px !important;
    max-height : calc(90vh - 100px);
    overflow-y: auto;
}

#cv {
    width: 100%;
    padding: 0px ! important;
}

#CVIcons {
  position: absolute;
  top : 23px;
  right : 20px;
}


@media (max-width: 768px) {
  #CVIcons {
  top : 16px;
  right : 12px;
}
}

#download {
    margin-right : 10px;
}

.icon {
  opacity : 0.7;
  transition : opacity 0.7s;
  color : #a93636 !important;
}

.icon:hover {
  opacity : 1;
}

</style>