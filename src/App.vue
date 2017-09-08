<template>
  <div id="app">
    <div class="phone-viewport">
      <md-whiteframe md-tag="header" md-elevation="10">
        <md-toolbar>
          <md-button class="md-icon-button" @click="toggleLeftSidenav">
            <md-icon>menu</md-icon>
          </md-button>

          <h2 class="md-title" style="flex: 1">{{appTitle}}</h2>

          <router-link :to="{ name: 'about' }" class="md-raised md-primary" tag="md-button">
              About <md-icon>info</md-icon>
          </router-link>
        </md-toolbar>
      </md-whiteframe>

      <router-view></router-view>

      <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')">
        <md-toolbar class="md-large">
          <div class="md-toolbar-container">
            <h3 class="md-title">Sidenav content</h3>
          </div>
        </md-toolbar>
        <md-list>
          <md-list-item>
            <md-icon>error</md-icon>
            <span>
              <router-link :to="{name: 'Root'}" tag="md-button">root</router-link>
            </span>
          </md-list-item>
          <md-list-item>
            <md-icon>error</md-icon>
            <span>
              <router-link :to="{name: 'Layout'}" tag="md-button">layout</router-link>
            </span>
            <md-divider class="md-inset"></md-divider>
          </md-list-item>
        </md-list>
      </md-sidenav>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => {
    return {
      appTitle: 'ToDo'
    }
  },
  methods: {
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    },
    open (ref) {
      console.log('Opened: ' + ref)
    }
  }
}
</script>

<style>
</style>
