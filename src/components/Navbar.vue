<template>
  <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
       <a class="navbar-brand" href="#">Vue Form</a>
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>

       <div class="collapse navbar-collapse" id="navbarSupportedContent">
         <ul class="navbar-nav mr-auto">
           <li class="nav-item">
             <router-link class="nav-link" to="/">Home</router-link>
           </li>
           <li class="nav-item">
             <router-link class="nav-link" to="/forms">Forms</router-link>
           </li>
           <li class="nav-item">
              <router-link class="nav-link" to="/create">Create Form</router-link>
           </li>
         </ul>
       </div>
       </nav>
     </header>

</template>

<script>
export default {
}
</script>

<style scoped >
.router-link-active {
  color: rgba(0, 0, 0, 0.9) !important;
  border-bottom: none;
}
</style>