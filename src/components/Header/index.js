import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faInfo } from "@fortawesome/free-solid-svg-icons";

import { GITHUB_API } from "../../config/constants";
import { UserContext } from "../../Context/UserContext";
import UserInfo from "../UserInfo";
import "./style.css";

function Header() {
  const [events, setEvents] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch(`${GITHUB_API}/inna-i/received_events`)
      .then((res) => res.json())
      .then((res) => setEvents(res.length))
      .catch((e) => console.error(e));
  }, [events]);

  return (
    <UserContext.Consumer>
      {({ user }) =>
        user && (
          <header>
            <div className="info-block">
              <button onClick={() => window.open('https://github.com/inna-i')}>
                <FontAwesomeIcon icon={faInfo} />
              </button> 
              
              <button onClick={() => setShow(!show)}>
                <FontAwesomeIcon icon={faBell} />
              </button>

              {show && (
                <ul>
                  <li>Recieved events ({events})</li>
                  <li>Followers ({user.followers})</li>
                  <li>Repos ({user.public_repos})</li>
                </ul>
              )}
            </div>

            <UserInfo login={user.login} avatar={user.avatar_url} />
          </header>
        )
      }
    </UserContext.Consumer>
  );
}

export default Header;
