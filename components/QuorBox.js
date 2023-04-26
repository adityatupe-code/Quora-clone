import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./QuoraBox.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser , faMessage , faPenSquare, faPen } from '@fortawesome/free-solid-svg-icons'

export default function QuorBox() {
  const user = useSelector(selectUser);

  return (<>

      <div className='search-box mt-2'>
            <div className='search-and-userIcon-div' >
                <div className='user-icon' ><FontAwesomeIcon icon={faUser} style={{ margin: '0.25rem 0.2rem' }} /></div>
                <div class="form-outline w-100">
                    <input type="text" id="formControlSm" class="form-control form-control-sm rounded-pill" style={{backgroundColor: '#f1f2f2'}} placeholder='What do You want to Ask or Share ?' />
                </div>

            </div>
            <div className='ask-answer-post-div'  >
                <div className='send-post'><FontAwesomeIcon icon={faMessage} size='sm' /><b> Ask </b></div>
                <div className='send-post'><FontAwesomeIcon icon={faPenSquare} size='sm' /> <b>Answer</b></div>
                <div className='send-post' style={{border: 'none'}}><FontAwesomeIcon icon={faPen} size='sm' /><b> Post</b></div>
            </div>
        </div>
<br></br>
    <div className="quoraBox">
      <div className="quoraBox__info">
        <Avatar
          src={
            user.photo
              ? user.photo
              : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
          }
          className="quoraBox__infoAvatar"
        />
        <h5>{user.displayName ? user.displayName : user.email}</h5>
      </div>
      <div className="quoraBox__quora">
        <p>What is your question or link?</p>
      </div>
    </div>

    </>
  );
}
