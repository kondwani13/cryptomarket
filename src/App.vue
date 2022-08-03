<template>

<nav class="sticky top-0 opacity-80 font-sans items-center inline-flex  py-4  lg:pl-40  bg-gray-900 shadow w-full z-40">

  <div class="">
    <a href="/home" class=" "><img class="hidden md:block" src="./images/logos.png" alt="logos"></a>
    
  </div>
  <div class="hidden md:block items-center pl-32">
  <p class=" text-2xl text-left text-white hover:text-white">TBHASH</p>
  </div>
  <div class="lg:pl-52 inline-flex">
    <button @click="scrollToAnchorPoint('home')" class=" text-lg no-underline text-indigo-300 hover:text-white px-4">Home</button>
    <button @click="scrollToAnchorPoint('process')" class="text-lg no-underline text-indigo-300 hover:text-white px-4">Process</button>
    <button @click="scrollToAnchorPoint('advan')" class="text-lg no-underline text-indigo-300 hover:text-white px-4">Advantages</button>
    <button @click="scrollToAnchorPoint('faq')" class="text-lg no-underline text-indigo-300 hover:text-white px-4">Faq</button>
    <div class="hidden md:block block">
    <button @click.prevent="showModal" class="text-lg no-underline text-indigo-300 hover:text-white px-4  ">personal center</button>
    </div>
	
		
	
    <div class="-ml-3 inline-flex">
    <a href="#home"><img class="pt-2 pr-2 " src="./images/ball.png" alt="ball"></a>
    <div class="container mx-auto">
    <div class="relative  inline-flex">
     <button @click="open = !open" class="flex items-start "><img class="pt-1 pr-3" src="@/images/arrow.png" alt="arrow"></button>
  
     <div v-if="open" class="rounded-lg absolute mt-8 bg-blue-drop divider-y p-4 text-left grid grig-rows-2 -ml-24 divider-y">
     <a class="rounded-lg bg-blue-drop hover:bg-blue-droph p-2  text-white text-base " href="https://z-krypto.netlify.app/">English</a>
     <a class="rounded-lg bg-blue-drop hover:bg-blue-droph p-2  text-white text-base " href="">DesignA</a>
     <a class="rounded-lg bg-blue-drop hover:bg-blue-droph p-2  text-white text-base " href="">DesignB</a>

  </div>

  </div>

</div>
    </div>
  </div>


  
    
