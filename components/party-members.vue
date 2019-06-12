<template>
  <div>
    <div class="divider">
      <div class="horizontalRule"></div>
    </div>
    <div class="partyMembers">
      <h3 class="alignCenter">{{ partyMembers.group }}</h3>
      <partyMember
        v-for="member in partyMembers.members"
        v-bind:key="member.name"
        v-bind:partyMember="member">
      </partyMember>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import PartyMember from '../components/party-member.vue';

export default {
  components: {
    partyMember: PartyMember
  },
  name: 'partyMembers',
  props: ['partyMembers']
}
</script>
