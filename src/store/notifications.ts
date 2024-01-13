import { defineStore } from "pinia";
import { ref } from "vue";
import type { IRandomWikiArticle } from '@/helpers/interfaces';

export const useNotificationsStore = defineStore('notifications', () => {
  const notifications = ref<IRandomWikiArticle[]>([]);

  // Methods
  
  const removeNotification = (notificationId: string) => {
    const index = notifications.value.findIndex((item: IRandomWikiArticle) => item.wikibase_item === notificationId);
    if (index > -1) {
      notifications.value.splice(index, 1);
    }
  }

  return { notifications, removeNotification };
});
