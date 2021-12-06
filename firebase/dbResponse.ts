import firebase from "firebase/compat";
import FirebaseError = firebase.FirebaseError;

export interface DbResponse {
  readonly success: boolean;
  readonly error?: FirebaseError;
  readonly response?: any;
}

export class DbSuccessResponse implements DbResponse {
  success: boolean = true;
  response: any;
  constructor(response: any) {
    this.response = response;
  }
}

export class DbErrorResponse implements DbResponse {
  success: boolean = false;
  error: FirebaseError;
  constructor(error: FirebaseError) {
    this.error = error;
  }
}


