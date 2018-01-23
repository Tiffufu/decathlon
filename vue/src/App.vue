<template>
  <div id="app">
    <navigation></navigation>
    <router-view />
    <meta-footer></meta-footer>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
export default {
  components: {
    'navigation': Navigation,
    'meta-footer': Footer
  }
}
</script>


