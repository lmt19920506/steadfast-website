<template>
  <div
    class="dialog"
    :class="{ 'is-show': visible }"
    :style="display ? 'display: none' : ''"
  >
    <!-- 不透明遮罩 -->
    <div class="dialog-modal" @click.self="closeDialog"></div>

    <!-- 主体 -->
    <div class="dialog-main">
      <div class="dialog-head">
        <button class="button icon-botton" @click="closeDialog">x</button>
      </div>

      <!-- 内容区 -->
      <div class="dialog-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      visible: false,
      display: true,
    };
  },
  methods: {
    // 关闭弹窗
    closeDialog() {
      clearTimeout(this.timer);
      this.visible = false;
      this.timer = setTimeout(() => {
        this.display = false;
        clearTimeout(this.timer);
      }, 300);
    },
  },
  computed: {
    isShow: {
        get() {
            return this.value
        },
        set(val) {
            this.$emit('input', val)
        }
    }
  }
};
</script>

<style scoped>
@import "./modal.scss";
</style>