<template>
  <div
    v-if="isVisible"
    class="modal"
    :class="className"
    @click.self="closeModal"
  >
    <div class="modal__inner">
      <button @click="emit('close')" class="modal__close-btn">Close</button>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  maxWidth: {
    type: String,
    default: "600px",
  },

  persistent: {
    type: Boolean,
    default: true,
  },

  className: {
    type: String,
    default: "",
  },
});

const isVisible = defineModel({ default: false });
const emit = defineEmits(["close"]);

const closeModal = () => {
  if (!props.persistent) {
    emit("close");
  }
};

const handleEscapeKey = (event) => {
  if (event.key === "Escape" && isVisible && !props.persistent) {
    closeModal();
  }
};

onMounted(() => {
  document.addEventListener("keydown", handleEscapeKey);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleEscapeKey);
});
</script>
