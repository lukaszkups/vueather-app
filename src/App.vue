<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { useMainStore } from '@/store';
import { useNotificationsStore } from '@/store/notifications';
import { capitalizeFirstLetter } from '@/helpers/converters';
import { getQueryParameter, sleep } from '@/helpers/utils';
import { notificationTypeEnum } from '@/helpers/dictionaries';
import { getRandomWikiArticle } from '@/services/wiki';
import MainWidget from '@/components/MainWidget.vue';
import ToastNotifications from '@/components/ToastNotifications.vue';

// Setup

const mainStore = useMainStore();
const notifyStore = useNotificationsStore();

// Methods

const checkForNotifications = async () => {
  const item = await getRandomWikiArticle();
  const notification = {
    id: item.pageid,
    title: `NEW ARTICLE: ${capitalizeFirstLetter(item.title)}`,
    url: item.content_urls.desktop.page,
    type: notificationTypeEnum.info,
  }
  notifyStore.notifications.push(notification);
}

// Lifecycle

onBeforeMount(async () => {
  const location = getQueryParameter('city');
  if (location) {
    mainStore.city = location;
  }

  // Simulating dummy notification fetch over time
  await sleep(1000);
  await checkForNotifications();
  await sleep(2000);
  await checkForNotifications();
  await sleep(2000);
  await checkForNotifications();
});
</script>
<template>
  <main-widget />
  <toast-notifications />
</template>