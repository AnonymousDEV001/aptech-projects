import React, { useEffect, useState } from "react";
import MessageSectionCss from "./Css/MessagesSection.module.css";
import { useSelector } from "react-redux";

function MessagesSection() {
  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(2);
  const state = useSelector((state) => state.dashboard);

  useEffect(() => {
    if (state.usersMessages !== null) {
      setUsers(state.usersMessages);
    }
  }, [state]);
  return (
    <div className={MessageSectionCss.messageSection}>
      <h3 className="active">Messages</h3>
      <div className={MessageSectionCss.messageCards}>
        {users.slice(0, showUsers).map((user) => (
          <div key={user.id} className={MessageSectionCss.messageCard}>
            <p>Name : {user.Name}</p>
            <p>Email : {user.Email}</p>
            <p>Message : {user.Message}</p>
          </div>
        ))}
      </div>
      <div className={MessageSectionCss.mButton}>
        <button
          style={showUsers > users.length ? { display: "none" } : {}}
          onClick={() => {
            setShowUsers(showUsers + 4);
          }}
        >
          LOAD MORE
        </button>
      </div>
    </div>
  );
}

export default MessagesSection;
