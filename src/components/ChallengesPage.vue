<template>
  <div class="challenges-main">
    <h1>This is the Challenges page</h1>
    <div class="main">
      <div class="challenge">
        <div>Challenge Title</div>
        <div>Author of Challenge Name</div>
        <div>Upvotes: 15</div>
        <div>Intro To Info/How to</div>
        <router-link to="info">Learn More -></router-link>
      </div>
      <div class="challenge">
        <div>Challenge Title</div>
        <div>Author of Challenge Name</div>
        <div>Upvotes: 15</div>
        <div>Intro To Info/How to</div>
        <router-link to="info">Learn More -></router-link>
      </div>
      <div class="challenge">
        <div>Challenge Title</div>
        <div>Author of Challenge Name</div>
        <div>Upvotes: 15</div>
        <div>Intro To Info/How to</div>
        <router-link to="info">Learn More -></router-link>
      </div>
      <div class="challenge">
        <div>Challenge Title</div>
        <div>Author of Challenge Name</div>
        <div>Upvotes: 15</div>
        <div>Intro To Info/How to</div>
        <router-link to="info">Learn More -></router-link>
      </div>
      <div class="challenge">
        <div>Challenge Title</div>
        <div>Author of Challenge Name</div>
        <div>Upvotes: 15</div>
        <div>Intro To Info/How to</div>
        <router-link to="info">Learn More -></router-link>
      </div>
      <div class="challenge">
        <div>Challenge Title</div>
        <div>Author of Challenge Name</div>
        <div>Upvotes: 15</div>
        <div>Intro To Info/How to</div>
        <router-link to="info">Learn More -></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChallengesPage'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }

  .challenge {
    height: 250px;
    width: 250px;
    margin: 15px;
    border: solid 1px black;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
</style>
