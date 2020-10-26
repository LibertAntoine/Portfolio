<template>

      <sui-modal v-model="open">
        <sui-modal-header class="modalHeader">{{ $parent.$parent.$parent.langData.contacts.title }}</sui-modal-header>
        <i id="closeX" class="large x icon" @click="toggle"></i>
              
        <sui-modal-content image class="modalContent">
            <div class="modalDescrib">
          <sui-image id="imageProfil"
          wrapped
          size="medium"
          :src="image"
        />

          <sui-modal-description class="contactContent">
               
             <p class="contactText"><span class="bold">Email :</span> <a id="mailTo" href="mailto:antoine.libert@outlook.com">antoine.libert@outlook.com</a></p>

            <p class="contactText"><span class="bold">{{ $parent.$parent.$parent.langData.contacts.tel }} :</span> (+33)6 01 21 96 91</p>
 <!--
          <sui-form>
          <sui-header dividing class="divider"></sui-header>
          <sui-form-field>
            <label>{{ $parent.$parent.$parent.langData.contacts.email }}</label>
            <sui-form-fields fields="one">
              <sui-form-field inline class="formField">
                <input
                  type="email"
                  v-model="email"
                  name="Email"
                  placeholder="example@email.fr"
                />
                <sui-label pointing="left" class="alertLabel" :class="{'visibled': !emailAlert}">{{ $parent.$parent.$parent.langData.contacts.emailAlert }}</sui-label>
              </sui-form-field>
            </sui-form-fields>
          </sui-form-field>
          <sui-form-field>
            <label>{{ $parent.$parent.$parent.langData.contacts.object }}</label>
            <sui-form-fields fields="one">
              <sui-form-field inline class="formField">
                <input
                  type="text"
                  v-model="objectMail"
                  name="ObjectMail"
                  placeholder="Internship"
                />
                <sui-label pointing="left" class="alertLabel" :class="{'visibled': !objectAlert}">{{ $parent.$parent.$parent.langData.contacts.objectAlert }}</sui-label>
              </sui-form-field>
            </sui-form-fields>
          </sui-form-field >
              
              <sui-form-field inline>
                <label>{{ $parent.$parent.$parent.langData.contacts.content }}</label>
                    <sui-label pointing="below" class="alertText alertLabel" :class="{'visibled': !textAlert}">{{ $parent.$parent.$parent.langData.contacts.contentAlert }}</sui-label>
                  <textarea rows="4" v-model="mailContent"></textarea>
              </sui-form-field>
        </sui-form>
        -->
          <div class="antiBlur" :style="{'background-image':'url('+ require('@/assets/Profil/back_contact.png') +')'}">
                    </div>
      </sui-modal-description>
      </div>
        </sui-modal-content>
        <!--
        <sui-modal-actions class="linksProject">
          <button class="ui orange button sendButton" @click="send">{{ $parent.$parent.$parent.langData.contacts.send }}</button>
        </sui-modal-actions> -->
     </sui-modal>
</template>

<script>
export default {
  name: 'CVModal',
data: function () {
    return {
        open : false,
        image : require("@/assets/Profil/profil.png"),
        email : "",
        objectMail : "",
        mailContent : "",
        emailAlert : false,
        objectAlert : false,
        textAlert : false
    }
  },
  methods : {
    toggle() {
        this.open = !this.open
    },
    send() {
          const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
          if(!this.email.match(mailformat)) { 
              this.emailAlert = true;
              setTimeout(() => {
                this.emailAlert = false;
              }, 3000);
          }
          else if(this.objectMail == "") {
              this.objectAlert = true;
              setTimeout(() => {
                this.objectAlert = false;
              }, 3000);
          }
          else if(this.mailContent == "") {
              this.textAlert = true;
              setTimeout(() => {
                this.textAlert = false;
              }, 3000);
          }
          else {
            console.log("ok")
          }
      }
    
  }
}

</script>


<style scoped>



.divider {
    border-color : #c02525 !important;
    border-top : 0px !important;
}

.modalDescrib {
    position: relative;
    z-index: 1000 !important;
    display:flex;
    align-items: center; /* A enlever avec le formulaire */
}

.antiBlur {
    position: absolute !important;
    top:0%;
    left:0%;
    filter: blur(8px);
    background-size: cover !important;
    background-position: center !important;
    overflow: hidden !important;
    margin-left : -40px;
    margin-top : -40px;
    margin-bottom : -200px;
    width: 180%;
    height: 140%;
    z-index: -1 !important;
    opacity: 0.45;
}


.linksProject {
    background-color: rgba(19, 19, 19, 1) !important;
 /*background: linear-gradient(90deg, rgba(2,0,36,1) 0%, #090034 31%,#e3581f 120%) !important;*/
}

.modalHeader {
    background-color: rgba(19, 19, 19, 1) !important;
  /*background: linear-gradient(90deg, rgba(2,0,36,1) 0%, #090034 31%,#e3581f 120%) !important;*/
  font-family: 'Sansita Swashed', cursive !important;
  color: #c02525 !important;
}

.formField {
    
  max-width: 100%;
  width: 100%;
}

label {
    
  color: #c02525 !important;
  font-size : 14px !important;
  font-weight: bold;
}

textarea {
   color: #b9946e !important;
   background-color: rgba(19, 19, 19, 0.9) !important;
font-family: 'Merriweather', serif ;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #b9946e !important; 
  opacity: 0.6; /* Firefox */
}


input {
    color: #b9946e !important; 
    background-color: rgba(19, 19, 19, 0.9) !important;
  max-width: 100%;
  width : 60% !important;
  font-family: 'Merriweather', serif !important;
}


.contactContent {
    margin-left: 30px;
  width : 100% !important;
  
}


.bold {
  font-weight: bold;
  color: #c02525;
}

.contactText {
  color: #e3581f;
   font-size: 16px;
}

a {
  color: #e3581f !important;
  transition : color 0.7s;
}

a:hover {
   color:#c02525 !important;
}

.visibled {
  opacity: 0 !important;
}


#closeX {
  position: absolute;
  color:#c02525 !important;
  top : 23px;
  right : 20px;
  opacity : 0.7;
  transition : opacity 0.7s;
}

#closeX:hover {
  opacity : 1;
}

.modalContent::-webkit-scrollbar {
  display: none;
}

.modalContent {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

@media (max-width: 768px) {
    #closeX {
    top : 16px;
    right : 12px;
  }

    .modalDescrib {
        flex-direction: column;
        align-items: center;
    }

    #imageProfil {
        width: 200px !important;
    }

    .contactContent {
        width: 90% !important;
        margin-top : 20px;
        margin-left: 0px ;
    }

    .contactText {
        text-align: center;

    }

}

.alertText {
  margin-left : 40px;

}

.alertLabel {
  background-color: #ffbaba;
  color : #c02525;
  opacity: 1;
  transition : opacity 0.7s;
}


.modalContent {
        background-color: rgba(0, 0, 0, 1) !important;
  /*background: linear-gradient(90deg, rgba(2,0,36,1) 0%, #090034 31%,#e3581f 120%) !important;*/
   font-family: 'Sansita Swashed', cursive;
   overflow: hidden;
}

</style>