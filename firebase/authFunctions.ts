import {DbResponse, DbSuccessResponse} from "./dbResponse";
import {db, fbAuth} from "./index";
import {doc, setDoc} from "firebase/firestore";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {dbExecutor} from "./dbExecutor";
import {USERS} from "../constants/Firebase";
import {UserInfo} from "../types/authTypes";

type SignUpInfo = { uid: string };
export const fbSignUpUser = async (email: string, password: string): Promise<DbResponse<SignUpInfo>> => (
  dbExecutor<SignUpInfo>(async () => {
    const userCredential = await createUserWithEmailAndPassword(fbAuth, email, password);
    return {
      uid: userCredential.user.uid
    };
  })
);

export const fbLogInUser = async (email: string, password: string): Promise<DbResponse<UserInfo>> => (
  dbExecutor<UserInfo>(async () => {
    const auth = getAuth();
    const signInResponse = await signInWithEmailAndPassword(auth, email, password);
    return {
      uid: signInResponse.user.uid,
      username: "TODO",
    };
  })
);

export const dbCreateUser = async (uid: string, username: string): Promise<DbResponse<UserInfo>> => (
  dbExecutor<UserInfo>(async () => {
    const writeResponse = await setDoc(doc(db, USERS, uid), {username});
    return {
      uid,
      username
    };
  })
);

