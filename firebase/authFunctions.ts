import {DbErrorResponse, DbResponse, DbSuccessResponse} from "./dbResponse";
import {db, fbAuth} from "./index";
import {doc, setDoc} from "firebase/firestore";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";

export const fbSignUpUser = async (email: string, password: string): Promise<DbResponse> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(fbAuth, email, password);
    return new DbSuccessResponse(userCredential);
  } catch (error) {
    return new DbErrorResponse(error)
  }
}

export const dbCreateUser = async (uuid: string, username: string): Promise<DbResponse> => {
  try {
    const writeResponse = await setDoc(doc(db, "users", uuid), {
      username
    });
    return new DbSuccessResponse(writeResponse);
  } catch (error) {
    return new DbErrorResponse(error);
  }
}

export const dbLogInUser = async (email: string, password: string): Promise<DbResponse> => {
  const auth = getAuth();
  try {
    const signInResponse = await signInWithEmailAndPassword(auth, email, password);
    return new DbSuccessResponse(signInResponse);
  }
  catch (error) {
    return new DbErrorResponse(error);
  }
}
