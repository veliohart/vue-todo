<script>
  export default {
    name: 'layout',
    data: () => {
      return {
        all: {},
        done: () => {

        },
        active: () => {},
        initialValue: ''
      }
    },
    beforeMount: function () {
      const email = 'test@mail.com'
      const password = 'testpassword'
      this.$fireApp.auth().signInWithEmailAndPassword(email, password).catch(error => {
        // Handle Errors here.
        this.errorCode = error.code
        this.errorMessage = error.message
      })
    },
    mounted: function () {
      this.$fireDB.ref('todos')
        .on('value', (snapshot) => {
          console.log('snapshot.val()', snapshot.val())
          this.all = snapshot.val()
        })
    },
    methods: {
      add (text) {
        const stamp = `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`
        const today = new Date().toUTCString()
        this.$fireDB.ref(`todos/${stamp}`)
          .push({
            text: text,
            done: false,
            createdAt: today,
            updatedAt: today
          })
        this.initialValue = ''
      },
      setDone (id, todo, date) {
        this.$fireDB.ref(`todos/${date}/${id}`)
          .set({
            ...todo,
            done: true
          })
      }
    }
  }
</script>

<template>
  <md-layout md-gutter="16" class="content-container" tag="section">
    <md-layout 
      md-flex-small="10" 
      md-flex="25" 
      md-column 
      md-flex-xsmall="100"></md-layout>
    <md-layout 
      md-flex-small="80" 
      md-flex="50" 
      md-column 
      md-flex-xsmall="100">
      <md-whiteframe>
        <div class="add-form">
          <form novalidate @submit.stop.prevent="add(initialValue)">
            <md-input-container>
              <label>що зробити?</label>
              <md-input v-model="initialValue"></md-input>
            </md-input-container>
          </form>
        </div>
        <md-tabs md-right>
          <md-tab md-icon="all_inclusive">
            <md-list v-for="(val, date, index) in all" :key="date">
              <md-subheader>{{date}}</md-subheader>
              <md-list-item v-for="(todo, key) in val" v-bind:key="key">
                <md-icon v-if="todo.done">done_all</md-icon>                
                <md-icon v-else>bookmark</md-icon>
                <span>
                  {{todo.text}}
                </span>
                <span>
                  <md-button class="md-icon-button md-mini" v-bind:disabled="todo.done" v-on:click="setDone(key, todo, date)">
                    <md-icon>done</md-icon>
                  </md-button>
                </span>
              </md-list-item>
              <md-divider class="md-inset"></md-divider>
            </md-list>
          </md-tab>

          <md-tab md-icon="notifications_active">
          </md-tab>

          <md-tab md-icon="done">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
          </md-tab>
        </md-tabs>
      </md-whiteframe>
    </md-layout>
  </md-layout>
</template>

<style scoped>
  .content-container {
    margin-top: 20px;
  }
  .add-form {
    padding: 5px 25px;
  }
</style>
