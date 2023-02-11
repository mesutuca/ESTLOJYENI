<template>
 <div class="sm:flex w-6 overflow-hidden">
  <svg v-if="flag==='tr'" xmlns="http://www.w3.org/2000/svg" viewBox="0 -30000 90000 60000" width="24" height="24">
   <path fill="#e30a17" d="m0-30000h90000v60000H0z"/>
   <path fill="#fff" d="m41750 0 13568-4408-8386 11541V-7133l8386 11541zm925 8021a15000 15000 0 1 1 0-16042 12000 12000 0 1 0 0 16042z"/>
  </svg>
  <svg v-else-if="flag==='en'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40" width="24" height="24">
   <defs>
    <clipPath id="t">
     <path d="M30,15H60V30zM30,15V30H0zM30,15H0V0zM30,15V0H60z"/>
    </clipPath>
   </defs>
   <rect width="60" height="40" style="fill:#00247d"/>
   <g style="stroke:#ffffff;stroke-width:6.93225527;fill:none">
    <path d="M0,0L60,40M60,0L0,40"/>
    <path d="M0,0L60,30M60,0L0,30" style="stroke:#cf142b;stroke-width:4" clip-path="url(#t)" transform="scale(1,1.3333333)"/>
    <path d="M30,0V40M0,20H60" style="stroke-width:11.55375878"/>
    <path d="M30,0V40M0,20H60" style="stroke:#cf142b"/>
   </g>
  </svg>
  <svg v-else-if="flag==='ar'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 6" width="24" height="24">
   <rect fill="#fff" width="9" height="6"/>
   <rect fill="#007a3d" width="9" height="4"/>
   <rect fill="#000" width="9" height="2"/>
   <path fill="#ce1126" d="M0,6 V0 L3,3z"/>
  </svg>
  <svg v-else-if="flag==='ru'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 6" width="24" height="24">
   <rect fill="#fff" width="9" height="3"/>
   <rect fill="#d52b1e" y="3" width="9" height="3"/>
   <rect fill="#0039a6" y="2" width="9" height="2"/>
  </svg>
 </div>
</template>

<script>
export default {
 name: "FlagSvg",
 props: ['flag']
}
</script>

<style scoped>

</style>