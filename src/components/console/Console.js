import React from 'react';
import data from '../../assets/texte/contact';
import style from './console.css';
import classNames from 'classnames';
import cross from '../../assets/images/cross.png';
import line from '../../assets/images/line.png';
import square from '../../assets/images/square.png';

const Console = () => {

    const contacts = data.contacts.map((contact) => {
        return (
            <div>
                <a href={contact.personalLink}>{contact.path}{contact.message}</a>
            </div>
        );
    }
);

    return (
        <div className="w-200 h-128 bg-[#0c0c0c] border border-[#393939] drop-shadow-2xl" id="invite-de-contact">
            <div className="h-7 bg-white flex justify-between">
                <div className="flex">
                    <h1 className="text-black">C:\_ contact prompt</h1>
                </div>
                <ul className="flex">
                    <li className="px-4 py-0.5 hover:bg-gray-200 m-auto"><img src={line} className="w-4 h-4"/></li>
                    <li className="px-4 py-0.5 hover:bg-gray-200 m-auto"><img src={square} className="w-4 h-4"/></li>
                    <li className="px-4 py-0.5 hover:bg-gray-200 m-auto"><img src={cross} className="w-4 h-4"/></li>
                </ul>
                
            </div>
            <div className={classNames("text-white font-['consolas']")}>
                <p>Yanis Portfolio [version 2.0.19045.2364]</p>
                <p>(c) Yanis Corporation. All rights reserved.</p>
                <div className="mt-4">
                    {contacts}
                </div>                
            </div>
        </div>

    );
};

export default Console;