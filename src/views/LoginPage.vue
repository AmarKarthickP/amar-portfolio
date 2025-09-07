<template>
  <ion-page>
    <ion-content>
      <div style="font-family: 'Poppins';">
        <div class="flex flex-col justify-center mt-5 h-[75vh]">
          <p class="bg-gradient-to-r from-[#2E7D32] to-[#66BB6A] bg-clip-text text-transparent text-3xl text-center font-semibold">Welcome Back</p>
          <p class="mt-3 text-gray-400 text-center font-medium">Login to your account</p>
          <div class="mt-8 mx-8 md:mx-[30%] lg:mx-[38%]">
            <!-- Email -->
            <div class="text-[#41754e] font-medium relative mt-5">
              <input v-model="email" type="email" placeholder="Enter email"
                class="bg-[#dbe6de] w-full rounded-lg pl-12 py-1.5 text-[#41754e] focus:outline-none" />
              <svg class="w-6 h-6 text-[#41754e] absolute top-1.5 left-3" fill="#41754e" viewBox="0 0 24 24">
                <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z"/>
                <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z"/>
              </svg>
            </div>
            <!-- Password -->
            <div class="text-[#41754e] font-medium relative mt-5">
              <input v-model="password" type="password" placeholder="Enter password"
                class="bg-[#dbe6de] w-full rounded-lg pl-12 py-1.5 text-[#41754e] focus:outline-none" />
              <svg class="w-6 h-6 text-[#41754e] absolute top-1.5 left-3" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z" clip-rule="evenodd"/>
              </svg>
            </div>
            <!-- Forgot -->
            <button class="w-full text-right mt-5 text-[#41754e] font-medium text-sm">Forgot Password?</button>
          </div>
        </div>
        <!-- Error Message -->
        <div class="min-h-10 pt-3">
          <p v-if="loginFailed" class="text-center text-red-600 text-sm font-medium">Invalid email or password</p>
        </div>
        <!-- Login Button -->
        <div class="mx-8 md:mx-[30%] relative lg:mx-[38%] text-white text-center rounded-full py-1.5 font-medium bg-gradient-to-r from-[#2E7D32] to-[#66BB6A] relative mt-2 shadow-lg shadow-[#dbe6de]">
          <button @click="handleLogin" class="w-full">
            <p v-if="!loading">Login</p>
            <Loader v-if="loading" class="absolute top-2.5 left-[48%]" />
          </button>
        </div>
        <!-- Sign Up -->
        <div class="mt-5">
          <p class="mx-4 whitespace-nowrap text-gray-400 font-medium text-sm text-center">Don't have an account?
            <router-link to="/register" id="text-green" class="font-semibold">Sign up</router-link>
          </p>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import axios from 'axios'
import { defineComponent } from 'vue'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue'
import { login } from '@/api/auth.js'
import Loader from '@/components/Loader.vue'

export default defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    Loader,
  },
  data() {
    return {
      email: '',
      password: '',
      loginFailed: false,
      loading: false,
    }
  },
  methods: {
    async handleLogin() {
      this.loginFailed = false
      this.loading = true

      try {
        const response = await login(this.email, this.password)
        if (response.status === 200 && response.data.message) {
          localStorage.setItem('authToken', response.data.message)
          localStorage.setItem('emailId', this.email)
          localStorage.setItem('fullName', response.data.full_name)
          this.$router.push('/tabs/home')
        } else {
          this.loginFailed = true
        }
      } catch (error) {
        console.error('Login error:', error)
        this.loginFailed = true
      } finally {
        this.loading = false
      }
    },
  }
})
</script>

<style scoped>
#text-green {
  color: #41754e;
}
</style>
