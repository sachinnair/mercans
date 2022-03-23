
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MenuLinks from '@/assets/menuLinks.json'
</script>

<template>
  <nav>
    <router-link 
      v-for="menulink in MenuLinks.filter(x => x.path !== undefined)" 
      :key="menulink.title"
      :to="{ name: 'home', params: { menuitem: menulink.path}}">
      {{menulink.title}}
    </router-link>
  </nav>
  <main>
    Checking out: {{$route.params.menuitem}}
  </main>
</template>