</nav>
	
 <div ref="home" class="w-full bg-cover bg-center -mt-24" style="height:32rem; background-image: url(https://i.postimg.cc/h40NpqSv/hero.jpg);">
        <div class="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
            <div class="text-center">
                <h1 class="text-white text-2xl font-semibold uppercase md:text-3xl">Global Blockchain TRC20-USDT/TRX Entertainment Platform </h1>
                <div class="grid grid-cols-3 gap-x-1">
                <h4 class="mt-6 px-4 py-4  text-white text-2xl text-bold uppercase ">Fair</h4>
                <h4 class="mt-6 px-4 py-4  text-white text-2xl text-bold uppercase ">Safe</h4>
                <h4 class="mt-6 px-4 py-4  text-white text-2xl text-bold uppercase ">Open</h4>
            </div>
            </div>
        </div>
    </div>
    <div ref="rul" class="lg:pl-60 lg:pr-8 pl-4 bg-blue-back1 w-full inline-flex pb-4 pt-6"> 

      <img class="px-2" src="./images/bar.png" alt="bar">
      <h4 class="font-bold lg:text-5xl text-3x1 lg:pt-0 pt-3 text-white lg:px-2 ">Rules</h4>
      <h4 class="font-regular text-5xl text-blue-slash lg:pl-12 pl-4 ">/</h4>
      <img class="pl-1 pt-2" src="./images/RULES.png" alt="rules">
    </div>
    <div class="lg:pl-36 lg:pr-16 pl-4 bg-blue-back1 w-full inline-flex pb-8 pt-6 lg:space-x-24 "> 

      <button  @click="activeTab = 'Odd'" class=" lg:text-4xl text-indigo-300 hover:text-white px-4">Odd-even Hash</button>
       <button  @click="activeTab = 'Lucky'" class=" lg:text-4xl text-indigo-300 hover:text-white px-4">Lucky Hash</button>
       <button  @click="activeTab = 'Niu'" class=" lg:text-4xl text-indigo-300 hover:text-white px-4">NiuNiu Hash</button>
       <button  @click="activeTab = 'Equal'" class=" lg:text-4xl text-indigo-300 hover:text-white px-4">Equal Niuniu</button>
        
    </div>
   <div class="bg-blue-back1 lg:pb-0 pb-8 pt-2 px-4 lg:px-52">

   


    
       

       <div class=""> <component :is="activeTab" /></div>
       
         


       <h4 class="text-center text-white font-bold text-4xl py-6">The winning examples</h4>

       <div class="grid lg:grid-cols-4 lg:grid-flow-row py-6 lg:pl-20 space-y-4 space-x-6">
       <div class=" rounded-lg bg-blue-gri pl-4">
       <h4 class="text-blue-tex text-3xl py-4 pl-4">01</h4>
       <p class="text-white text-sm px-4 py-4">The transfer amount is:2800.03 <br>
         The block hash for this transfer <br> is:000****98ec7<br>
         Banker number:98e, 9+8+10=27 Niu <br> seven
         Player number:ec7, 10+10+7=27 Niu <br> seven
         Result:<span class="text-green-500">win</span><br>
         System rewards:2800-2800*1%=2772</p>
       </div>
       <div class=" rounded-lg bg-blue-gri">
        <h4 class="text-blue-tex text-3xl pt-2 pl-4">02</h4>
       <p class="text-white text-sm px-4 py-4">The transfer amount is:2800.03 <br>
         The block hash for this transfer <br> is:000****98ec7<br>
         Banker number:98e, 9+8+10=27 Niu <br> seven
         Player number:ec7, 10+10+7=27 Niu <br> seven
         Result:<span class="text-red-500">Fail</span><br>
         System rewards:2800-2800*1%=2772</p>
       </div>
       <div class=" rounded-lg bg-blue-gri">
        <h4 class="text-blue-tex text-3xl pt-2 pl-4">03</h4>
       <p class="text-white text-sm px-4 py-4">The transfer amount is:2800.03 <br>
         The block hash for this transfer <br> is:000****98ec7<br>
         Banker number:98e, 9+8+10=27 Niu <br> seven
         Player number:ec7, 10+10+7=27 Niu <br> seven
         Result:<span class="text-green-500">Fail</span> <br>
         System rewards:2800-2800*1%=2772</p>
       </div>
       <div class=" rounded-lg bg-blue-gri">
        <h4 class="text-blue-tex text-3xl pt-2 pl-4">04</h4>
       <p class="text-white text-sm px-4 py-4">The transfer amount is:2800.03 <br>
         The block hash for this transfer <br> is:000****98ec7<br>
         Banker number:98e, 9+8+10=27 Niu <br> seven
         Player number:ec7, 10+10+7=27 Niu <br> seven
         Result:<span class="text-green-500">win</span><br>
         System rewards:2800-2800*1%=2772</p>
       </div>

       </div>
      

    </div>

     <div ref="process" class="lg:pl-64 pl-4 bg-blue-proc w-full inline-flex pb-4 pt-10 items-center"> 

      <img class="px-2" src="./images/bar.png" alt="bar">
      <h4 class="font-bold lg:text-5xl lg:pt-0 pt-3 text-3x1 text-white lg:px-2 ">Process</h4>
      <h4 class="font-regular text-2xl text-blue-slash lg:pl-12 pl-4 ">/</h4>
      <p class="pl-1 pt-2 font-base text-base text-white">Process for the new hand</p>
 </div>
   <div class="scrollbar-hide lg:pl-60 lg:pr-16 pl-4 bg-blue-proc w-full inline-flex pb-4 pt-10 space-x-3 lg:space-x-20 py-8 ">
  
      <div class="rounded-lg bg-blue-pross p-6 hover:bg-blue-pross1 focus:bg-blue-pross1 hover:shadow">
      <div class="rounded-tl-lg text-white text-lg p-3 lg:p-8 text-center">
      <button  @click="Tab = 'Register'" class="rounded-tl-lg text-white text-lg p-3 lg:p-8 bg-blue-buton1 hover:bg-blue-buton2 focus:bg-blue-buton2">1</button></div>
      <p class="text-center text-blue-tex lg:text-lg text-sm  lg:font-semibold px-1 lg:px-6">Register the Wallet</p>
      </div>
      <div class="rounded-lg bg-blue-pross p-6 hover:bg-blue-pross1 focus:bg-blue-pross1 hover:shadow">
      <div class="rounded-tl-lg text-white text-lg p-3 lg:p-8 text-center">
      <button @click="Tab = 'Purchase'" class="rounded-tl-lg text-white text-lg p-3 lg:p-8 bg-blue-buton1 hover:bg-blue-buton2 focus:bg-blue-buton2">2</button></div>
      <p class="text-center text-blue-tex lg:text-lg text-sm  lg:font-semibold px-1 lg:px-6">Purchase virtual currency</p>
      </div>
      <div class="rounded-lg bg-blue-pross p-6 hover:bg-blue-pross1 focus:bg-blue-pross1 hover:shadow">
      <div class="rounded-tl-lg text-white text-lg p-3 lg:p-8 text-center">
      <button @click="Tab = 'Transfer'" class="rounded-tl-lg text-white text-lg p-3 lg:p-8 bg-blue-buton1 hover:bg-blue-buton2 focus:bg-blue-buton2">3</button></div>
      <p class="text-center text-blue-tex lg:text-lg text-sm  lg:font-semibold px-1 lg:px-6">Transfer to the address</p>
      </div>
     
      

      </div>
      
      <div class=""><component :is="Tab" /></div>


      <div ref="advan" class="lg:pl-64 pl-4 bg-blue-imb w-full inline-flex pb-4 pt-10"> 

      <img class="px-1" src="./images/bar.png" alt="bar">
      <h4 class="font-bold lg:text-5xl text-3xl lg:pt-0 pt-3 text-white lg:px-2 ">Adventure</h4>
      <h4 class="font-regular text-5xl text-blue-slash lg:pl-12 lg:pl-4 pl-2">/</h4>
      <img class=" pt-2" src="./images/adven.png" alt="adven">

      
    </div>

      <h4 class="text-white lg:text-3xl text-2xl font-bold text-center bg-blue-imb lg:py-20  py-8">Why choose us?</h4>
    

      <div class="flex items-center justify-center p-12 bg-blue-imb w-full inline-flex  space-x-3 lg:space-x-64  ">
      

      <div class=""><button @click="Live = 'Fair'"> <img class="pl-4" src="@/images/sym1.png" alt="sym1">
      <h4 class="text-white lg:text-2xl text-sm text-semibold py-6 text-center">Fair and Transparent</h4>
      </button>
      </div>
      <div class=""><button @click="Live = 'Safe'"><img class="pl-4" src="@/images/sym2.png" alt="sym2">
      <h4 class="text-white lg:text-2xl text-sm text-semibold py-6 text-center">Safe and Reliable</h4>
      </button>
      </div>
      <div class=""><button @click="Live = 'Fast'"><img class="pl-4" src="@/images/sym3.png" alt="sym3">
      <h4 class="text-white lg:text-2xl text-sm text-semibold py-6 text-center">Easiest and Fast</h4>
      </button>
      </div>
      
      </div>
      <div class="lg:hidden bg-blue-imb p-6"><component :is="Live" /></div>

      <div class="flex items-center justify-center bg-blue-imb pb-8">
      <div class=" grid lg:grid-cols-3 lg:grid-flow-row bg-blue-imb lg:space-x-8 ">
      <div class="hidden md:block rounded-lg bg-blue-imbt hover:bg-blue-hov hover:text-white">
      <p class="text-blue-textm hover:text-white text-base lg:px-6 py-8 px-3 "><span class="font-semibold text-2xl pb-4">Fair and Transparent</span>
      <br>We stand up for the right of everyone to<br> be equal </p>
      <p class="text-blue-textm hover:text-white text-base px-6 ">Block hashes are randomly generated by a <br>decentralized block chain and can be <br>
      queried by anyone, anywhere, anytime</p>
      <p class="text-blue-textm hover:text-white text-base px-6 pb-8 ">Truly do not control the platform data, <br> all records transparent traces can be checked</p>
       </div>
         <div class="hidden md:block rounded-lg bg-blue-imbt hover:bg-blue-hov hover:text-white">
      <p class="text-blue-textm hover:text-white text-base px-6 py-8 "><span class="font-semibold text-2xl pb-4">Safe and Reliable</span>
      <br>We stand up for the right of everyone to <br> be equal </p>
      <p class="text-blue-textm hover:text-white text-base px-6 ">Block hashes are randomly generated by a <br>decentralized block chain and can be <br>
      queried by anyone, anywhere, anytime</p>
       </div>
         <div class="hidden md:block rounded-lg bg-blue-imbt hover:bg-blue-hov hover:text-white">
      <p class="text-blue-textm hover:text-white text-base px-6 py-8 "><span class="font-semibold text-2xl pb-4">Easiest and Fast</span>
      <br>We stand up for the right of everyone to <br> be equal </p>
       <p class="text-blue-textm hover:text-white text-base px-6 ">Block hashes are randomly generated by a <br>decentralized block chain and can be <br>
      queried by anyone, anywhere, anytime</p>
       </div>

      </div>
      </div>

       <div ref="faq" class="lg:pl-64 pl-4 bg-blue-proc w-full inline-flex pb-4 pt-10 items-center"> 

      <img class="px-2" src="./images/bar.png" alt="bar">
      <h4 class="font-bold text-5xl text-white lg:px-2 ">Faq</h4>
      <h4 class="font-regular text-2xl text-blue-slash lg:pl-12 pl-4 ">/</h4>
      <p class="pl-1 pt-2 font-base text-base text-yellow-500">Live chart</p>
 </div>

 <div class="bg-blue-proc items-center justify-center py-8 ">

 <div class="lg:pl-64 px-3  lg:pr-40  grid grid-rows-2 ">
 <div class="inline-flex rounded-t-lg bg-blue-faq p-4 ">
 <h4 class=" rounded-lg bg-blue-num shadow font-bold text-white text-2xl p-4">Q1</h4>
 <p class="text-white lg:text-3xl text-lg px-2 lg:px-6 pt-4 lg:pt-7">Q1: What is (Block hash)?</p>
 </div>
 <div class="rounded-b-lg bg-blue-faq2 block ">
 <p class="text-white text-base lg:text-2xl p-4">A block hash is the DNA of a piece of data, and each block hash is unique, random, and unbreakable.</p>
 </div>
 </div>

 
 </div>
 <div class="bg-blue-proc items-center justify-center py-8 ">

 <div class="lg:pl-64 px-3  lg:pr-40  grid grid-rows-2 ">
 <div class="inline-flex rounded-t-lg bg-blue-faq p-4 ">
 <h4 class=" rounded-lg bg-blue-num shadow font-bold text-white text-2xl pt-4 pl-4 w-16  h-16">Q2</h4>
 <p class="text-white lg:text-3xl text-lg px-2 lg:px-6 pt-4 lg:pt-7">Q2:What is blockchain?</p>
 </div>
 <div class="rounded-b-lg bg-blue-faq2 block lg:-mt-10 -mt-6 lg:-mt-2 z-10 ">
 <p class="text-white text-base lg:text-2xl p-4">A blockchain is essentially a shared database of data or information stored in it. It can not be forged, leave 
 traces throughout the whole process, can be traced, open and transparent, collective maintenance and other characteristics.</p>
 </div>
 </div>
