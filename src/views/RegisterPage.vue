<template>
  <ion-page>
    <ion-content>
      <div style="font-family: 'Poppins';">
        <div class="flex flex-col justify-center mt-5 h-[89vh]">
          <p class="bg-gradient-to-r from-[#2E7D32] to-[#66BB6A] bg-clip-text text-transparent text-3xl text-center font-semibold">Register</p>
          <p class="mt-3 text-gray-400 text-center font-medium">Create your new account</p>
          <div class="mt-14 mx-8 md:mx-[30%] lg:mx-[38%]">
            <!-- Full Name Input -->
            <div class="text-[#41754e] font-medium relative">
              <input type="text" id="fullname" name="fullname" placeholder="Enter full name"
                class="bg-[#dbe6de] w-full rounded-lg pl-12 py-1.5 text-[#41754e] focus:outline-none">
              <svg class="h-6 w-6 text-[#41754e] absolute top-1.5 left-3"  fill="#41754e" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </div>
            <!-- Email Input -->
            <div class="text-[#41754e] font-medium relative mt-5">
              <input type="email" id="email" name="email" placeholder="Enter email"
                class="bg-[#dbe6de] w-full rounded-lg pl-12 py-1.5 text-[#41754e] focus:outline-none">
              <svg class="w-6 h-6 text-[#41754e] absolute top-1.5 left-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#41754e" viewBox="0 0 24 24">
                <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z"/>
                <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z"/>
              </svg>
            </div>
            <!-- Password Input -->
            <div class="text-[#41754e] font-medium relative mt-5">
              <input type="password" id="password" name="password" placeholder="Enter password"
                class="bg-[#dbe6de] w-full rounded-lg pl-12 py-1.5 text-[#41754e] focus:outline-none">
              <svg class="w-6 h-6 ttext-[#41754e] absolute top-1.5 left-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z" clip-rule="evenodd"/>
              </svg>
            </div>
            <!-- Error Handling -->
            <div class="min-h-10 pt-3">
              <p class="text-center text-red-600 text-sm font-medium">User already exists</p>
            </div>
            <!-- Login button -->
            <div class="text-white text-center rounded-full py-1.5 font-medium bg-gradient-to-r from-[#2E7D32] to-[#66BB6A] relative mt-2 shadow-lg shadow-[#dbe6de]">
              <button @click="handleRegister()">Register</button>
            </div>
          </div>
          <!-- Other Login Options -->
          <div class="mt-10 mx-8 md:mx-[30%] lg:mx-[38%] flex items-center text-center text-gray-400 font-medium text-sm">
            <div class="flex-grow h-px bg-gray-300"></div>
            <p class="mx-4 whitespace-nowrap">Or continue with</p>
            <div class="flex-grow h-px bg-gray-300"></div>
          </div>
          <div class="flex justify-center gap-8 mt-5">
            <!-- Facebook Login -->
            <div class="shadow shadow-gray-500 bg-white rounded-full p-1">
              <img class="w-10" src="../assets/facebook.png" alt="facebook-login" />
            </div>
            <!-- Google Login -->
            <div class="shadow shadow-gray-500 bg-white rounded-full p-1">
              <img class="w-10" src="../assets/google.png" alt="google-login" />
            </div>
            <!-- Apple Login -->
            <div class="shadow shadow-gray-500 bg-white rounded-full p-1">
              <img class="w-10" src="../assets/apple.png" alt="apple-login" />
            </div>
          </div>
        </div>
        <!-- Sign Up -->
        <div class="">
          <p class="mx-4 whitespace-nowrap text-gray-400 font-medium text-sm text-center">Already have an account ?
            <router-link to="/login" id="text-green" class="font-semibold">Sign in</router-link>
          </p>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  },
  data() {
    return {
      fullname: '',
      email: '',
      password: '',
      error: '',
    };
  },
  methods: {
    handleRegister() {
      const router = useRouter();
        this.$router.push('/home');
    },
  },
});
</script>

<style scoped>
#text-green {
  color: #41754e;
}
</style>
