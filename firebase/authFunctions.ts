import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {dbResponse} from "./dbResponse";

const auth = getAuth();

export const dbCreateUser = async (email: string, password: string): Promise<dbResponse> => {
  let resp: dbResponse;
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
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

