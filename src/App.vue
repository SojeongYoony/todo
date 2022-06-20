<script setup>
// import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "@/components/HelloWorld.vue";
import { ref } from "vue";
const list = ref([]); // 반응형 하려면 ref 써야함, JS는 맨 처음 한번만 실행 되므로
const inputData = ref("");

const addTodo = () => {
  if (inputData.value.trim() === "") return;
  list.value.push(inputData.value.trim());
  inputData.value = "";
};

/* todoIndex에서 우리가 지우려고 하는 index 빼고 다른 놈들을 통과시켜서 list에 도로 처 넣어라 */
const removeTodoAt = (todoIndex) => {
  list.value = list.value.filter((value, index) => index !== todoIndex);
};
</script>

<template>
  <h1>Yoony's ToDo App</h1>

  <div id="listbox-title">List</div>
  <div id="listbox"></div>
  <!-- keydown.enter : enter를 keydown 했을때만. -->
  <input
    @keydown.enter="addTodo"
    v-model="inputData"
    type="text"
    name="input"
    id="input"
  />
  <button id="btn-add" @click="addTodo">Add</button>
  <div id="listbox">
    <li v-for="(item, index) in list">
      {{ item }}
      <button @click="removeTodoAt(index)">X</button>
    </li>
  </div>
  <!-- <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->
</template>

<style>
* {
  margin: 0%;
  padding: 0%;
  /* ctrl shif enter -> 위로 감 ctrl enter -> 아래로감 */
}
/* @import "@/assets/base.css";


#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
