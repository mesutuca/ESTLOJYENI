<template>
 <div class="container max-w-8xl mx-auto py-6 sm:px-6 lg:px-8">
  <div class="md:flex items-start">
   <AccountLayout/>

   <div class="w-full md:w-9/12 px-8">
    <div class="bg-white px-8">
     <div class="px-4 py-4">
      <router-view/>
     </div>
    </div>
   </div>
  </div>
 </div>

</template>
<script>

import {defineComponent} from "vue";
import AccountLayout from "@/views/Account/AccountLayout.vue";

export default defineComponent({
 components: {AccountLayout}
})
</script>
