import { createSlice } from "@reduxjs/toolkit";
import { IResponseData } from "../../Interfaces/IResponseData";

type IFilterState = {
    stateData: {
        id: number | null;
        city: string;
        area: string;
        metro: string;
        type?: string;
        room: string;
        priceMin: string;
        priceMax: string;
        capacity: string;
    };

    sortValue: {
        value: string;
        label: string;
    };

    filteredData: IResponseData[];
    duplicateData: IResponseData[];
    active: string
};

const initialState: IFilterState = {
    stateData: {
        id: null,
        city: "",
        room: "",
        area: "",
        metro: "",
        type: "",
        priceMin: "",
        priceMax: "",
        capacity: "",
      },
     sortValue: {
        value: "Default",
        label: "Default",
     },
     filteredData: [],
     duplicateData: [],
     active: "tiles",
}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setSelectedData(state, action) {
            state.stateData = action.payload;
        },
        setFilteredData(state, action) {
            state.filteredData = action.payload;
        },
        setDuplicateData(state, action){
            state.duplicateData = action.payload;
        },
        toggleProductsCards(state, action){
            state.active = action.payload;
        },
        selectedValueForSort(state, action) {
            state.sortValue = action.payload;
        },
        resetFilter(state) {
            state.sortValue= {value:"Default", label: "Default"};
            state.stateData.city = "";
            state.stateData.room = "";
            state.stateData.metro = "";
            state.stateData.area = "";
            state.stateData.type = "";
            state.stateData.priceMax = "";
            state.stateData.priceMin = "";
            state.stateData.capacity = "";
        },
    },
});

export const {
    setSelectedData,
    setFilteredData,
    resetFilter,
    setDuplicateData,
    toggleProductsCards,
    selectedValueForSort,
} = filterSlice.actions;

export default filterSlice.reducer;