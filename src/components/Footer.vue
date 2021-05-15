<template>
  <div class="footer">
    <div class="left">左</div>
    <div class="right">右</div>
  </div>
</template>

<script>
export default {
  name: 'Footer',

  components: {},

  mixins: [],

  props: {},

  data() {
    return {}
  },

  computed: {},

  watch: {},

  created() {},

  methods: {}
}
</script>
<style scoped>
.footer {
  height: 50px;
  border-top: 1px solid #e9e9e9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
</style>
