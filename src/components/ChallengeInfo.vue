<template>
  <div class="challenge-info-main">
    <h1>Specifc Game - Challenge Title ???</h1>
    <div class="main">
      <div class="challenge-content">
        <h2>Challenge Title</h2>
        <h4>Author: Name Here</h4>
        <div>Upvotes: 15</div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur quibusdam tempore ipsam repellat rerum corporis officia, magni ullam hic sunt vel assumenda, magnam ipsum? Rerum commodi molestiae exercitationem obcaecati illum!
        Libero pariatur mollitia totam enim odit aliquid provident soluta, eaque dicta nulla eum magnam ut possimus, nobis molestiae modi ex reprehenderit. Vitae beatae ab ut veniam, fuga impedit! Provident, dolorum.
        Cumque quos veritatis unde facere vitae impedit laboriosam possimus, temporibus natus hic facilis dolore cum ducimus itaque nesciunt dolores eius fuga architecto. Aut ipsa repellat rerum aperiam molestiae dolorem facere?
        Voluptatibus architecto veritatis adipisci tempora tempore aliquid rerum rem molestiae illo libero nesciunt voluptates non dolore placeat blanditiis molestias deserunt quas quae, similique ipsam mollitia atque, harum quibusdam! Fuga, cum.
        Minus, fugiat quos illum rem harum quia mollitia labore, expedita tempora ex ducimus voluptate sapiente iure eum autem culpa provident fugit quae? Assumenda, repudiandae. Rerum quis minima deserunt eos a.
        <br>
        - Rule 1<br>
        - Rule 2<br>
        - Rule 3<br>
        - Rule 4<br>
        </p>
      </div>
      <div class="challenge-comments">
        <h3>Comments: </h3>
        <div class="comment-sect">
          <p>UserName</p>
          <p class="comment">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur mollitia neque temporibus officiis fuga pariatur architecto ab! Magni eligendi asperiores eos laboriosam. Officiis cumque deserunt eius magni soluta a minima!</p>
        </div>
        <div class="comment-sect">
          <p>UserName 2</p>
          <p class="comment">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur mollitia neque temporibus officiis fuga pariatur architecto ab! Magni eligendi asperiores eos laboriosam. Officiis cumque deserunt eius magni soluta a minima!</p>
        </div>
        <div class="comment-sect">
          <p>UserName 2</p>
          <p class="comment">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur mollitia neque temporibus officiis fuga pariatur architecto ab! Magni eligendi asperiores eos laboriosam. Officiis cumque deserunt eius magni soluta a minima!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChallengeInfoPage'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .challenge-content {
    border: solid 1px black;
    margin: 25px;
    padding: 25px;
  }
  .challenge-comments {
    border: solid 1px black;
    margin: 25px;
    padding: 15px;
  }
  .comment-sect {
    border: solid 1px black;
    margin: 5px;
    padding: 15px;
  }
  .comment {
    padding-left: 15px;
  }
</style>
