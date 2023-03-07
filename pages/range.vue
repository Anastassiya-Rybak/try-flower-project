<template>
  <div class="range">
    <h1 class="range__title">Ассортимент</h1>
    <div class="range-wrapper">
      <RangeCard v-for="card in range" :key="card.id" :title="card.name" :desc="card.description.slice(0, 70)" :full-desc="card.description" :price="card.price" :image="card.img"/>
    </div>
  </div>
</template>

<script>
import RangeCard from '~/components/RangeCard';
export default {
  name: 'RangePage',
  components: {
    RangeCard
  },
  data() {
    return {
      range: [
        {
          name: 'Аглаонема',
          description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe itaque a magni, expedita totam in soluta eum dolorem praesentium quam alias necessitatibus doloribus id commodi reprehenderit enim quas assumenda nihil.',
          price: 20000,
          img: require('~/assets/range-items/WhatsAppImage2020-09-14at17.17.22.jpg')
        },
        {
          name: 'Диффенбахия',
          description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe itaque a magni, expedita totam in soluta eum dolorem praesentium quam alias necessitatibus doloribus id commodi reprehenderit enim quas assumenda nihil.',
          price: 8000,
          img: require("@/assets/range-items/dieffenbachia-compacta-12-38-2-1000x1000.jpg")
        },
        {
          name: 'Замиокулькас',
          description: 'Alias necessitatibus doloribus id commodi reprehenderit enim quas assumenda nihil.',
          price: 10000,
          img: require('@/assets/range-items/habkIArCNTMmP1PML0ZniA.jpg')
        },
        {
          name: 'Монстера',
          description: 'Saepe itaque a magni, expedita totam in soluta eum dolorem praesentium quam alias necessitatibus doloribus id commodi reprehenderit enim quas assumenda nihil.',
          price: 20000,
          img: require('@/assets/range-items/monstera-14.webp')
        },
        {
          name: 'Фикус коучуконосный',
          description: '',
          price: 25000,
          img: require('@/assets/range-items/2-50-700x678.jpg')
        },
        {
          name: 'Фикус Бэнджамина',
          description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe itaque a magni, expedita totam in soluta eum dolorem praesentium quam alias necessitatibus doloribus id commodi reprehenderit enim quas assumenda nihil.',
          price: 40000,
          img: require('@/assets/range-items/108-2.jpg')
        },
        {
          name: 'Фикус Эластика',
          description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe itaque a magni, expedita totam in soluta eum dolorem praesentium quam alias necessitatibus doloribus id commodi reprehenderit enim quas assumenda nihil.',
          price: 40000,
          img: require('@/assets/range-items/fikus-elastika-klassika-sredi-krupnyih-komnatnyih-rasteniy-06.jpg')
        },
        {
          name: 'Алоэ Байнеса',
          description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe itaque a magni, expedita totam in soluta eum dolorem praesentium quam alias necessitatibus doloribus id commodi reprehenderit enim quas assumenda nihil.',
          price: 40000,
          img: require('@/assets/range-items/baines160cm_Newflora.ru-.jpg')
        },
        {
          name: 'Сансевиерия',
          description: 'Saepe itaque a magni, expedita totam in soluta eum dolorem praesentium quam alias necessitatibus doloribus id commodi reprehenderit enim quas assumenda nihil.',
          price: 7000,
          img: require('@/assets/range-items/7-21-700x658.jpeg')
        },
        {
          name: 'Эвкалипт',
          description: 'expedita totam in soluta eum dolorem praesentium quam alias necessitatibus doloribus id commodi reprehenderit enim quas assumenda nihil.',
          price: 20000,
          img: require('@/assets/range-items/komnatnyiy-evkalipt-aromatnyiy-i-trebovatelnyiy-04.jpg')
        },
        {
          name: 'Антуриум',
          description: 'Saepe itaque a magni, expedita totam in soluta eum dolorem praesentium quam alias necessitatibus doloribus id commodi reprehenderit enim quas assumenda nihil.',
          price: 10000,
          img: require('@/assets/range-items/Антуриум_андре.jpg')
        }
      ]
    }
  },
  computed: {
  }
}
</script>

<style>
  .range {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
  h1 {
    text-align: center;
    font-size: 32px;
    color: rgb(23, 122, 49);
    margin-bottom: 50px;
  }
  .range-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>