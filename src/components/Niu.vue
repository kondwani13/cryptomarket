<template>


 <div class="grid lg:grid-cols-3 grid-rows-3  items-center  ">

<div class="bg-blue-get lg:rounded-l-lg rounded-t-lg px-8 lg:-mb-32 -mb-14 z-20 lg:py-4 pt-4 pl-32">
<img class=" px-8" src="@/images/qr3.jpg" alt="qr3">
<h4 class="text-white py-4 px-4 text-sm">TRC20/TRX wallet address</h4>
</div>
<div class="bg-blue-gri items-center py-6 -mb-14 lg:-mb-32 ">
<p class="text-white lg:text-lg text-sm lg:py-8 text-center  ">Transfers must be made using a decentralized wallet <br>
   {{text}}</p>
 </div>
 <div class="rounded-b-lg lg:rounded-r-lg bg-blue-gri lg:-mt-0 -mt-16 lg:pl-28 pl-40 lg:py-7 py-2 lg:-mb-32  ">  
<button @click="copy" class="hover:animate-ping rounded-lg bg-blue-buton lg:text-5xl text-3xl font-bold text-blue-butt lg:p-12 py-4 px-6">copy</button>

</div>
</div>

 <div class="lg:grid lg:grid-cols-2 lg:grid-flow-row py-8 lg:pl-28 px-2 items-center">
        
         <div class="hidden md:block -mt-80 pl-16 py-8">
         <h4 class="pl-9 text-white font-bold text-3xl py-4">Rules</h4>
          <h4 class="pl-5 pb-4 text-white font-bold text-base">NiuNiu Hash</h4>
         <h4 class=""></h4>
         <img class="pl-3" src="@/images/rul.svg" alt="rul">
         </div>

        <div class="">
        
          
          <p class="pt-4 pb-4 text-white text-base "> 
        Invest 50-30000USDT or 100-200000TRX in the game address
        </p>
        <p class="pt-4 pb-4 text-white text-base ">
        The bet amount is one tenth of the transfer amount
        </p>
        <p class="pt-4 pb-4 text-white text-base ">
        If you bet 10USDT/TRX, you need to transfer 100USDT/TRX
         </p>
         <p class="pt-4 pb-4 text-white text-base ">
         If the banker and player are the same point, Niu one and Niu two 
         are banker win, others will deduct the transfer amount of 1% of the commission to refund the principal
         </p>
         <p class="pt-4 pb-4 text-white text-base ">
         Below minimum amount and above maximum amount (invalid bet)
         </p>
         <p class="pt-4 pb-4 text-white text-base ">
         
         After the transfer, the last 5 bits of the Block hash are used 
         as the face of the card, for example :(000***68cba) is the face 
         of the card, the first three bits (68c) are the number of the banker, 
         and the last three bits (cba) are the number of the player. The three 
         digits are added together(every letter is 10). The numbers 1-9 are from 
         Niu one to Niu nine, and 0 is NiuNiu. Niu Niu > Niu nine > Niu eight>....> 
         Niu one
         </p>
         <div class="lg:grid lg:grid-cols-2 lg:space-x-16 space-y-2">
         <div class="">
          <p class="pt-10 pb-4 text-white text-lg">Limitation</p>
          <p class="pt-10 pb-4 text-white text-base">USDT:50 - 30000</p>
          <p class="pt-10 pb-4 text-white text-base">TRX:100 - 200000</p>
         </div>
         <div class="">
         <p class="pt-10 pb-4 text-white text-base">Odds:According to the result, Niuniu is ten times, Niu nine is nine times, 
         Niu eight is eight times, Niu seven is seven times, Niu six is six times, Niu five is five times, Niu four is four times, 
         Niu three is triple, Niu two is double, Niu one is one time.。</p>
         <p class="pt-10 pb-4 text-white text-base"> Reward:After winning the prize, the remaining prize money and principal will 
         be returned to the original account after deducting 5% commission </p>
         </div>
         
         </div>

        </div>

 </div> 
</template>

<script>
 export default {
     name: 'Niu',
              data() {
return {
text: 'TRNWeySn6oJVbBt2zCQFQPRx9JgpmvwSSS'
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