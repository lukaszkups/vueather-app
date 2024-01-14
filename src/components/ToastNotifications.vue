<script setup lang="ts">
import { useNotificationsStore } from '@/store/notifications';
import { notificationTypeEnum } from '@/helpers/dictionaries';

// Setup

const notifyStore = useNotificationsStore();

// Methods

const goToNotificationUrl = (url: string, notificationId: string | number) => {
  if (url.length) {
    window.open(url, '_blank');
  }
  notifyStore.removeNotification(notificationId);
}
</script>
<template>
<div class="toast-notifications-wrapper">
  <div 
    v-for="notification in notifyStore.notifications"
    :key="notification.id"
    :class="notificationTypeEnum[notification.type]"
    class="toast-notification"
    @click.prevent="goToNotificationUrl(notification.url, notification.id)"
  >
    <p>{{ notification.title }}</p>
  </div>
</div>
</template>
<style lang="scss">
.toast-notifications-wrapper {
  position: fixed;
  bottom: var(--size-l);
  right: var(--size-l);
  margin-left: var(--size-l);
  overflow: hidden;
  width: 40vw;
  box-sizing: border-box;

  .toast-notification {
    box-sizing: border-box;
    width: 100%;
    padding: var(--size-m);
    background: var(--color-black);
    color: var(--color-white);
    margin-bottom: var(--size-s);
    border-radius: var(--border-radius);
    border: 1px solid var(--color-white);
    cursor: pointer;
    transition: background-color 0.5s, border-color 0.5s, color 0.5s;

    &:hover {
      border-color: var(--color-black);
      color: var(--color-black);
      transition: background-color 0.5s, border-color 0.5s, color 0.5s;
    }

    &.info {
      background-color: var(--color-notification-info);
    }
    &.error {
      background-color: var(--color-notification-error);
    }
  }
}

@media screen and (max-width: 990px) {
  .toast-notifications-wrapper {
    width: 75vw;
  }
}

@media screen and (max-width: 735px) {
  .toast-notifications-wrapper {      
    width: 90vw;
  }
}
</style>