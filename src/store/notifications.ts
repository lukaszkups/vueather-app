import { defineStore } from "pinia";
import { ref } from "vue";
import type { IToastNotification } from '@/helpers/interfaces';

export const useNotificationsStore = defineStore('notifications', () => {
  const notifications = ref<IToastNotification[]>([]);

  // Methods
  
  const removeNotification = (notificationId: string | number) => {
    const index = notifications.value.findIndex((item: IToastNotification) => item.id === notificationId);
    if (index > -1) {
      notifications.value.splice(index, 1);
    }
  }

  return { notifications, removeNotification };
});
