import * as React from 'react';
import {
    DataGrid,
    GridRowsProp,
    GridColDef,
    GridComparatorFn,
    GRID_DATE_COL_DEF,
    GridRowParams,
    GridCellParams,
} from '@mui/x-data-grid';
import {Box, Modal} from "@mui/material";
import {useState} from "react";
import {RowParamsType} from "../../type";

interface Props {
    isOpenModel:boolean;
    onCloseModel:()=>void;
    selectImage:string | null;
    selectRow:RowParamsType | null;
}

export const ModalTable = ({isOpenModel, onCloseModel, selectImage, selectRow}:Props) => (
    <Modal
        open={isOpenModel}
        onClose={onCloseModel}
    >
        <Box className='modal-box'>{selectImage ? <>
            <img alt='description' src={selectRow?.image} style={{width: '100%', height: '100%'}}/>
        </> : <>
            <img alt='description' src={selectRow?.image} style={{maxWidth: '150px'}}/>
            <p>{selectRow?.date.toDateString()}</p>
            <p>{selectRow?.description}</p>
            <p>{selectRow?.number}</p>
        </>}
        </Box>
    </Modal>
);

