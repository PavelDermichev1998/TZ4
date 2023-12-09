import * as React from 'react';
import {DataGrid, GridRowsProp, GridColDef, GRID_DATE_COL_DEF} from '@mui/x-data-grid';

import {ModalTable} from "../modal";
import {useTableTest} from "./use-table-test";
import {daySorting} from "./util";


const columns: GridColDef[] = [
    {
        field: 'image',
        headerName: 'Image',
        renderCell: (params) => <img alt='description' src={params.value} style={{height: '150px'}} />,
        flex: 0.7,
    },
    {
        field: 'description',
        headerName: 'Description',
        flex: 1,
        cellClassName: 'description-col-theme',
    },
    {
        field: 'date',
        headerName: 'Date',
        flex: 1,
        ...GRID_DATE_COL_DEF,
        sortComparator: daySorting,
        cellClassName: 'date-col-theme',
    },
    {
        field: 'number',
        headerName: 'Number',
        flex: 1,
        cellClassName: 'number-col-theme',
    },
];

const rows: GridRowsProp = [
    {
        id: 1,
        image:'https://cdn.pixabay.com/photo/2019/08/19/07/45/corgi-4415649_1280.jpg',
        description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaini',
        date: new Date('05-05-2022'),
        number: 1423432,
    },
    {
        id: 2,
        image: 'https://cdn.pixabay.com/photo/2023/12/05/16/57/dog-8432098_1280.jpg',
        description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaini',
        date: new Date('01-07-2002'),
        number: 2342512345
    },
    {
        id: 3,
        image: 'https://cdn.pixabay.com/photo/2023/12/05/16/57/dog-8432098_1280.jpg',
        description: 'text',
        date: new Date('04-11-2023'),
        number: 31234
    },
    {
        id: 4,
        image:'https://cdn.pixabay.com/photo/2019/08/19/07/45/corgi-4415649_1280.jpg',
        description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipis simply dummy text of the printing and typesetting industry. Lorem Ipis simply dummy text of the printing and typesetting industry. Lorem Ipis simply dummy text of the printing and typesetting industry. Lorem Ipis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaini!',
        date: new Date('04-11-2012'),
        number: 412455342
    },
];

export const TableTest = () => {
   const {
       isOpenModel,
       selectRow,
       selectImage,
       onSelectColumClick,
       onSelectImageClick,
       onCloseModel,
   } = useTableTest();

    return (
        <div style={{ height: '100%', width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                hideFooter
                getRowHeight={() => 'auto'}
                getCellClassName={() => 'cell'}
                onRowClick={onSelectColumClick}
                onCellClick={onSelectImageClick}
            />
            <ModalTable
                isOpenModel={isOpenModel}
                onCloseModel={onCloseModel}
                selectImage={selectImage}
                selectRow={selectRow}
            />
        </div>
    );
}
