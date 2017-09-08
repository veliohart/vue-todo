<template>
  <md-whiteframe md-tag="section" class="main-content">
    <md-layout md-gutter="16">
      <md-layout md-column md-gutter>
          <md-button class="md-raised md-primary" v-on:click="signinBase()">SignIn</md-button>
          <md-button class="md-raised md-primary" v-on:click="signupBase()">SignUp</md-button>
          <md-button class="md-raised md-primary" v-on:click="testBase()">FIREBASE set</md-button>
          <md-button class="md-raised md-primary" v-on:click="testBaseGet()">FIREBASE get</md-button>
      </md-layout>

      <md-layout>
        <md-layout md-column>
          <md-list>
            <md-whiteframe md-flex="100" v-for="user in data" v-bind:key="user.date">
              <md-list-item>
                <md-avatar>
                  <img src="https://placeimg.com/40/40/people/5" alt="People">
                </md-avatar>

                <span>{{user.stamp}}</span>
                <span>{{user.username}}</span>

                <md-button class="md-icon-button md-list-action" v-on:click="remove(user)">
                  <md-icon class="md-primary">remove_circle</md-icon>
                </md-button>
              </md-list-item>
            </md-whiteframe>
          </md-list>
        </md-layout>
      </md-layout>
    </md-layout>
  </md-whiteframe>
</template>

<script>
  export default {
    name: 'root',
    data: () => {
      return {
        appTitle: 'Title for my APP',
        errorCode: '',
        errorMessage: '',
        data: []
      }
    },
    mounted: function () {
      this.$fireDB.ref('users')
          .on('value', (snapshot) => {
            this.data = snapshot.val()
          })
    },
    methods: {
      testBase () {
        const stamp = Date.now()
        this.$fireDB.ref(`users/${stamp}`)
          .set({
            username: 'name',
            email: 'email',
            profilePicture: 'imageUrl',
            stamp: stamp
          })
      },
      signupBase () {
        const email = 'test@mail.com'
        const password = 'testpassword'
        this.$fireApp.auth().createUserWithEmailAndPassword(email, password).catch(error => {
          // Handle Errors here.
          this.errorCode = error.code
          this.errorMessage = error.message
        })
      },
      signinBase () {
        const email = 'test@mail.com'
        const password = 'testpassword'
        this.$fireApp.auth().signInWithEmailAndPassword(email, password).catch(error => {
          // Handle Errors here.
          this.errorCode = error.code
          this.errorMessage = error.message
        })
      },
      remove (user) {
        console.log(user)
        const ref = this.$fireDB.ref(`users/${user.stamp}`)
        ref.remove()
      }
    }
  }
</script>

<style>
.main-content {
  margin: 15px;
  padding: 10px;
}
</style>

