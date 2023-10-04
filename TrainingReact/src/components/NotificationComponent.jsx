import React, {useState} from 'react';
import NotificationButton from './NotificationButton';

function NotificationComponent({ content, type }) {
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    setVisible(false);
  };


  return (
    <>
      {visible && (
        <div className={`notification ${type}`}>
          <NotificationButton handleClick = {handleClick} displayCloseBtn={true} />
          <p>{content}</p>
        </div>
      )}
    </>
  );
}

export default NotificationComponent;