</div>

  <div class="bg-blue-proc items-center justify-center py-8 ">

 <div class="lg:pl-64 px-3  lg:pr-40  grid grid-rows-2 ">
 <div class="inline-flex rounded-t-lg bg-blue-faq p-4 ">
 <h4 class=" rounded-lg bg-blue-num shadow font-bold text-white text-2xl w-16 h-16 pt-4 text-center">Q3</h4>
 <p class="text-white lg:text-3xl text-lg px-2 lg:px-6 pt-4 lg:pt-7">Q3:Why do I win or not win consistently?</p>
 </div>
 <div class="rounded-b-lg bg-blue-faq2 lg:-mt-16 -mt-40 z-10 ">
 <p class="text-white text-base lg:text-2xl p-4  ">Why do I win or not win consistently? First of all, the number of consecutive times that do not win is a small 
 probability event (the definition of small probability event), followed by winning and not winning is a random event, the frequency of the occurrence of random 
 events will tend to a stable value. In the non-iterative case, the probability of something happening is the same for everyone, and in this case, everyone is fair. 
 At the same time, random events will obey the law of large numbers (under the condition of constant experiment, repeated for many times, the frequency of random 
 events is approximate to its definition of the law of large numbers). In the case of increasing transfer frequency, the probability of winning and not winning will 
 tend to a stable value. So please continue to transfer money, the total probability of winning will increase as the transfer frequency increases..</p>
 </div>
 </div>
