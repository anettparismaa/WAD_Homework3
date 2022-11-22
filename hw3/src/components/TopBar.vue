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
      background-color: rgba(85, 85, 85, 0.502);
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
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 10px;
      border-radius: 0.25em;
      margin-right: .25rem;
      font-weight: bold;
    }
    /* Change the color of links on hover */
    .topnav a:hover {
      background-color: hwb(141 53% 16% / 0.758);
      transition: background-color 0.25s linear;
    }
    /* Add a color to the active/current link */
    .topnav a.active {
      background-color: #4CAF50;
      color: white;
    }
    .menu-left{
      margin: 0 auto;
      
    }
  </style>