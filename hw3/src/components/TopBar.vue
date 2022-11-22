<template>
    <div class="topnav">
      <nav class="menu-left">
        <router-link :to="{name:'home'}">Home</router-link>
        <router-link :to="{name:'signup'}">Sign Up</router-link>
      </nav>
    </div>
  </template>
  
  <script>
    export default {
      name: 'top-bar',
    }
  </script>
  <style scoped>
    .topnav {
      background-color: rgb(85, 85, 85);
      overflow: hidden;
      display: flex;
    }
    .topnav .menu-right {
      margin-left: auto;
    }
    /* Style the links inside the navigation bar */
    .topnav a {
      float: left;
      display: block;
      color: #f2f2f2;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      font-size: 14px;
      border-radius: 0.25em;
      margin-right: .25rem;
      font-weight: bold;
    }
    /* Change the color of links on hover */
    .topnav a:hover {
      background-color: #ddd;
      color: black;
    }
    /* Add a color to the active/current link */
    .topnav a.active {
      background-color: #4CAF50;
      color: white;
    }
  </style>