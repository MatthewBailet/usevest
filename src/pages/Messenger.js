import { Widget } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

function MessengerPage() {

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };

    return (
      <div className="PageA">
      <div className="Setter">
        <Widget

        handleNewUserMessage={handleNewUserMessage}
      />
      </div>
      </div>
  
    );
  }
  
  export default MessengerPage;
  