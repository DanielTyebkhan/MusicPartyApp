import {DbResponse, DbSuccessResponse} from "./dbResponse";
import {db, fbAuth} from "./index";
import {doc, setDoc} from "firebase/firestore";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {dbExecutor} from "./dbExecutor";
import {USERS} from "../constants/Firebase";

export const fbSignUpUser = async (email: string, password: string): Promise<DbResponse> => {
  return dbExecutor(async () => {
    const userCredential = await createUserWithEmailAndPassword(fbAuth, email, password);
    return new DbSuccessResponse(userCredential);
  });
}

export const fbLogInUser = async (email: string, password: string): Promise<DbResponse> => {
  return dbExecutor(async() => {
    const auth = getAuth();
    const signInResponse = await signInWithEmailAndPassword(auth, email, password);
    return new DbSuccessResponse(signInResponse);
  });
}

export const dbCreateUser = async (uuid: string, username: string): Promise<DbResponse> => {
  return dbExecutor(async () => {
    const writeResponse = await setDoc(doc(db, USERS, uuid), {
      username
    });
    return new DbSuccessResponse(writeResponse);
  });
}

