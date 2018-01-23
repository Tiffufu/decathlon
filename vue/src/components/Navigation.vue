<template>
  <div class="container type--center">
    <div class="row">
      <div class="col-sm-12">
        <p><router-link to="/"><img src="../assets/meta.png" alt="META+Lab Logo" width="100px"></router-link></p>
        <h1 class="giga">10 Days {{ titleTag() }}</h1>
        <p class="intro">META+LAB Onboarding &amp; Training</p>
        <br>
      </div>
      <div class="col-sm-3">
        <!-- <router-link to="/design" router-link-active='bg--scarlet active-selection' @click.native="handleClick" class="panel type--white img--hexagon" :class="{ 'bg--scarlet active-selection': isActive, 'bg--gray inactive-selection': isDisabled }"> -->
        <router-link to="/design" class="panel type--white img--hexagon bg--scarlet active-selection" :class="applyStyle('Design')">
          <div class="panel__content" style="padding: 75px 0;">
            <p><i class="fa fa-diamond fa-3x" aria-hidden="true"></i></p>
            <h2>Design</h2>
          </div>
        </router-link>
      </div>
      <div class="col-sm-3">
        <!-- <router-link to="/front-end" router-link-active='bg--scarlet active-selection' @click.native="handleClick" class="panel type--white img--hexagon" :class="{ 'bg--golden-yellow active-selection': isActive, 'bg--gray inactive-selection': isDisabled }"> -->
        <router-link to="/front-end" class="panel type--white img--hexagon bg--golden-yellow active-selection" :class="applyStyle('Front-End')">
          <div class="panel__content" style="padding: 75px 0;">
            <p><i class="fa fa-bolt fa-3x" aria-hidden="true"></i></p>
            <h2>Front-End</h2>
          </div>
        </router-link>
      </div>
      <div class="col-sm-3">
        <!-- <router-link to="/back-end" @click.native="handleClick" class="panel type--white img--hexagon" :class="{ 'bg--black active-selection': isActive, 'bg--gray inactive-selection': isDisabled }"> -->
        <router-link to="/back-end" class="panel type--white img--hexagon bg--black active-selection" :class="applyStyle('Back-End')">
          <div class="panel__content" style="padding: 75px 0;">
            <p><i class="fa fa-bomb fa-3x" aria-hidden="true"></i></p>
            <h2>Back-End</h2>
          </div>
        </router-link>
      </div>
      <div class="col-sm-3">
        <!-- <router-link to="/operations" @click.native="handleClick" class="panel type--white img--hexagon" :class="{ 'bg--sea-green active-selection': isActive, 'bg--gray inactive-selection': isDisabled }"> -->
        <router-link to="/operations" class="panel type--white img--hexagon bg--sea-green active-selection" :class="applyStyle('Operations')">
          <div class="panel__content" style="padding: 75px 0;">
            <p><i class="fa fa-bullhorn fa-3x" aria-hidden="true"></i></p>
            <h2>Operations</h2>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .active-selection {
    border: 0px;
    display: block;
  }
  .inactive-selection {
    border: 0px;
    display: block;
    margin-top: 50px;
    opacity: .5;
  }
</style>


<script>
export default {
  methods: {
    titleTag () {
      if (this.title !== 'Landing') {
        return ' of ' + this.$route.name
      } else {
        return ''
      }
    },
    applyStyle (name) {
      if (name !== this.$route.name) {
        return 'bg--gray inactive-selection'
      } else {
        return ''
      }
    }
  }
}
</script>





