<template>
      <ul class="sidenav app-sidenav " :class="{open: value}">
        
        <router-link
          v-for="link in links"
          :key="link.url"
          tag="li"
          active-class="active"
          :to="link.url"
          :exact="link.exact"
        >
          <a href="#" class="waves-effect waves-black pointer grey-text text-darken-2">{{ link.title }}</a>
        </router-link>
      </ul>
</template>

<script>
export default {
  props: ['value'],
  data: () => ({
    links: [
      {title: 'Счет', url: '/', exact: true},
      {title: 'История', url: '/history'},
      {title: 'Планирование', url: '/planning'},
      {title: 'Новая запись', url: '/record'},
      {title: 'Категории', url: '/categories'}
    ]
  })
}
</script>

<style lang="scss">
.sidenav {
  background: linear-gradient(315deg, #e6e6e6, #ffffff);
  box-shadow:  -20px -20px 60px #d9d9d9, 
                20px 20px 60px #ffffff;
}
</style>
