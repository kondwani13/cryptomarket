<template>

 <div class="grid lg:grid-cols-3 grid-rows-3  items-center  ">

<div class="bg-blue-get lg:rounded-l-lg rounded-t-lg px-8 lg:-mb-32 -mb-14 z-20 lg:py-4 pt-4 pl-32">
<img class=" lg:px-8 pl-5" src="@/images/qr4.jpg" alt="qr4">
<h4 class="text-white py-4 lg:px-4 pl-1 text-sm">TRC20/TRX wallet address</h4>
</div>
<div class="bg-blue-gri items-center py-6 -mb-14 lg:-mb-32 ">
<p class="text-white lg:text-lg text-sm lg:py-4 text-center">Transfers must be made using a decentralized wallet<br>
   {{text}}</p>
 </div>
 <div class="rounded-b-lg lg:rounded-r-lg bg-blue-gri lg:-mt-0 -mt-16 lg:pl-28 pl-40 lg:py-7 py-2 lg:-mb-32 ">  
<button @click="copy" class="hover:animate-ping rounded-lg bg-blue-buton lg:text-4xl text-2xl font-bold text-blue-butt lg:pl-8 lg:p-12 py-4 px-6">copy</button>

</div>
</div>


    <div class="lg:grid  lg:grid-cols-2 lg:grid-flow-row py-2 lg:pl-28 px-2 items-center">
        
         <div class="hidden md:block -mt-36 pl-16 py-2">
         <h4 class="pl-9 text-white font-bold text-3xl py-4">Rules</h4>
          <h4 class="pl-5 pb-4 text-white font-bold text-base">Equal Niuniu</h4>
         <h4 class=""></h4>
         <img class="pl-3" src="@/images/rul.svg" alt="rul">
         </div>

        <div class="">

        <p class="pt-4 pb-4 text-white text-base "> 
        Invest 10-30000USDT or 100-200000TRX in the game address
        </p>
        <p class="pt-4 pb-4 text-white text-base ">
        Below minimum amount and above maximum amount (invalid bet)
        </p>
        <p class="pt-4 pb-4 text-white text-base ">
        The numbers 1-9 are from Niu one to Niu nine, and 0 is NiuNiu. Niu Niu > Niu nine > Niu eight>....> Niu one
         </p>
         <p class="pt-4 pb-4 text-white text-base ">
         If the banker and player are the same point, Niu one and Niu two are banker win, others will deduct the transfer amount of 1% of the commission to refund the principal
         </p>
         <p class="pt-4 pb-4 text-white text-base ">
        After the transfer, the last 5 bits of the Block hash are used as the face of the card, for example :(000***1b3j6) is the face of the card, the first three bits (1b3) are 
        the number of the banker, and the last three bits (3j6) are the number of the player. The three digits are added together(every letter is 10).
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
     name: 'Equal',
     data() {
return {
text: 'TQLq8wZmVTbZJ7LgsxPabesSFmcUN9zRRR'
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