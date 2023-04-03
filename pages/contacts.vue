<template>
  <div class="contacts">
    <h1>Наши контакты</h1>
    <div class="contacts__tel">
      <span>
        <nuxt-link to="tel:+00000000000">+0-000-000-00-00</nuxt-link><br><br>
        <nuxt-link to="mailto:flowerses@flower.org">flowerses@flower.org</nuxt-link>
      </span>
    </div>
    <div class="contacts__social-media">
      <div class="contacts__social-media__instagram">
        <nuxt-link to="">
          <img src="~/assets/icons/free-icon-instagram-174855.png" alt="">
        </nuxt-link>
      </div>
      <div class="contacts__social-media__whatsapp">
        <nuxt-link to="">
          <img src="~/assets/icons/free-icon-whatsapp-174879.png" alt="">
        </nuxt-link>
      </div>
      <div class="contacts__social-media__youtube">
        <nuxt-link to="">
          <img src="~/assets/icons/free-icon-youtube-174883.png" alt="">
        </nuxt-link>
      </div>
    </div>
    <form class="contacts__form" action="" method="POST">
      <label for="ClientTel">Оставьте свой номер и мы свяжемся с Вами.</label>
      <input v-model="phone" class="contacts__form__tel" name="ClientTel" type="tel" maxlength="11" @keyup.enter="isANum, sentOn">
      <span v-if="someErrors" class="error">Не верно введены данные</span>
      <input class="contacts__form__btn" type="button" :value="sendOrSent.text" :style="{background: sendOrSent.backColor}" @click="isANum($event), sentOn($event)">
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactsPage',
  data() {
    return {
      phone: '',
      someErrors: false,
      sendOrSent: {text: 'Отправить', backColor: 'rgb(23, 122, 49)'},
    }
  },
  methods: {
    isANum(event) {
      event.preventDefault();
      const regex = /[a-zа-яё]/;
      if(regex.test(this.phone) || this.phone.length <= 0 || this.phone.length < 11 || this.phone.includes('+')){
        this.someErrors=true;
      } else {
        this.someErrors=false;
        this.phone='';
      }
    },
    sentOn(event) {
      event.preventDefault();
      if(!this.someErrors) {
        this.sendOrSent.text='Отправлено';
        this.sendOrSent.backColor='rgb(45, 228, 94)';
      }
    }
  }
}
</script>

<style>
  .contacts {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .contacts__tel {
    text-align: center;
    line-height: 10px;
    margin: -10px auto 20px;
  }
  .contacts__tel a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.599);
  }
  .contacts__social-media {
    display: flex;
    width: 20%;
    margin: 20px auto;
    justify-content: space-around;
    
  }
  .contacts__social-media div {
    width: calc(20% - 5px);
  }
  .contacts__social-media div img {
    width: 100%;
    /* height: 100%;
    object-fit: cover; */
  }
  .contacts__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0;
  }
  .contacts__form label {
    font-size: 12px;
  }
  .contacts__form__tel {
    margin: 5px auto 10px;
    padding: 5px;
    border-radius: 5px;
    width: 90%;
  }
  .contacts__form__btn {
    width: 52%;
    margin: 0 auto;
    padding: 5px;
    background-color: rgb(23, 122, 49);
    border: none;
    border-radius: 5px;
    box-shadow: 2px 1px 5px rgba(1, 5, 5, 0.429);
    cursor: pointer;
  }
  .contacts__form__btn:active {
    box-shadow: none;
  }
  .error {
    color: red;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.212);
    font-size: 12px;
    margin: 10px;
  }
</style>