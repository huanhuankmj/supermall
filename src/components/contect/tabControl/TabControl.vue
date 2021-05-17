<template>
  <div class="tabControl">
    <div class="tabControlItem"
         v-for="(item,index) in titles"
         :class="{itemActive:isActive === index}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      isActive: 0
    }
  },
  props:{
    titles:{
      type:Array,
      default() {
        return []
      }
    }
  },
  methods:{
    itemClick(index) {
      this.isActive = index;
      this.$emit("itemClick",index)
    }
  }
}
</script>

<style scoped>
  .tabControl {
    display: flex;
    text-align: center;
    height: 40px;

    background-color: #fff;
  }

  .tabControlItem{
    margin-top: 10px;
    margin-bottom: 10px;
    flex: 1;
  }

  .tabControlItem span{
    padding: 5px;
  }

  .itemActive span{
    color: var(--color-tint);
    border-bottom: 3px solid var(--color-tint);
  }

</style>
