import "./chatbox.css"
const ChatBox = () => {
  return (
    <div>



<div>
    {/* <!-- Main container --> */}
    <div className="chat--container">
      {/* <!-- msg-header section starts --> */}
      <div className="chat--msg-header">
        <div className="chat--container1">
          <img src="user1.png" className="chat--msgimg"  />
          <div className="chat--active">
            <p>User name</p>
          </div>
        </div>
      </div>
      {/* <!-- msg-header section ends --> */}

      {/* <!-- Chat inbox  --> */}
      <div className="chat--chat-page">
        <div className="chat--msg-inbox">
          <div className="chat--chats">
            {/* <!-- Message container --> */}
            <div className="chat--msg-page">
              {/* <!-- Incoming messages --> */}

              <div className="chat--received-chats">
                <div className="chat--received-chats-img">
                  <img src="user2.png" className="chat--img"/>
                </div>
                <div className="chat--received-msg">
                  <div className="chat--received-msg-inbox">
                    <p>
                      Hi !! This is message from Riya . Lorem ipsum, dolor sit
                      amet consectetur adipisicing elit. Non quas nemo eum,
                      earum sunt, nobis similique quisquam eveniet pariatur
                      commodi modi voluptatibus iusto omnis harum illum iste
                      distinctio expedita illo!
                    </p>
                    <span className="chat--time">18:06 PM | July 24</span>
                  </div>
                </div>
              </div>
              {/* <!-- Outgoing messages --> */}
              <div className="chat--outgoing-chats">
                <div className="chat--outgoing-chats-img">
                  <img src="user1.png" className="chat--img"  />
                </div>
                <div className="chat--outgoing-msg">
                  <div className="chat--outgoing-chats-msg">
                    <p className="chat--multi-msg">
                      Hi riya , Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Illo nobis deleniti earum magni
                      recusandae assumenda.
                    </p>
                    <p className="chat--multi-msg">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>

                    <span className="chat--time">18:30 PM | July 24</span>
                  </div>
                </div>
              </div>
              <div className="chat--received-chats">
                <div className="chat--received-chats-img">
                  <img src="user2.png" className="chat--img" />
                </div>
                <div className="chat--received-msg">
                  <div className="chat--received-msg-inbox">
                    <p className="chat--single-msg">
                      Hi !! This is message from John Lewis. Lorem ipsum, dolor
                      sit amet consectetur adipisicing elit. iste distinctio
                      expedita illo!
                    </p>
                    <span className="chat--time">18:31 PM | July 24</span>
                  </div>
                </div>
              </div>
              <div className="chat--outgoing-chats">
                <div className="chat--outgoing-chats-img">
                  <img src="user1.png"  className="chat--img"/>
                </div>
                <div className="chat--outgoing-msg">
                  <div className="chat--outgoing-chats-msg">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Velit, sequi.
                    </p>

                    <span className="chat--time">18:34 PM | July 24</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- msg-bottom section --> */}

          <div className="chat--msg-bottom">
            <div className="chat--input-group">
              <input
                type="text"
                className="chat--form-control"
                placeholder="Write message..."
              />

              <span className="chat--input-group-text send-icon">
                <i className="chat--bi bi-send"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default ChatBox