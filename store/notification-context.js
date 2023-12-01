import { createContext, useEffect, useState } from "react";

const NotificationContext = createContext({
  notification: null,
  showNotification: () => {},
  hideNotification: () => {},
});

export function NotificationProvider(props) {
  const [activeNotification, setActiveNotification] = useState(null);
  useEffect(() => {
    if (activeNotification) {
      const timer = setTimeout(() => {
        hideNotificationHandler();
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);

  function showNotificationHandler(notificationData) {
    console.log(notificationData);
    setActiveNotification(notificationData);
  }
  function hideNotificationHandler(notificationData) {
    setActiveNotification(null);
  }
  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };
  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
