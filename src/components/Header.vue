import { createRouter, createWebHistory } from 'vue-router';
<template>
  
    <header>
      <h1> OPTIONS</h1>
      <nav>
        <router-link to="/home">Home/</router-link>
        <router-link to="/projects">Projects/</router-link>
        <router-link to="/contact">Contact/</router-link>
        <router-link to="/userauth">UserAuth/</router-link>

      </nav>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: "ADITHI'S PORTFOLIO",
      };
    },
  };
  </script>
  
