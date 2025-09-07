<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Orders</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <p>Here are your Orders books.</p>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

export default {
  name: 'OrdersPage',
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
  },
};
</script>
