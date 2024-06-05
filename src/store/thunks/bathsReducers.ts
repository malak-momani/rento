import { createSlice } from "@reduxjs/toolkit";
import { IResponseData } from "../../Interfaces/IResponseData"

type IBathsState = {
    baths: IResponseData[];
    loading: boolean;
    error: string | null;
}

const initialState: IBathsState = {
    baths: [],
    loading: false,
    error: null,
}

const bathsSlice = createSlice({
    name: 'baths',
    initialState,
    reducers: {},
})