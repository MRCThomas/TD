function NotificationButton({ displayCloseBtn = true, handleClick }) {
    return displayCloseBtn ? <button className="delete" onClick={handleClick}></button> : null;
}

export default NotificationButton;