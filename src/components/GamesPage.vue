<template>
  <div class="games-main">
    <h1>This is the Games page</h1>
    <div class="main">
      <div class="game">
        <div>Game Title</div>
        <router-link to="challenges">Bottom Text</router-link>
      </div>
      <div class="game">
        <div>Game Title</div>
        <router-link to="challenges">Bottom Text</router-link>
      </div>
      <div class="game">
        <div>Game Title</div>
        <router-link to="challenges">Bottom Text</router-link>
      </div>
      <div class="game">
        <div>Game Title</div>
        <router-link to="challenges">Bottom Text</router-link>
      </div>
      <div class="game">
        <div>Game Title</div>
        <router-link to="challenges">Bottom Text</router-link>
      </div>
      <div class="game">
        <div>Game Title</div>
        <router-link to="challenges">Bottom Text</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GamesPage'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .game {
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
