import { createUserWithEmailAndPassword, FacebookAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { createContext, useContext } from "react";
import { auth, createUserDocument } from "~/firebase";


const AuthContext = createContext();

function AuthContextProvider({children}) {

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }

    const facebookSignIn = () => {
        const providerFacebook = new FacebookAuthProvider();
        signInWithPopup(auth, providerFacebook);
    }

    const signUp = async (email, password, displayName) => {
        const {user} =  await createUserWithEmailAndPassword(auth, email, password);
        return createUserDocument(user, {displayName});
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    return ( 
        <AuthContext.Provider value={{googleSignIn, facebookSignIn, signUp, signIn}}>
            {children}
        </AuthContext.Provider>
     );
}

export default AuthContextProvider;

export const UserAuth = () => {
    return useContext(AuthContext);
}