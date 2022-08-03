<template>


  <div class="grid lg:grid-cols-3 grid-rows-3  items-center  ">

<div class="bg-blue-get lg:rounded-l-lg rounded-t-lg px-8 lg:-mb-32 -mb-14 z-20 lg:py-4 pt-4 pl-32">
<img class=" lg:px-8 pl-5" src="@/images/qr2.jpg" alt="qr2">
<h4 class="text-white py-4 lg:px-4 pl-1 text-sm">TRC20/TRX wallet address</h4>
</div>
<div class="bg-blue-gri items-center py-6 -mb-14 lg:-mb-32 ">
<p class="text-white lg:text-lg text-sm lg:py-8 text-center  ">Transfers must be made using a decentralized wallet <br>
   {{text}}</p>
 </div>
<div class="rounded-b-lg lg:rounded-r-lg bg-blue-gri lg:-mt-0 -mt-16 lg:pl-28 pl-40 lg:py-7 py-2 lg:-mb-32 ">  
<button @click="copy" class="hover:animate-ping rounded-lg bg-blue-buton lg:text-5xl text-3xl font-bold text-blue-butt lg:p-12 py-4 px-6">copy</button>

</div>
</div>
     
       <div class="lg:grid lg:grid-cols-2 lg:grid-flow-row py-8 lg:pl-28 px-2 items-center">
        
         <div class="hidden md:block -mt-36 pl-16 py-8">
         <h4 class="pl-9 text-white font-bold text-3xl py-4">Rules</h4>
          <h4 class="pl-5 pb-4 text-white font-bold text-base">Lucky Hash</h4>
         <h4 class=""></h4>
         <img class="pl-3" src="@/images/rul.svg" alt="rul">
         </div>

        <div class="">

        <p class="pt-4 pb-4 text-white text-base "> 
        Invest 10-30000USDT or 100-200000TRX in the game address
        </p>
        <p class="pt-4 pb-4 text-white text-base ">
        Get the block Hash of your transfer as the basis for the decision
        </p>
        <p class="pt-4 pb-4 text-white text-base ">
        The last two digits of the Hash are numbers and letters respectively to win
         </p>
         <p class="pt-4 pb-4 text-white text-base ">
         We will refund 1.95 times USDT/TRX to your wallet in time
         </p>
         <p class="pt-4 pb-4 text-white text-base ">
         Below minimum amount and above maximum amount (invalid bet)
         </p>
         <p class="pt-4 pb-4 text-white text-base ">
         
         Only integer coins are supported to participate in the lottery, and the decimal part is ignored automatically
         </p>
          <p class="pb-6 text-white text-2xl">Limitation</p>
         <div class="flex inline-flex lg:space-x-24 space-x-10">
         <p class="text-white text-base">USDT:10 - 30000</p>
         <p class="text-white text-base">TRX:100 - 200000</p>
         <p class="text-white text-base">Odds:1.95</p>
         </div>
         </div>
         </div>
         
              
         
</template>

<script>
 export default {
     name: 'Lucky',
              data() {
return {
text: 'TP4qcNGVPBobwhKPjJMFMEqrDqt3EGzSSS'
};
},
methods: {
  copy() {
try {
  navigator.clipboard.writeText(this.text)
} catch(e) {
throw e
}
}
}
 }
</script>