<template>
 <div class="flex items-center justify-center bg-blue-proc py-8 lg:px-20 px-3 ">

      <div class="grid lg:grid-cols-2 lg:grid-flow-row py-8 lg:pl-20 space-y-4 space-x-6">
      <div class="rounded-lg bg-blue-gri ">
       <h4 class="text-white text-lg p-8">Transfer to the address</h4>
       <p class="text-white text-base px-8  ">Enter a lottery and win moneyr</p>
       <h4 class="text-white text-base pl-8 py-5">The drawing process is as follows:</h4>
       <p class="text-white text-base p-8 ">
       (1)If the transfer is lower than the minimum amount, you cannot participate and will not be 
       returned. If the transfer is higher than the maximum amount, you will be returned after deducting the service fee </p>
       <p class="text-white text-base py-4 px-8 ">
      (2) Only integer coins are supported to participate in the lottery, and the decimal part is ignored automatically </p>
      </div>
      <div class="rounded-lg bg-blue-gri py-10 px-16  ">
      <div class="py-24  rounded-lg bg-blue-imbd border-indigo-300  ">
      <img class="lg:pl-52 py-4 px-20" src="@/images/mark.svg" alt="mark">
      <p class="text-white lg:text-base text-sm text-center">Specify the wallet address to this platform</p>
      <p class="text-white lg:text-base text-sm text-center">After transferring the specified amount, you will successfully participate in the lucky draw</p>

       
      </div>
      </div>
      </div>
      

      </div>

</template>

<script>
 export default {
     name: 'Transfer',
 }
</script>