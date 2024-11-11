<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quos laudantium est
      provident ratione facere quas totam cumque ducimus! Culpa voluptates quaerat ratione
      officiis nesciunt mollitia odio voluptatum quibusdam officia.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quos laudantium est
      provident ratione facere quas totam cumque ducimus! Culpa voluptates quaerat ratione
      officiis nesciunt mollitia odio voluptatum quibusdam officia.
    </p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
  const { data } = await useFetch('/api/currency/GBP')

</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
