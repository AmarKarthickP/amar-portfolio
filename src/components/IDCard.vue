<template>
  <div class="flex flex-col items-center justify-start min-h-screen pt-16">
    
    <!-- Lanyard -->
    <div class="flex flex-col items-center">
      <!-- Strap -->
      <div class="w-8 h-36 bg-gradient-to-b to-[#682c85] rounded-sm shadow-inner relative">
        <div class="absolute inset-y-0 left-1/2 w-px bg-white/10"></div>
      </div>

      <!-- Metal Ring -->
      <div class="w-9 h-9 -mt-1 border-[5px] border-gray-400 rounded-full bg-gray-100 shadow-md z-10"></div>

      <!-- Clip -->
      <div class="w-5 h-12 -mt-3 bg-gradient-to-b from-gray-300 via-gray-100 to-gray-400 rounded-md shadow-lg relative z-20">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-2 bg-gray-500 rounded-full"></div>
      </div>
    </div>

    <!-- Cards -->
    <div class="relative -mt-2 group perspective-1000">

      <!-- Back Card -->
      <!-- <div class="absolute top-6 left-10 w-72 h-[440px] bg-gradient-to-t from-[#211a4d] to-[#682c85] rounded-xl shadow-2xl rotate-[-8deg]">
        <p class="absolute bottom-22 left-7/12 font-semibold text-3xl tracking-widest rotate-90">TEAMPRO</p>
      </div> -->

      <!-- Front Card -->
      <div class="relative w-72 h-[440px] bg-white rounded-xl shadow-[0_25px_50px_rgba(0,0,0,0.25)] overflow-hidden flex flex-col transform rotate-[-2deg] transition duration-300 group-hover:rotate-0">

        <!-- Image Section -->
        <div class="relative h-3/5 bg-gray-100">
          <img 
            src="../assets/profile/amar-karthick.jpeg" 
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Content -->
        <div class="flex-1 px-6 pb-6 flex flex-col justify-between">
          <h1 class="text-2xl font-semibold text-gray-800 leading-tight tracking-tight">
            Amar Karthick P
          </h1>
          <img class="w-8/12" src="../assets/profile/teampro.png" alt="company" />
          <div class="flex justify-between items-end border-t border-gray-200 pt-4">
            <span class="text-[11px] font-semibold uppercase tracking-widest text-gray-500">
              Software Developer
            </span>
            <span class="text-[11px] font-mono text-gray-400">
              # TC00042
            </span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.card-curve {
  clip-path: ellipse(120% 100% at 25% 100%);
}

/* Adds subtle depth feel */
.perspective-1000 {
  perspective: 1000px;
}
</style>