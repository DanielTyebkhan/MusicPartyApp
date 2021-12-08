import {DbErrorResponse, DbResponse, DbSuccessResponse} from "./dbResponse";

export const dbExecutor = async <T>(toExecute: () => Promise<T>): Promise<DbResponse<T>> => {
  try {
    return new DbSuccessResponse<T>(await toExecute());
  } catch (error) {
    console.log(error);
    return new DbErrorResponse<T>(error);
  }
}

