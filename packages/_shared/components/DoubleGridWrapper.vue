<template>
  <div class="grid md:grid-cols-2 md:gap-6 py-2">
    <div class="relative z-0 mb-4 w-full group">
      <slot name="first"></slot>
    </div>
    <div class="relative z-0 mb-4 w-full group">
      <slot name="second"></slot>
    </div>
  </div>
</template>
<style scoped></style>
