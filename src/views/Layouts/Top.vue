<template>
 <div class="top bg-gray-50 border-b hidden sm:block">
  <div class="container max-w-8xl mx-auto px-8">
   <div class="flex items-center justify-between w-full top-menu">
    <div class="top-left">
     <ul class="flex flex-wrap">
      <li>
       <a href="">İletişim</a>
      </li>
      <li>
       <a href="">Kampanyalar</a>
      </li>
      <li>
       <a href="">Blog</a>
      </li>
     </ul>
    </div>
    <div class="top-right">
     <ul class="flex flex-wrap">
      <li>
       <a href="">Sipariş Takip</a>
      </li>
      <li>
       <a href="">+90 542 443 87 00</a>
      </li>
     </ul>
    </div>
   </div>
  </div>
 </div>
</template>

<script>
export default {
 name: "Top"
}
</script>

<style lang="scss">
.top-menu {
 ul {
  li {
   border-left: 1px solid #e2e2e2;

   a {
    display: flex;
    align-items: center;
    height: 44px;
    color: #696969;
    line-height: calc(12px + 8px);
    font-size: 12px;
    font-weight: 400;
    padding: 0 16px;
    transition: all .2s linear;
   }

   &:last-child {
    border-right: 1px solid #e2e2e2;
   }
  }
 }
}
</style>
