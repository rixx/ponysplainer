<template>
  <div id="home">
    <h1>What do you want to do?</h1>
    <div id="blocks" v-if="! (ticket || waiting)">
        <div class="block">I want to report a bug in Django!</div>
        <div class="block">
            Tell me more about this ticket!
            <input type=text placeholder="Ticket ID or URL">
        </div>
        <div class="block">I want to request a feature in Django!</div>
    </div>
    <div></div>
  </div>
</template>

<script>
import Vue from 'vue'
import moment from 'moment'
import api from 'lib/api'
export default {
  name: 'finalize',
  components: {
  },
  data () {
    return {
      ticket: null,
      error: null,
      waiting: false
    }
  },
  computed: {
    currentDate () {
      if (this.location && this.location.current_event && this.location.current_event.datetime) { return moment(this.location.current_event.datetime).format('DD.MM.') }
      return null
    }
  },
  created () {
  },
  mounted () {
    this.$nextTick(() => {
      this.update().then(result => { this.waiting = false })
    })
  },
  methods: {
    closeCollection (collection) {
      Vue.set(collection, 'loading', true)
      api.fetch('collection.close', { auth_token: this.$route.params.token, collection_id: collection.id }, 1).then(response => { this.update().then(response => { Vue.set(collection, 'loading', false) }) })
    },
    update () {
      api.fetch('location.info', { auth_token: this.$route.params.token }, 1).then(response => { this.location = response; this.waiting = false }).catch(response => { this.error = response; this.waiting = false })
    }
  }
}
</script>

<style lang="stylus">
#home
  display: flex
  flex-direction: column
  height: 100%
  min-height: 93vh
  justify-content: space-between
  h1
    text-align: center

  #blocks
    display: flex
    flex-direction: row
    width: 100%
    justify-content: space-around
    font-size: 26px;

    .block
      display: flex
      flex-direction: column
      min-width: 400px
      margin: 8px;
      padding: 16px;
      text-align: center
      border: #0C4B33 2px solid
      justify-content: center
      cursor: pointer
      box-shadow: 0px 0px 4px 0px rgba(12,75,51,1);
      transition: all 100ms
      &:hover
        box-shadow: 0px 0px 8px 2px rgba(12,75,51,1);
      input
        text-align: center;
        font-size: 20px;
        height: 45px;

@media screen and (max-width: 600px)
  #blocks
    flex-direction: column
  footer p
    display: none
</style>
