import React from 'react';

function NotificationComponent({ content, type }) {
  const [visible, setVisible] = React.useState(true);

  const displayCloseBtn = () => {
    setVisible(false);
  };

  
  return (
    <>
      {visible && (
        <div className={`notification ${type}`}>
          <button className="delete" onClick={displayCloseBtn}></button>
          <p>{content}</p>
        </div>
      )}
    </>
  );
}

export default NotificationComponent;
