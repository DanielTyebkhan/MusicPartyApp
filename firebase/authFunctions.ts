import {DbResponse} from "./dbResponse";
import {db, fbAuth} from "./index";
import {doc, setDoc} from "firebase/firestore";
import {signOut, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {dbExecutor} from "./dbExecutor";
import {USERS} from "../constants/Firebase";
import {UserData} from "../types/authTypes";

type SignUpInfo = { uid: string };
export const fbSignUpUser = (email: string, password: string): Promise<DbResponse<SignUpInfo>> => (
  dbExecutor<SignUpInfo>(async () => {
    const userCredential = await createUserWithEmailAndPassword(fbAuth, email, password);
    return {
      uid: userCredential.user.uid
    };
  })
);

export const fbLogInUser = (email: string, password: string): Promise<DbResponse<UserData>> => (
  dbExecutor<UserData>(async () => {
    const auth = getAuth();
    const signInResponse = await signInWithEmailAndPassword(auth, email, password);
    return {
      uid: signInResponse.user.uid,
      username: "TODO",
    };
  })
);

export const fbLogOutUser = (): Promise<DbResponse<void>> => (
  dbExecutor<void>(async() => {
    const auth = getAuth();
    await signOut(auth);
  })
)

export const dbWriteUser = (uid: string, username: string): Promise<DbResponse<UserData>> => (
  dbExecutor<UserData>(async () => {
    await setDoc(doc(db, USERS, uid), {username});
    return {
      uid,
      username
    };
  })
);

