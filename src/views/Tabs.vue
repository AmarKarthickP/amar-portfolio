<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" class="py-1">
        <ion-tab-button class="m-2" tab="home" href="/tabs/home">
          <ion-icon :icon="home" />
          <!-- <ion-label>Home</ion-label> -->
        </ion-tab-button>

        <ion-tab-button class="m-2" tab="search" href="/tabs/search">
          <ion-icon :icon="search" />
          <!-- <ion-label>Search</ion-label> -->
        </ion-tab-button>

        <ion-tab-button class="-mt-1" tab="sell" href="/tabs/sell">
          <ion-icon :icon="addCircle" class="h-10 w-10 text-[#307f34]" />
          <!-- <ion-label>Sell</ion-label> -->
        </ion-tab-button>

        <ion-tab-button class="m-2" tab="orders" href="/tabs/orders">
          <ion-icon :icon="reader" />
          <!-- <ion-label>Orders</ion-label> -->
        </ion-tab-button>

        <ion-tab-button class="m-2" tab="saved" href="/tabs/saved">
          <ion-icon :icon="bookmark" />
          <!-- <ion-label>Saved</ion-label> -->
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
  import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
  import { search, addCircle, home, bookmark, reader } from 'ionicons/icons';

  export default {
    name: 'Tabs',
    components: {
      IonLabel,
      IonTabs,
      IonTabBar,
      IonTabButton,
      IonIcon,
      IonPage,
      IonRouterOutlet,
    },
    setup() {
      return {
        search,
        addCircle,
        home,
        bookmark,
        reader
      };
    },
  };
</script>