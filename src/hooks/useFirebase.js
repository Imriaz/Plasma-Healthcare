import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuthentication from '../components/Firebase/firebase.init'

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [displayName, setDisplayName] = useState('');
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    //new add1


    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: user.displayName })
            .then(result => setDisplayName(result));
        console.log(displayName);
    }
    //new add1


    // new add2
    const signInUsingEmailPassword = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                console.log(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    // new add2

    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
            // .then(result => {
            //     setUser(result.user);
            // })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // Obserbe user state change is the browser tab
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        signInUsingGoogle,
        isLoading,
        logOut,
        signInUsingEmailPassword,
        registerNewUser,
        setUserName
    }
};

export default useFirebase;