import "react-chat-widget/lib/styles.css";
import Searchbar from "../components/Searchbar";

function MessengerPage() {
  return (
    <div className="PageAB">

      <div className="Setter2">
        <div className="container">
          <div className="row">
            <section className="discussions">
              <div className="discussion search">
                <div className="searchbar">
                  <i className="fa fa-search" aria-hidden="true" />
                  <input type="text" placeholder="Search..." />
                </div>
              </div>
              <div className="discussion message-active">
                <div
                  className="photo"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)",
                  }}
                >
                  <div className="online" />
                </div>
                <div className="desc-contact">
                  <p className="name">Emily Fraise</p>
                  <p className="message">I'll see you at 8!</p>
                </div>
                <div className="timer">12 sec</div>
              </div>
              <div className="discussion">
                <div
                  className="photo"
                  style={{
                    backgroundImage:
                      "url(http://e0.365dm.com/16/08/16-9/20/theirry-henry-sky-sports-pundit_3766131.jpg?20161212144602)",
                  }}
                >
                  <div className="online" />
                </div>
                <div className="desc-contact">
                  <p className="name">Harrison Fisher</p>
                  <p className="message">
                    Let's meet for a coffee or something today ?
                  </p>
                </div>
                <div className="timer">3 min</div>
              </div>
              <div className="discussion">
                <div
                  className="photo"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)",
                  }}
                ></div>
                <div className="desc-contact">
                  <p className="name">Thomas Rocking</p>
                  <p className="message">I can get it to you by Thursday perhaps</p>
                </div>
                <div className="timer">42 min</div>
              </div>
              <div className="discussion">
                <div
                  className="photo"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1541855492-581f618f69a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)",
                  }}
                ></div>
               
                <div className="desc-contact">
                  <p className="name">Jean layton</p>
                  <p className="message">I've sent you the annual report</p>
                </div>
                
                <div className="timer">42 min</div>
              </div>
              <div className="discussion">
                <div
                  className="photo"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1486714941986-f2113c751c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)",
                  }}
                >
                  <div className="online" />
                </div>
                <div className="desc-contact">
                  <p className="name">Rebecca Sutherland</p>
                  <p className="message">Sorry, I dont think it would right to the investor</p>
                </div>
                <div className="timer">2 hour</div>
              </div>
              <div className="discussion">
                <div
                  className="photo"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1579038773867-044c48829161?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)",
                  }}
                >
                  <div className="online" />
                </div>
                <div className="desc-contact">
                  <p className="name">Dominique Decastris</p>
                  <p className="message">Im glad we ended up getting in contact, would you consider forming a group?</p>
                </div>
                <div className="timer">2 hour</div>
              </div>
              <div className="discussion">
                <div
                  className="photo"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1618085222100-93f0eecad0aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)",
                  }}
                >
                  <div className="online" />
                </div>
                <div className="desc-contact">
                  <p className="name">Jackie Benedict</p>
                  <p className="message">I can talk later tonight if you would be interested in setting up a zoom</p>
                </div>
                <div className="timer">2 hour</div>
              </div>
              <div className="discussion">
                <div
                  className="photo"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80)",
                  }}
                ></div>
                   <div className="desc-contact">
                  <p className="name">Omer Ahmed</p>
                  <p className="message">Id have to ask my partner</p>
                </div>
                <div className="timer">2 hour</div>
              </div>
              <div className="discussion">
                <div
                  className="photo"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1553514029-1318c9127859?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80)",
                  }}
                ></div>
                <div className="desc-contact">
                  <p className="name">Anna Fovenyes</p>
                  <p className="message">I'd be interested in that</p>
                </div>
                <div className="timer">1 day</div>
              </div>
              <div className="discussion">
                <div
                  className="photo"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1541747157478-3222166cf342?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80)",
                  }}
                ></div>
                <div className="desc-contact">
                  <p className="name">Roger Travasca</p>
                  <p className="message">Haha id need a bit more for that amount of equity</p>
                </div>
                <div className="timer">4 days</div>
              </div>
              <div className="discussion">
                <div
                  className="photo"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1601655781320-205e34c94eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)",
                  }}
                >
                  <div className="online" />
                </div>
                <div className="desc-contact">
                  <p className="name">Paul Stark</p>
                  <p className="message">If you're open to groups I can maybe</p>
                </div>
                <div className="timer">1 week</div>
              </div>
            </section>
            <section className="chat">
              <div className="header-chat">
                <i className="icon fa fa-user-o" aria-hidden="true" />
                <p className="name">Emily Fraise - CEO at Entrepath</p>
                <i
                  className="icon clickable fa fa-ellipsis-h right"
                  aria-hidden="true"
                />
              </div>
              <div className="messages-chat">
              <div className="message text-only">
                  <div className="response">
                    <p className="text"> Hello, I'm interested in setting up a meeting with you.</p>
                  </div>
                </div>
                <p className="response-time time"> 15h04</p>
                <div className="message">
                  <div
                    className="photo"
                    style={{
                      backgroundImage:
                        "url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)",
                    }}
                  >
                    
                    <div className="online" />
                  </div>
                  
                  <p className="text"> Wonderful!</p>
                </div>
                <div className="message text-only">
                  <p className="text">
                    {" "}
                    We can set up a zoom meeting tonight if that would work for you!
                  </p>
                </div>
                <p className="time"> 14h58</p>
                
                <div className="message text-only">
                  <div className="response">
                    <p className="text"> Yes that's perfect.</p>
                  </div>
                </div>
                <div className="message text-only">
                  <div className="response">
                    <p className="text"> Would 8 work?</p>
                  </div>
                </div>
                <p className="response-time time"> 15h04</p>
                <div className="message">
                  <div
                    className="photo"
                    style={{
                      backgroundImage:
                        "url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)",
                    }}
                  >
                    <div className="online" />
                  </div>
                  <p className="text"> I'll see you at 8!</p>
                </div>
                <p className="time"> 15h09</p>
              </div>
              <div className="footer-chat">
                <i
                  className="icon fa fa-smile-o clickable ttsot"
                  style={{ fontSize: "25pt" }}
  
                />
                <input
                  type="text"
                  className="write-message"
                  placeholder="Type your message here"
                />
                <i
                  className="icon send fa fa-paper-plane-o clickable"
                  aria-hidden="true"
                ><b>Send</b></i>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessengerPage;
