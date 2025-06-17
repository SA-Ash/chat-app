import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {collection, getFirestore, onSnapshot} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAnVlmzT1te2ZmR4g-PxLH9qQNBzLHU1uk",
  authDomain: "chat-app-f562a.firebaseapp.com",
  projectId: "chat-app-f562a",
  storageBucket: "chat-app-f562a.firebasestorage.app",
  messagingSenderId: "816222198316",
  appId: "1:816222198316:web:3f45e338ac214595e58f89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export function listenForChats(setChats){
  const chatsRef = collection(db, "chats");
  const unsubscribe = onSnapshot(chatsRef, (snapshot)=> {
    console.log(snapshot.maos)
    const chatsList = snapshot.docs.map((doc)=>({
      id: doc.id,
      ...doc.data(),
    }));
    const filteredChats = chatsList.filter((chat)=>chat?.users.some((user)=> user === auth.currentUser.email))
    setChats(filteredChats)
  })
  return unsubscribe;
}
export {auth, db};