import {DbError, DbResponse} from "./dbResponse";
import {db, fbAuth} from "./index";
import {doc, setDoc, getDoc} from "firebase/firestore";
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
    const uid = signInResponse.user.uid;
    const userData = await dbGetUserProfile(uid);
    return {
      uid,
      username: userData.response.username,
    };
  })
);

export const dbGetUserProfile = (uid: string): Promise<DbResponse<UserData>> => (
  dbExecutor<UserData>(async () => {
    const userData = await getDoc(doc(db, USERS, uid));
    if (userData.exists()) {
      return {
        uid,
        username: userData.data().username,
      }
    }
    const err: DbError = {code: '-1', message: "User Data not found"};
    throw err;
  })
)

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

