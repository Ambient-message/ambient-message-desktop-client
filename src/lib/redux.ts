import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { State } from "../objects/states";

export type AsyncDispatch = ThunkDispatch<State, any, AnyAction>