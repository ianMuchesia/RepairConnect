import { HiSpeakerphone } from "react-icons/hi";

import "./notification.css"
const Notification = () => {
  return (
    <div>
      <div className="notification-">
        <div className="notification-">
        <div className="notification-card">
  <div className="notification-header">
    <span className="notification-icon">
    <HiSpeakerphone />

    </span>
    <p className="notification-alert">New message!</p>
  </div>

  <p className="notification-message">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde
    vel adipisci blanditiis voluptates eum. Nam, cum minima?
  </p>

  <div className="notification-actions">
    <a className="notification-read" href="">
      Take a Look
    </a>

    <a className="notification-mark-as-read" href="">
      Mark as Read
    </a>
  </div>
</div>

        </div>
      </div>
    </div>
  )
}

export default Notification