import {createApi} from "../util";

export const menuList = data => createApi('/menu/list' , data)