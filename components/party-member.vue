<template>
  <div class="partyMember divider">
    <h4 class="alignCenter">{{ partyMember.name }}</h4>
    <h5 class="alignCenter">{{ partyMember.description }}</h5>
  </div>
</template>

<script>
export default {
  name: 'partyMember',
  props: ['partyMember']
}
</script>
