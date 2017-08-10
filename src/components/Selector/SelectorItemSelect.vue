<template>
  <div class="select-wrap">
    <div class="title">{{selectorItem.title}}</div>
    <select name="" id="" @change="changeSelect($event.target.value)">
      <option :value="item.val" v-for="(item, index) of selectorItem.list" :key="item.text" :checked="!index">{{item.text}}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    selectorItem: Object
  },
  created () {
    this.$store.commit('addSearchCondition', {key: this.selectorItem.keyword, value: String(this.value)})
  },
  destroyed () {
    this.$store.commit('removeSearchCondition', {key: this.selectorItem.keyword})
  },
  data () {
    return {
      value: ''
    }
  },
  watch: {
    value () {
      this.$store.commit('updateSearchCondition', {key: this.selectorItem.keyword, value: String(this.value)})
    }
  },
  methods: {
    changeSelect (val) {
      this.$store.commit('updateSearchCondition', {key: this.selectorItem.keyword, value: String(val)})
    }
  }
}
</script>

<style lang='less' scoped>
.select-wrap{
  display: flex;
  line-height: 24px;
  margin-right: 45px;
  select {
    height: 24px;
    text-decoration: none;
    color: #333;
    cursor: pointer;
    font-size: inherit;
    border-radius: 0;
  }
}
</style>
