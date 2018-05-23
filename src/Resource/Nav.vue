<template>
  <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand">
        Ciao Vue Dialog
      </a>

      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item dropdown">
          <a class="dropdown-toggle" role="button" data-toggle="dropdown">
            Example
          </a>
          <div class="dropdown-menu">
            <router-link class="dropdown-item"
              v-for="block in blocks"
              :key="block.name"
              :to="{ name: 'demo', query: { block: block.name } }">
              {{block.label}}
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      blocks: [
        { label: 'Base', name: 'base' },
        { label: 'Style', name: 'style' },
        { label: 'Size', name: 'size' },
        { label: 'Action', name: 'action' },
        { label: 'Custom Component', name: 'custom-component' },
      ]
    }
  },
}
</script>

<style lang="sass" type="text/sass" scoped>
.dropdown-toggle
  cursor: pointer
.dropdown-item
  cursor: pointer
</style>