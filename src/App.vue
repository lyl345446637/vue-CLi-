<template>
   <div id="app">
     <router-view/>
   </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      input: '',
      num: 1
    }
  },
  methods: {}
}
</script>

<style lang="less"></style>
