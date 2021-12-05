import {dbResponse} from "./dbResponse";
import {db, fbAuth} from "./index";
import {doc, setDoc} from "firebase/firestore";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";

export const fbSignUpUser = async (email: string, password: string): Promise<dbResponse> => {
  let resp: dbResponse;
  try {
    const userCredential = await createUserWithEmailAndPassword(fbAuth, email, password);
    resp = {
      error: null,
      response: userCredential,
    }
  } catch (error) {
    resp = {
      error,
      response: null,
    }
  }
  return resp;
}

export const dbCreateUser = async (uuid: string, username: string): Promise<dbResponse> => {
  let resp: dbResponse;
  try {
    const writeResponse = await setDoc(doc(db, "users", uuid), {
      username
    });
    resp = { error: null, response: writeResponse };
  } catch (error) {
    resp = {
      error,
      response: null
    }
  }
  return resp;
}

export const dbLogInUser = async (email: string, password: string): Promise<dbResponse> => {
  console.log('logging in', email, password)
  return {} as dbResponse;
}
