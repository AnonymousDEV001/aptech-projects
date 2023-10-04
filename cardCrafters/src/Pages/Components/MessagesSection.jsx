import React from 'react'
import MessageSectionCss from './Css/MessagesSection.module.css'
function MessagesSection(){
    return(
        <div className={MessageSectionCss.messageSection}>
            <h3 className='active'>Messages</h3>
            <div className={MessageSectionCss.messageCards}>
                <div className={MessageSectionCss.messageCard}>
                    <p>Name : Sarosh</p>
                    <p>Email : forplayingcoc123@gmail.com</p>
                    <p>Message : Elements must have an alt prop, either with meaningful text, or an empty string for decorative images</p>
                </div>
                <div className={MessageSectionCss.messageCard}>
                    <p>Name : Sarosh</p>
                    <p>Email : forplayingcoc123@gmail.com</p>
                    <p>Message : Elements must have an alt prop, either with meaningful text, or an empty string for decorative images</p>
                </div>
            </div>
            <div className={MessageSectionCss.mButton}>
                <button>LOAD MORE</button>
            </div>
        </div>
    );
}

export default MessagesSection