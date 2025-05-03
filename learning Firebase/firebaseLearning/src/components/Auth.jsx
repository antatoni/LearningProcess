import { useState } from 'react';
import { auth , googleProvider} from '../config/firebase-config'
import {createUserWithEmailAndPassword , signInWithPopup , signOut} from 'firebase/auth';

export const Auth = () => {

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');



    const signIn = async() => {
        try{
            await createUserWithEmailAndPassword(auth , email , password);
        setEmail('');
        setPassword('');
        }catch (error) {
            console.error(error.message);
        }   
    }

    const signInWithGoogle = async() => {
        try{
            await signInWithPopup(auth , googleProvider);
        }catch (error) {
            console.error(error.message);
        }  
    }

    const logOut = async () => {
        try {
            signOut(auth);
        }catch (error) {
            console.log(error.message)
        }
    }
return (
    <div>
        <input placeholder="Email..." onChange={(e) => setEmail(e.target.value)}/>
        <input placeholder="Password..." type='password' onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={signIn}>Sign In</button>

        <button onClick={signInWithGoogle}>Sign In With Google</button>
        <button onClick={logOut}>Log Out</button>
    </div>
)
}