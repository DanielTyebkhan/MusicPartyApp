import {DbErrorResponse, DbResponse, DbSuccessResponse} from "./dbResponse";

export const dbExecutor = async <T>(toExecute: () => Promise<T>): Promise<DbResponse<T>> => {
  try {
    return new DbSuccessResponse<T>(await toExecute());
  } catch (error) {
    return new DbErrorResponse(error);
  }
}

