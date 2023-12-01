import { useContext, useRef, useState } from "react";
import classes from "./contact-form.module.css";
import NotificationContext from "../../../store/notification-context";
import Notification from "../../ui/ui/notification";

async function sendContactData(contactDetails) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
}

function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState();
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;

  async function sendMessageHandler(event) {
    event.preventDefault();
    notificationCtx.showNotification({
      title: "Sending Message",
      message: "Your message is being sent.",
      status: "pending",
    });

    await sendContactData({
      email: enteredEmail,
      name: enteredName,
      message: enteredMessage,
    });
    notificationCtx.showNotification({
      title: "Sent Message",
      message: "Your message has been sent.",
      status: "success",
    });
  }
  return (
    <section className={classes.contact}>
      <h1> How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your email</label>
            <input
              type="email"
              id="email"
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
              required
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            type="textarea"
            id="message"
            value={enteredMessage}
            rows="5"
            onChange={(event) => setEnteredMessage(event.target.value)}
            required
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {activeNotification && (
        <Notification
          status={activeNotification.status}
          title={activeNotification.title}
          message={activeNotification.message}
        />
      )}
    </section>
  );
}

export default ContactForm;
