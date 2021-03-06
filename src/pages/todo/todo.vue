<script>
  import {selectTodos} from '@/utils/todos'

  export default {
    name: 'layout',
    data: function () {
      return {
        all: {},
        done: {},
        active: {},
        initialValue: ''
      }
    },
    beforeMount: function () {
      const email = 'test@mail.com'
      const password = 'testpassword'
      this.$fireApp.auth()
        .signInWithEmailAndPassword(email, password)
        .catch(error => {
          console.log(error)
        })
    },
    mounted: function () {
      this.$fireDB.ref('todos')
        .on('value', (snapshot) => {
          this.all = selectTodos(snapshot.val())
          this.done = selectTodos(snapshot.val(), true)
          this.active = selectTodos(snapshot.val(), false)
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
      setDone (todo, date) {
        this.$fireDB.ref(`todos/${date}/${todo.key}`)
          .set({
            ...todo,
            done: true
          })
      }
    }
  }
</script>

<template>
  <md-layout md-align="center" class="content-container" tag="section">
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
            <md-list v-for="(val, index) in all" :key="index">
              <md-subheader>{{val.date}}</md-subheader>
              <md-list-item v-for="(todo, index) in val.todos" v-bind:key="index">
                <md-icon v-if="todo.done">&#xE877;</md-icon>                
                <md-icon v-else>bookmark</md-icon>
                <span v-if="todo.done" class="done">
                  {{todo.text}}
                </span>
                <span v-else>
                  {{todo.text}}
                </span>
                <span>
                  <md-button 
                    class="md-icon-button md-mini" 
                    v-bind:disabled="todo.done" 
                    v-on:click="setDone(todo, val.date)">
                    <md-icon>done</md-icon>
                  </md-button>
                </span>
              </md-list-item>
              <md-divider class="md-inset"></md-divider>
            </md-list>
          </md-tab>

          <md-tab md-icon="notifications_active">
            <md-list v-for="(val, index) in active" :key="index">
              <md-subheader>{{val.date}}</md-subheader>
              <md-list-item v-for="(todo, key) in val.todos" v-bind:key="todo.key">
                <md-icon>bookmark</md-icon>
                <span>
                  {{todo.text}}
                </span>
                <span>
                  <md-button 
                    class="md-icon-button md-mini" 
                    v-bind:disabled="todo.done" 
                    v-on:click="setDone(todo, val.date)">
                    <md-icon>done</md-icon>
                  </md-button>
                </span>
              </md-list-item>
              <md-divider class="md-inset"></md-divider>
            </md-list>
          </md-tab>

          <md-tab md-icon="done">
            <md-list v-for="(val, index) in done" :key="index">
              <md-subheader>{{val.date}}</md-subheader>
              <md-list-item v-for="(todo, key) in val.todos" v-bind:key="key">
                <md-icon>done_all</md-icon>                
                <span class="done">
                  {{todo.text}} 
                </span>
                <span>
                  <md-button 
                    class="md-icon-button md-mini" 
                    v-bind:disabled="todo.done" 
                    v-on:click="setDone(todo, val.date)">
                    <md-icon>done</md-icon>
                  </md-button>
                </span>
              </md-list-item>
              <md-divider class="md-inset"></md-divider>
            </md-list>
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
  .done {
    text-decoration: line-through;
  }
</style>
