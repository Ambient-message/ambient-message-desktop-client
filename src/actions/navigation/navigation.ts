import { createAction } from "@reduxjs/toolkit";
import { Pages } from "../../objects/states";

export const setActivePage = createAction<Pages>("Set_Active_Page");
