<template>
  <div class="registry">
    <a class="registryImg" target="_blank" :href="registry.url">
      <img :src="registry.image" :alt="registry.name">
    </a>
    <a class="button buttonDefault" target="_blank" :href="registry.url">
      View Registry
    </a>
  </div>
</template>

<script>
export default {
  name: 'registry',
  props: ['registry']
}
</script>
