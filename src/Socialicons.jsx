import React from 'react'
import { signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import { auth } from './firebase-config';
import { BsFacebook } from 'react-icons/bs';
import { AiFillPhone } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Socialicons() {

    const signInWithFacebook = (e) => {
        e.preventDefault();
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth, provider)
            .then((re) => {
                console.log(re);
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
    return (
        <div>
            <div className="icons">
                <div className="icon" onClick={signInWithFacebook}>
                    <BsFacebook />
                </div>
                <Link className="icon" to='/phone'>
                    <AiFillPhone />
                </Link>
            </div>
        </div>
    )
}

export default Socialicons
