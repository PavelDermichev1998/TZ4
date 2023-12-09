import {GridComparatorFn} from "@mui/x-data-grid";

export const daySorting: GridComparatorFn<Date> = (v1, v2) => {
    return v1.getTime() - v2.getTime();
}