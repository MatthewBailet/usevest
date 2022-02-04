import { Widget } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import Searchbar from '../components/Searchbar';


function MessengerPage() {

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };

    return (
      <div className="PageA">
        <Searchbar/>
        
      <div className="Setter">

      </div>
      </div>
  
    );
  }
  
  export default MessengerPage;
  