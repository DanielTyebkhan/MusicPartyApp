export interface DbError {
  readonly code: string;
  readonly message: string;
}

export interface DbResponse<T> {
  readonly success: boolean;
  readonly error?: DbError;
  readonly response: T;
}

export class DbSuccessResponse<T> implements DbResponse<T> {
  success: boolean = true;
  response: T;
  constructor(response: T) {
    this.response = response;
  }
}

export class DbErrorResponse<T> implements DbResponse<T> {
  success: boolean = false;
  response: T = {} as T;
  error: DbError;
  constructor(error: DbError) {
    this.error = error;
  }
}


