import {DbErrorResponse, DbResponse, DbSuccessResponse} from "./dbResponse";

export const dbExecutor = async (toExecute: () => Promise<DbSuccessResponse>): Promise<DbResponse> => {
  try {
    return await toExecute();
  } catch (error) {
    return new DbErrorResponse(error);
  }
}

