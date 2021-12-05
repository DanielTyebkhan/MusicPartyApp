import firebase from "firebase/compat";
import FirebaseError = firebase.FirebaseError;

export interface dbResponse {
  error: FirebaseError | null;
  response: any;
}
