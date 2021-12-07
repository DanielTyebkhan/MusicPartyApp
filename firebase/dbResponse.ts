export interface DbError {
  code: string;
  message: string;
}

export interface DbResponse {
  readonly success: boolean;
  readonly error?: DbError;
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
  error: DbError;
  constructor(error: DbError) {
    this.error = error;
  }
}


