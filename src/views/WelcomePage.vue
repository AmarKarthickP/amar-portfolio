<template>
  <ion-page>
    <ion-content>
      <transition name="fadeout">
        <div v-if="!showBg" style="font-family: 'Poppins';" class="flex items-center justify-center h-[100vh]">
          <transition name="fade">
            <!-- <p v-if="showText" class="text-white font-semibold text-3xl mt-[-20%]">txtbook.in</p> -->
             <img v-if="showText" src="../assets/txtbook.jpg" alt="txtbook-logo" />
          </transition>
        </div>
      </transition>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { IonContent, IonPage } from '@ionic/vue';

const showText = ref(false);
const showBg = ref(false);
const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    showText.value = true;
  }, 1000);

  setTimeout(() => {
    showBg.value = true;
  }, 3000);

  setTimeout(() => {
    router.push('/login');
  }, 4000);
});
</script>

<style scoped>
/* Text fade in */
.fade-enter-active {
  transition: opacity 1s ease;
}
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}

/* Background fade out */
.fadeout-leave-active {
  transition: opacity 1s ease;
}
.fadeout-leave-from {
  opacity: 1;
}
.fadeout-leave-to {
  opacity: 0;
}
</style>
