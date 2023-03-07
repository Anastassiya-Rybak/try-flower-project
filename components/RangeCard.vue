<template>
  <div>
    <div class="range__plants-card">
      <div v-show="!moreDescriptionOn" class="range__plants-card__img" >
        <img  :src="image" :alt="title">
      </div>
      <h2 class="range__plants-card__title">{{ title }}</h2>
      <p v-show="!moreDescriptionOn" class="range__plants-card__desc">
        {{ desc }}
        <span class="show-more-description" @click="showMoreDescription"> {{ tooLongDesc }} </span>
      </p>
      <p v-show="moreDescriptionOn" class="range__plants-card__desc">
        {{ fullDesc }} <br>
        <span v-show="moreDescriptionOn" class="hide-full-desc" @click="closeMoreDescription"
        > Свернуть </span>
      </p>
      <span class="range__plants-card__price">
        {{ price }}тг
      </span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'RangeCard',
  props: {
    title: {
      type: String,
      required: true,
      default: ""
    },
    desc: {
      type: String,
      required: true,
      default: ""
    },
    fullDesc: {
      type: String,
      required: true,
      default: ""
    },
    price: {
      type: Number,
      default: 0,
      required: false
    },
    image: {
      type: String,
      required: true,
      default: ""
    },

  },
  
  data() {
    return {
      moreDescriptionOn: false
    }
  },

  computed: {
    tooLongDesc() {
      return this.desc.length > 68 ? 'Больше...' : ''
    }
  },

  methods: {
    showMoreDescription() {
      this.moreDescriptionOn = true;
    },
    closeMoreDescription() {
      this.moreDescriptionOn = false;
    }
  },
}
</script>

<style>
  .range__plants-card {
    /* width: 100%; */
    width: 275px;
    height: 60vh;
    min-height: 350px;
    max-height: 450px;
    background-color: rgba(27, 122, 46, 0.264);
    border-radius: 10px;
    box-shadow: 1px 1px 15px rgba(0, 3, 3, 0.21);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }
  .range__plants-card__img {
    width: 90%;
    margin-top: 12px;
    height: 60%;
    min-height: 220px;
    max-height: 320px;
    overflow: hidden;
  }
  .range__plants-card__img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .range__plants-card__title {
    font-size: 20px;
    margin: 10px 0 0;
  }
  .range__plants-card__desc {
    font-size: 14px;
    text-align: center;
    max-width: 90%;
    margin: 10px 0 10px;
  }
  .show-more-description {
    text-decoration: underline;
    line-height: 10px;
    cursor: pointer;
  }
  .show-more-description:hover {
    opacity: 0.7;
  }
  .hide-full-desc {
    text-decoration: underline;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
    color: rgb(6, 97, 42);
  }
  .hide-full-desc:hover {
    opacity: 0.7;
  }
  .range__plants-card__price {
    font-weight: 800;
    letter-spacing: 3px;
    margin-bottom: 10px;
  }
</style>