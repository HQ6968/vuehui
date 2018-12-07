import {createApi} from "../util";
export const userListApi = data => createApi('/user/list', data);