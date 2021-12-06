import {DbErrorResponse, DbResponse, DbSuccessResponse} from "./dbResponse";
import {db, fbAuth} from "./index";
import {doc, setDoc} from "firebase/firestore";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";

const dbExecutor = async (toExecute: () => Promise<DbSuccessResponse>): Promise<DbResponse> => {
  try {
    return await toExecute();
  } catch (error) {
    return new DbErrorResponse(error);
  }
}

export const fbSignUpUser = async (email: string, password: string): Promise<DbResponse> => {
  return dbExecutor(async () => {
    const userCredential = await createUserWithEmailAndPassword(fbAuth, email, password);
    return new DbSuccessResponse(userCredential);
  });
}

export const dbCreateUser = async (uuid: string, username: string): Promise<DbResponse> => {
  return dbExecutor(async () => {
    const writeResponse = await setDoc(doc(db, "users", uuid), {
      username
    });
    return new DbSuccessResponse(writeResponse);
  });
}

export const dbLogInUser = async (email: string, password: string): Promise<DbResponse> => {
  return dbExecutor(async() => {
    const auth = getAuth();
    const signInResponse = await signInWithEmailAndPassword(auth, email, password);
    return new DbSuccessResponse(signInResponse);
  });
}
