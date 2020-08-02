<template>
  <article class="container">
    <div class="one">
      <div class="ban">
        {{ ban }}
      </div>
      <div class="meta">
        {{ description }}
      </div>
    </div>

    <div class="two">
      <svg height="3rem" width="3rem" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
        <title id="title">title</title>
        <desc>description</desc>
        <!-- <circle r="100" cx="100" cy="100" fill="yellow" stroke="1" /> -->
        <polygon class="triangle" style="fill:red" points="250,60 100,400 400,400">
          <animate
            attributeType="CSS"
            attributeName="opacity"
            from="1"
            to="0"
            dur="5s"
            repeatCount="indefinite"
          />
        </polygon>Sorry, your browser sucks :( Try switching to chrome, its the gold standard bitch!
      </svg>
    </div>
  </article>
</template>

<script>
export default {
  data: () => ({
    header: 'Some header text',
    footer: 'Some footer text here',
    ban: '23.04%',
    description: 'Average Customer Retention'
  })
}
</script>

<style scoped>
.container {
  background-color: grey;
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); */
  grid-template-columns: 2fr 1fr;
  width: 50%;
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 #cccccc;
  transition: 0.3s;
}
/* On mouse-over, add a deeper shadow */
.container:hover {
  box-shadow: 0 8px 16px 0 #cccccc;
}
.ban {
  font-size: 2.5rem;
  font-style: bold;
}
.meta {
  /* font-size: 2.5rem; */
  font-style: italic;
}

</style>>
