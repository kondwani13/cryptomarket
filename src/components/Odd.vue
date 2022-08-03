<template>
    
      <div class="grid lg:grid-cols-3 grid-rows-3  items-center  ">

<div class="bg-blue-get lg:rounded-l-lg rounded-t-lg px-8 lg:-mb-32 -mb-14 z-20 lg:py-4 pt-4 pl-32">
<img class=" lg:px-8 pl-8 " src="@/images/qr.png" alt="qr">
<h4 class="text-white relative py-4 lg:px-4 pl-8 text-sm">TRC20/TRX wallet address</h4>
</div>
<div class="bg-blue-gri items-center py-6 -mb-14 lg:-mb-32 ">
<p class="text-white lg:text-lg text-sm lg:py-8 text-center  ">Transfers must be made using a decentralized wallet <br>
   {{text}}</p>
 </div>
<div class="rounded-b-lg lg:rounded-r-lg bg-blue-gri lg:-mt-0 -mt-16 lg:pl-28 pl-40 lg:py-7 py-2 lg:-mb-32 ">  
<button @click="copy" class="hover:animate-ping rounded-lg bg-blue-buton lg:text-4xl text-2xl font-bold text-blue-butt lg:pl-8 lg:p-12 py-4 lg:px-6 pl-6 pr-8">copy</button>

</div>
</div>

        <div class="lg:grid lg:grid-cols-2 lg:grid-flow-row lg:pt-0  py-8 lg:pl-28 px-2 items-center">
        
         <div class="hidden md:block -mt-36 pl-16 py-8">
         <h4 class="pl-9 text-white font-bold text-3xl py-4">Rules</h4>
          <h4 class="pl-4 pb-4 text-white font-bold text-base">Odd-even Hash</h4>
         <h4 class=""></h4>
         <img class="pl-3" src="@/images/rul.svg" alt="rul">
         </div>

        <div class="">
        <h4 class="pt-4 pb-4 text-white text-base ">
          
        If the units digit of the transfer amount and the last digit of the Block hash are both singular or both are 
         <br> even(only look at the numbers, not the letters), you can get the reward。 <br>
        </h4>
         <h4 class="pb-4 text-white text-base ">
         The system will automatically return 1.95 times of the transfer amount of similar digital coins within 10 seconds
         after winning the lottery. (Due to the block chain technology to ensure the security of funds, every transaction 
         needs to be recorded and tamper-proof, and the global population of digital currency users is huge, so there may 
         be some delay after 10 seconds of transfer, please be patient)
        </h4>
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
     name: 'Odd',
         data() {
return {
text: 'TQLq8wZmVTbZJ7LgsxPeaezSFmcUN9RRRR'
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