import {useState} from "react";
import {GridCellParams, GridRowParams} from "@mui/x-data-grid";
import {RowParamsType} from "../../type";

export const useTableTest = () => {
    const [isOpenModel, setIsOpenModel] = useState<boolean>(false);
    const [selectRow, setSelectRow] = useState<RowParamsType | null>(null);
    const [selectImage, setSelectImage] = useState<string | null>(null);

    const onSelectColumClick = (params: GridRowParams) => {
        setSelectRow({
            date: params.row.date,
            number: params.row.number,
            description: params.row.description,
            image: params.row.image,
        })
        setIsOpenModel(true)
    }

    const onSelectImageClick = (params: GridCellParams) => {
        if (params.field === 'image') {
            setSelectImage(params.row.image)
            setIsOpenModel(true)
        }
    }

    const onCloseModel = () => {
        setIsOpenModel(false);
        setSelectRow(null);
        setSelectImage(null);
    }

    return {
        isOpenModel,
        selectRow,
        selectImage,
        onSelectColumClick,
        onSelectImageClick,
        onCloseModel,
    }
}