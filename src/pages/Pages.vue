<template>
  <IonContent>
    <div class="bg-white flex justify-center">
      
      <transition name="bounce-drop">
        <IDCard v-if="showCard" class="w-1/2 -mt-20" />
      </transition>

      

    </div>
  </IonContent>
</template>

<script>
import { IonContent } from '@ionic/vue'
import IDCard from '@/components/IDCard.vue'

export default {
  components: {
    IonContent,
    IDCard
  },
  data() {
    return {
      showCard: false
    }
  },
  mounted() {
    this.showCard = true
  }
}
</script>

<style scoped>
.bounce-drop-enter-active {
  animation: dropBounce 2s ease forwards;
}

@keyframes dropBounce {
  0% {
    transform: translateY(-200px);
    opacity: 0;
  }
  60% {
    transform: translateY(20px);
    opacity: 1;
  }
  80% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>