</div>

 <div class="bg-blue-proc items-center justify-center py-8 ">

 <div class="lg:pl-64 px-3  lg:pr-40  grid grid-rows-2 ">
 <div class="inline-flex rounded-t-lg bg-blue-faq p-4 ">
 <h4 class=" rounded-lg bg-blue-num shadow font-bold text-white text-2xl p-4">Q4</h4>
 <p class="text-white lg:text-3xl text-lg px-2 lg:px-6 pt-4 lg:pt-7">Q4:Why do I win or not win consistently?</p>
 </div>
 <div class="rounded-b-lg bg-blue-faq2 block ">
 <p class="text-white text-base lg:text-2xl p-4">In order to ensure the security of funds, blockchain technology will conduct multiple accounting, 
 comparison and confirmation. So it's slow, but it's safe.</p>
 </div>
 </div>
</div>

 <div class="bg-blue-proc items-center justify-center py-8 ">

 <div class="lg:pl-64 px-3  lg:pr-40  grid grid-rows-2 ">
 <div class="inline-flex rounded-t-lg bg-blue-faq p-4 ">
 <h4 class=" rounded-lg bg-blue-num shadow font-bold text-white text-2xl w-16 h-16 px-4 pt-4">Q5</h4>
 <p class="text-white lg:text-3xl text-lg px-2 lg:px-6 pt-4 lg:pt-7">Q5:Why are there so many USDT type options when transferring coins? Which one should I choose?</p>
 </div>
 <div class="rounded-b-lg bg-blue-faq2 block -mt-8 lg:-mt-4 ">
 <p class="text-white text-base lg:text-2xl p-4">Many well-known public chains around the world All support USDT transfers, and lucky hash is based on wave field TRC20 
 technology. So the lucky hash transfer address belongs to USDT-TRC20, you should choose USDT-TRC20; If you choose a different type, the lucky hash will not receive your 
 USDT, resulting in a loss for both you and the lucky hash.</p>
 </div>
 </div>
