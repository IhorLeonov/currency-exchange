import { RootState } from "./store";

export const selectData = (state: RootState) => state.main.data;
export const selectError = (state: RootState) => state.main.error;
export const selectIsLoading = (state: RootState) => state.main.isLoading;
export const selectIsLoadingHeader = (state: RootState) => state.main.isLoadingHeader;
