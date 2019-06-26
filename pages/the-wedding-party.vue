<template>
  <section class="container">
    <div class="content">
      <h2 class="subtitle alignCenter divider">
        {{ headerTitle }}
      </h2>
      <div class="weddingParty">
        <partyMembers
          v-for="partyMembers in weddingParty"
          v-bind:key="partyMembers.name"
          v-bind:partyMembers="partyMembers">
        </partyMembers>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue';
import PartyMembers from '../components/party-members.vue';

let title = `The Wedding Party`;
export default {
  components: {
    partyMembers: PartyMembers
  },
  data() {
    return {
      headerTitle: title,
      weddingParty: [
        {
          group: `Matron of Honor`,
          members: [
            {
              name: `Beth Lynch`,
              description: `Childhood Friend, Locker Buddy, Partner In Crime`,
              backstory: null
            }
          ]
        },
        {
          group: `Bridesmaids`,
          members: [
            {
              name: `Melissa Cain`,
              description: `Sister-In-Law`,
              backstory: null
            },
            {
              name: `Rachael Savage`,
              description: `Waterfall Chaser, Mosquito Magnet, and Champagne  Enthusiast`,
              backstory: null
            },
            {
              name: `Heather Hoag`,
              description: `Childhood Friend`,
              backstory: null
            },
            {
              name: `Amy Sullivan`,
              description: `Childhood Friend`,
              backstory: null
            },
            {
              name: `Meghan Scibelli`,
              description: `Childhood Friend`,
              backstory: null
            },
            {
              name: `Caitlin Rowe`,
              description: `Childhood Friend`,
              backstory: null
            },
            {
              name: `Erin Conley`,
              description: `Childhood Friend`,
              backstory: null
            },
            {
              name: `Lisa Lawrence`,
              description: `College Roommate`,
              backstory: null
            },
            {
              name: `Caitlin Bryson`,
              description: `College Roommate`,
              backstory: null
            }
          ]
        },
        {
          group: `Groomsmen`,
          members: [
            {
              name: `Daniel Giroux`,
              description: `Childhood Friend`,
              backstory: null
            },
            {
              name: `Brian Corn`,
              description: `Former Roommate, Fellow Ski Bum`,
              backstory: null
            },
            {
              name: `Samuel Rossetti`,
              description: `College Friend, Fellow Ski Bum`,
              backstory: null
            },
            {
              name: `Nicholas Savage`,
              description: `Inner Tube Water Polo Expert`,
              backstory: null
            },
            {
              name: `Jonathan Schulz`,
              description: `College Friend`,
              backstory: null
            },
            {
              name: `Fred Cain`,
              description: `Brother of the Bride`,
              backstory: null
            }
          ]
        },
        {
          group: `Ring Bearer`,
          members: [
            {
              name: `Bryer Cain`,
              description: `Nephew`,
              backstory: null
            }
          ]
        },
        {
          group: `Flower Girls`,
          members: [
            {
              name: `Nora Lynch`,
              description: `Goddaughter`,
              backstory: null
            },
            {
              name: `Brooklyn Cain`,
              description: `Niece`,
              backstory: null
            }
          ]
        }
      ]
    }
  },
  head: {
    title: `${title} | Eric Schnetzer and Jennifer Cain | July 20, 2019`,
  }
}
</script>