</div>

 <div class="bg-blue-proc items-center justify-center py-8 ">

 <div class="lg:pl-64 px-3  lg:pr-40  grid grid-rows-2 ">
 <div class="inline-flex rounded-t-lg bg-blue-faq p-4 ">
 <h4 class=" rounded-lg bg-blue-num shadow font-bold text-white text-2xl w-16 h-16 px-4 pt-4">Q5</h4>
 <p class="text-white lg:text-3xl text-lg px-2 lg:px-6 pt-4 lg:pt-7">Q6：Please contact us if you have any questions</p>
 </div>
 <div class="rounded-b-lg bg-blue-faq2 block -mt-2 lg:-mt-2 ">
 <a href="https://www.file.io/" class="text-yellow-600 text-base lg:text-2xl p-4">Click to contact the support team</a>
 </div>
 </div>
</div>


 <div class="bg-blue-proc sticky bottom-0 lg:hidden z-50 pb-0 ">
 <footer class=" flex inline-flex rounded-t-lg bg-blue-foot w-full items-center text-center space-x-16  justify-center">

    <div class=" "><button @click="scrollToAnchorPoint('home')"><img class="" src="@/images/home.png" alt="home"><p class="text-center text-indigo-300 text-sm pb-1 hover:text-blue-foot2">Home</p></button></div>
    <div class=""><button @click.prevent="showModal"><img class="" src="@/images/dsign.png" alt="dsign"><p class="text-center text-indigo-300 text-sm pb-1 hover:text-blue-foot2 ">Earn coins</p></button></div>
    <div class=""><button @click.prevent="showModal"><img class="" src="@/images/cw.png" alt="cw"><p class="text-center text-indigo-300 text-sm pb-1 hover:text-blue-foot2 ">Assets</p></button></div>
    
 </footer>
 </div>

        
     
    
   

    <the-modal-component v-show="isModalVisible"
      @close="closeModal" />

  


</template>


<script>

import TheModalComponent from './components/TheModalComponent.vue';
import Odd from './components/Odd.vue';
import Niu from './components/Niu.vue';
import Lucky from './components/Lucky.vue';
import Equal from './components/Equal.vue';
import Register from './components/Register.vue';
import Purchase from './components/Purchase.vue';
import Transfer from './components/Transfer.vue';
import Automatic from './components/Automatic.vue';
import Fair from './components/Fair.vue';
import Safe from './components/Safe.vue';
import Fast from './components/Fast.vue';



export default {
    name: 'App',
    components: {
      TheModalComponent,
      Odd,
      Niu,
      Lucky,
      Equal,
      Register,
      Purchase,
      Transfer,
      Automatic,
      Fair,
      Safe,
      Fast
    },
     data() {
      return {
        isModalVisible: false,
        activeTab: "Odd",
        Tab: "Register",
        open: false,
        Live: Fair
      };
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      },
      scrollToAnchorPoint(refName) {
            const el = this.$refs[refName]
            el.scrollIntoView({ behavior: 'smooth'})
        }
        
    }
   

};




 
    
</script>

