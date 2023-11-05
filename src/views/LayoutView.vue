<template>
  <v-layout>
    <v-app-bar elevation="0" border>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <HelloWorld msg="Hello World!" />
    </v-main>
  </v-layout>
</template>
<script lang="ts" setup>
import HelloWorld from '@/components/HelloWorld.vue';
import { ref } from 'vue';

const title = ref('Vue App title');
</script>
