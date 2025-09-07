<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="home" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="search" />
          <ion-label>Search</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="add" />
          <ion-label>Sell</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab4" href="/tabs/tab4">
          <ion-icon :icon="reader" />
          <ion-label>Orders</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab5" href="/tabs/tab5">
          <ion-icon :icon="bookmark" />
          <ion-label>Saved</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
  import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
  import { search, add, home, bookmark, reader } from 'ionicons/icons';

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
        add,
        home,
        bookmark,
        reader
      };
    },
  };
</script>