<script setup lang="ts">
import { onMounted } from 'vue';
import { useNotificationsStore } from '@/store/notifications';
import { getRandomNotification } from '@/services/notifications';
import { sleep } from '@/helpers/utils';

// Setup

const notifyStore = useNotificationsStore();

// Methods

const checkForNotifications = async () => {
  const item = await getRandomNotification();
  notifyStore.notifications.push(item);
}

const goToArticle = (url: string, notificationId: string) => {
  window.open(url, '_blank');
  notifyStore.removeNotification(notificationId);
}

// Lifecycle

// Simulating dummy notification fetch over time
onMounted(async () => {
  await sleep(1000);
  await checkForNotifications();
  await sleep(2000);
  await checkForNotifications();
  await sleep(2000);
  await checkForNotifications();
});
</script>
<template>
<div class="toast-notifications-wrapper">
  <div 
    v-for="notification in notifyStore.notifications"
    :key="`${notification.namespace.id}-${notification.wikibase_item}`"
    class="toast-notification"
  >
    <p>LATEST NEWS! 
      <a 
        @click.prevent="goToArticle(notification.content_urls.desktop.page, notification.wikibase_item)"
      >{{ notification.title }}</a>
    </p>
  </div>
</div>
</template>
<style lang="scss">
.toast-notifications-wrapper {
  position: fixed;
  bottom: var(--size-l);
  right: var(--size-l);
  
  .toast-notification {
    width: 30vw;
    padding: var(--size-m);
    background: var(--color-black);
    color: var(--color-white);
    margin-bottom: var(--size-s);
    border-radius: var(--border-radius);

    a {
      color: var(--color-white);
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
</style>