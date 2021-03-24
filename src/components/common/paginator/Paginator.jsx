import React, {useState} from 'react';
import s from "./Paginator.module.css";
import {Button} from "@material-ui/core";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize}) => {
    console.log(totalItemsCount, 'pageSize:', pageSize, 'currentPage:', currentPage, 'onPageChanged:', onPageChanged, 'portionSize:', portionSize)
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    console.log('pagesCount', pagesCount)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    console.log('pages', pages)
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize
    console.log(portionCount, leftPortionPageNumber, rightPortionPageNumber)
    return (
        <div>
            {portionNumber > 1 &&
            <Button type='submit'
                    endIcon={<NavigateBeforeIcon/>}
                    onClick={() => {
                        setPortionNumber(portionNumber - 1)
                    }}/>}

            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <span className={currentPage === p && s.selectedPage}
                                 key={p}
                                 onClick={(e) => {
                                     onPageChanged(p)
                                 }}>{p} </span>
                })}

            {portionCount > portionNumber &&
            <Button type='submit'
                    endIcon={<NavigateNextIcon/>}
                    onClick={() => {
                        setPortionNumber(portionNumber + 1)
                    }}/>}
        </div>
    )
}

export default Paginator;