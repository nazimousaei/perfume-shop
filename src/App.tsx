import routes from "./routes";
import { useRoutes } from "react-router-dom";
import { useEffect, useState } from "react";

export default function App() {
  const [locate, setLocate] = useState(null);

  useEffect(() => {
    const getNotifPermission = () => {
      Notification.requestPermission().then((result) => {
        if (result === "granted") {
          const notificationShown = localStorage.getItem("notificationShown");

          if (!notificationShown) {
            if ("serviceWorker" in navigator) {
              navigator.serviceWorker.ready.then((sw) => {
                sw.showNotification("test", {
                  body: "test notif",
                  icon: "/img/icons/icon-512x512.png",
                  badge: "/img/icons/icon-512x512.png",
                  actions: [
                    { action: "confirm", title: "accept" },
                    { action: "deny", title: "cancel" },
                  ],
                });
              });
            }
          }
          localStorage.setItem("notificationShown", "true");
        } else if (result === "denied") {
          console.log("cancel");
        }
      });
    };

    window.addEventListener("load", getNotifPermission);

    return () => {
      window.removeEventListener("load", getNotifPermission);
    };
  }, []);

  useEffect(() => {
    fetch(
      "https://api.ipgeolocation.io/ipgeo?apiKey=bb4beb4184bd466faa56de72a9144ac0"
    )
      .then((response) => response.json())
      .then((data) => {
        setLocate(data);
      });
  }, []);

  useEffect(() => {
    if (locate) {
      fetch("https://db-perfume.liara.run/identify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(locate),
      })
        .then((res) => console.log(res.json()))
        .then((result) => console.log(result));
    }
  }, [locate]);

  const router = useRoutes(routes);

  return <>{router}</>;
}
