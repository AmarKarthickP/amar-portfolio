<template>
  <ion-page>
    <ion-content>
      <div style="font-family: 'Poppins';" class="h-[100vh] bg-[whitesmoke] shadow-xl" shadow-gray-600>
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-[#2E7D32] to-[#66BB6A] justify-center items-center py-10 px-5">
          <!-- Profile Section -->
          <div class="flex mt-4">
            <p class="text-white text-xl font-medium pt-1.5">{{ userName }}</p>
            <button @click="toggleProfilePanel" class="ml-auto active:scale-95 transition duration-200">
              <img class="ml-auto h-10 w-10 bg-[cover] rounded-full shadow-lg shadow-gray-600" src="../assets/default-profile.jpeg" alt="profile-image" />
            </button>
          </div>
          <div class="flex relative gap-5">
            <!-- Search Bar -->
            <div class="text-[#41754e] font-medium relative mt-5">
              <input type="search" id="fullname" name="fullname" placeholder="Search by name"
                class="bg-white w-full text-sm rounded-lg shadow-lg shadow-gray-600 pl-3 pr-10 pt-2 pb-1 focus:outline-none"
              >
              <svg class="h-6 w-6 text-[#41754e] absolute top-1.5 right-3"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
                <circle cx="11" cy="11" r="8" />  <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <!-- Filters -->
            <div class="bg-white shadow-lg shadow-gray-600 mt-5 right-2 p-1 py-1.5 rounded-md
                        active:bg-[#66BB6A] active:text-white">
              <svg class="h-6 w-7 text-[#41754e] pt-1"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  
                <line x1="4" y1="21" x2="4" y2="14" />  
                <line x1="4" y1="10" x2="4" y2="3" />  
                <line x1="12" y1="21" x2="12" y2="12" />  
                <line x1="12" y1="8" x2="12" y2="3" />  
                <line x1="20" y1="21" x2="20" y2="16" />  
                <line x1="20" y1="12" x2="20" y2="3" />  
                <line x1="1" y1="14" x2="7" y2="14" />  
                <line x1="9" y1="8" x2="15" y2="8" />  
                <line x1="17" y1="16" x2="23" y2="16" />
              </svg>
            </div>
          </div>
        </div>
        <!-- Content -->
        <div class="bg-[whitesmoke] justify-center items-center p-5 -mt-3 rounded-2xl">
          <!-- Welcome Bonus -->
          <div class="bg-gradient-to-t from-[#2E7D32] to-[#66BB6A] rounded-xl shadow-lg shadow-gray-400 min-h-20 w-full p-5 relative">
            <p class="bg-white text-center shadow-lg text-sm rounded-full font-medium px-2 py-1 w-[150px]">One time offer!</p>
            <p class="text-white text-xl font-medium mt-4">Get Special Offer</p>
            <p class="text-white text-md mt-1 font-medium">upto</p>
            <p class="absolute top-22 left-18 text-[35px] font-medium text-white">60</p>
            <p class="absolute top-30 left-28 px-1 bg-teal-600 text-white rounded-full text-[12px]">%</p>
            <p class="text-white text-sm font-medium mt-4">on you first book</p>
            <img class="absolute bottom-0 -right-4 w-[190px]" src="../assets/free-first-book.png" alt="one-time-offer" />
            <p class="bg-[#C8E6C9] text-[#41754e] absolute bottom-4 right-6 shadow-lg shadow-gray-600 text-center text-[10px]
             rounded-full font-medium px-1 py-1 w-[70px] hover:bg-[#A5D6A7] transition">
              Claim
            </p>
          </div>
          <!-- Categories -->
           <!-- <div>
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 64 64" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><path d="M36.787 44.422a14.94 14.94 0 0 1-.771 2.884l3.131 2.837a18.877 18.877 0 0 1-1.516 2.646l-4.02-1.296a15.042 15.042 0 0 1-2.119 2.118l1.296 4.02a18.977 18.977 0 0 1-2.646 1.516l-2.837-3.131c-.922.349-1.885.608-2.884.771l-.893 4.136c-.505.04-1.012.077-1.528.077s-1.023-.037-1.529-.077l-.893-4.136a14.94 14.94 0 0 1-2.884-.771l-2.837 3.131a18.877 18.877 0 0 1-2.646-1.516l1.296-4.02a15.088 15.088 0 0 1-2.118-2.118l-4.02 1.296a18.977 18.977 0 0 1-1.516-2.646l3.131-2.837a14.921 14.921 0 0 1-.771-2.884l-4.136-.893C3.037 43.023 3 42.516 3 42s.037-1.023.077-1.529l4.136-.893a14.94 14.94 0 0 1 .771-2.884l-3.131-2.837c.439-.924.939-1.812 1.516-2.646l4.02 1.296a15.042 15.042 0 0 1 2.119-2.118l-1.296-4.02a18.977 18.977 0 0 1 2.646-1.516l2.837 3.131a14.921 14.921 0 0 1 2.884-.771l.893-4.136C20.977 23.037 21.484 23 22 23s1.023.037 1.529.077l.893 4.136a14.94 14.94 0 0 1 2.884.771l2.837-3.131c.924.439 1.812.939 2.646 1.516l-1.296 4.02a15.042 15.042 0 0 1 2.118 2.119l4.02-1.296a18.977 18.977 0 0 1 1.516 2.646l-3.131 2.837c.349.922.608 1.885.771 2.884l4.136.893c.04.505.077 1.012.077 1.528s-.037 1.023-.077 1.529zM22 32c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zM50.659 16.305a8.015 8.015 0 0 1-.611 1.48l1.579 3.026a11.051 11.051 0 0 1-1.815 1.815l-3.026-1.579a7.88 7.88 0 0 1-1.48.611l-1.024 3.26c-.422.05-.848.082-1.282.082s-.86-.032-1.281-.081l-1.024-3.26a7.946 7.946 0 0 1-1.48-.611l-3.026 1.579a11.051 11.051 0 0 1-1.815-1.815l1.579-3.026a7.88 7.88 0 0 1-.611-1.48l-3.26-1.024C32.032 14.86 32 14.434 32 14s.032-.86.081-1.281l3.26-1.024c.155-.517.36-1.013.611-1.48l-1.579-3.026a11.051 11.051 0 0 1 1.815-1.815l3.026 1.579a7.88 7.88 0 0 1 1.48-.611l1.024-3.26C42.14 3.032 42.566 3 43 3s.86.032 1.281.081l1.024 3.26c.517.155 1.013.36 1.48.611l3.026-1.579a11.051 11.051 0 0 1 1.815 1.815l-1.579 3.026c.252.467.456.963.611 1.48l3.26 1.024c.05.422.082.848.082 1.282s-.032.86-.081 1.281zM43 10a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM58.739 38.871a6.96 6.96 0 0 1-.649 1.572l.995 2.094a9.07 9.07 0 0 1-1.548 1.548l-2.094-.995a6.941 6.941 0 0 1-1.572.649l-.778 2.188c-.359.044-.722.073-1.093.073s-.734-.029-1.093-.073l-.778-2.188a6.96 6.96 0 0 1-1.572-.649l-2.094.995a9.07 9.07 0 0 1-1.548-1.548l.995-2.094a6.952 6.952 0 0 1-.649-1.571l-2.188-.778C43.029 37.734 43 37.371 43 37s.029-.734.073-1.093l2.188-.778a6.934 6.934 0 0 1 .649-1.571l-.995-2.094a9.07 9.07 0 0 1 1.548-1.548l2.094.995a6.941 6.941 0 0 1 1.572-.649l.778-2.188c.359-.045.722-.074 1.093-.074s.734.029 1.093.073l.778 2.188a6.96 6.96 0 0 1 1.572.649l2.094-.995a9.07 9.07 0 0 1 1.548 1.548l-.995 2.094c.278.49.495 1.017.649 1.572l2.188.778c.044.359.073.722.073 1.093s-.029.734-.073 1.093zM52 34a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM61.196 5.02l-5.981-1.196-1.196 5.98 1.961.393.539-2.692A15.005 15.005 0 0 1 58 14a14.84 14.84 0 0 1-3.29 9.375l1.561 1.251A17.049 17.049 0 0 0 60 14c0-2.619-.605-5.201-1.756-7.531l2.56.512zM23.707 13.293l-1.414 1.414 1.359 1.359A26.03 26.03 0 0 0 22 16a25.947 25.947 0 0 0-19.978 9.359l1.536 1.281A23.951 23.951 0 0 1 22 18c.509 0 1.017.029 1.525.061l-1.232 1.232 1.414 1.414L27.414 17z" fill="#000000" opacity="1" data-original="#000000" class=""></path></g></svg>
           </div> -->
        </div>

        
      </div>
      <!-- Dimmed background when profile panel is open -->
      <div v-if="showProfile" @click="toggleProfilePanel" class="fixed inset-0 z-40" style="background-color: rgba(0, 0, 0, 0.5);"></div>
      <!-- Slide-up profile panel -->
      <transition name="slide-up">
        <div v-if="showProfile" class="fixed bottom-0 left-0 w-full bg-[whitesmoke] p-4 rounded-t-2xl shadow-lg z-50">
          <p class="text-center text-[#41754e] font-semibold text-lg mb-4">Profile Options</p>
          <div 
            @click="handleLogout"
            class="w-full bg-red-500 text-center text-[whitesmoke] py-1 rounded-xl font-semibold
                  hover:bg-red-600 active:bg-red-700 active:scale-95
                  shadow-md hover:shadow-lg transition-all duration-200"
          >
            Logout
          </div>

        </div>
      </transition>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent
} from '@ionic/vue'
import { logout } from '@/api/auth.js'
import { codeOutline } from 'ionicons/icons'
export default defineComponent({
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonContent
  },
  data() {
    return {
      showProfile: false,
      userName: null,
    }
  },
  mounted() {
    this.userName = localStorage.fullName
  },
  methods: {
    toggleProfilePanel() {
      this.showProfile = !this.showProfile
    },
    async handleLogout() {
      try {
        await logout()
        this.$router.push('/login')
      } catch (error) {
        console.error('Logout failed:', error)
      }
    }
  },
})
</script>


<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
}
</style>
