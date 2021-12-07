export interface DbError {
  code: string;
  message: string;
}

export interface DbResponse<T> {
  readonly success: boolean;
  readonly error?: DbError;
  readonly response?: T;
}

export class DbSuccessResponse<T> implements DbResponse<T> {
  success: boolean = true;
  response: T;
  constructor(response: T) {
    this.response = response;
  }
}

export class DbErrorResponse implements DbResponse<null> {
  success: boolean = false;
  error: DbError;
  constructor(error: DbError) {
    this.error = error;
  }
}


