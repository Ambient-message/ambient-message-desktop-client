import type {TypedUseSelectorHook} from "react-redux";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../stores/store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;