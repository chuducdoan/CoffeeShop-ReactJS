import { FacebookAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "~/firebase";


const AuthContext = createContext();

function AuthContextProvider({children}) {

    const [user, setUser] = useState(null);

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }

    const facebookSignIn = () => {
        const providerFacebook = new FacebookAuthProvider();
        signInWithPopup(auth, providerFacebook);
    }

    const logOut = () => {
        signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log("currentUser: ", currentUser)
            console.log("user: ", user)
        });
        return () => {
            unsubscribe();
        }
    }, []);

    return ( 
        <AuthContext.Provider value={{googleSignIn, facebookSignIn, logOut, user}}>
            {children}
        </AuthContext.Provider>
     );
}

export default AuthContextProvider;

export const UserAuth = () => {
    return useContext(AuthContext);
}