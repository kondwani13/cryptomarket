<template>
    <div>
        <div class="h-full w-full fixed top-0 left-0 z-20 "></div>
        <div class="bg-blue-lbb rounded-lg text-lg pt-6 shadow-lg w-96 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
         <div class="bg-blue-lye  rounded-t-lg  text-bold text-3x1 text-center text-yellow-900 pt-8 pb-6">TRC20 address  
         <button  @click="close"  class="text-white text-lg ml-16">X</button></div>
              <div class="p-10 text-center">
               <p class="text-white font-regular pb-1">Please enter TRC20 address to log in</p>
               <input class="w-80 rounded-lg bg-white py-1" id="username" type="text" placeholder="   TRC20 address">
               <p class="text-white text-sm py-8">Please enter TRC20 address to log in</p>
                <a href="/one" class="text-yellow-900 text-sm p-8">To Sign Up</a>         
              </div>
              <div class="text-center pb-4">
               <button  class="bg-blue-lye rounded-lg text-lg bg-yellow-500 py-2 font-bold px-8 shadow">Log in</button>
              </div>
           
        </div>
    </div>
</template>

<script>
export default {
     name: 'TheModalComponent',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
    

</script>

<style scoped>
.bounce-enter-active {
    animation: bounce-in .5s ease-out both;
}

.bounce-leave-active {
    animation: bounce-in .5s reverse ease-in both;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.10);
    }
    100% {
        transform: scale(1);
    }
}
</style>
