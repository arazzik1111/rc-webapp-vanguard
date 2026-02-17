// import { RootReducer, rootStore } from "@redux-stores/root.store";
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

type AppState = ReturnType<any>;

export type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;

export const useAppDispatch = () => useDispatch<TypedDispatch<AppState | void>>();

// export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
