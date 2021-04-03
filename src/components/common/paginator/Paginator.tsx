import React, { FC, useState } from 'react'
import { Button } from '@material-ui/core'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'

type PropsType = {
  totalItemsCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (pageNumber: number) => void
  portionSize: number
}

const Paginator: FC<PropsType> = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize)

  let pages: Array<number> = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  let portionCount = Math.ceil(pagesCount / portionSize)
  let [portionNumber, setPortionNumber] = useState(1)
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  let rightPortionPageNumber = portionNumber * portionSize

  return (
    <div>
      {portionNumber > 1 && (
        <Button
          type="submit"
          endIcon={<NavigateBeforeIcon />}
          onClick={() => {
            setPortionNumber(portionNumber - 1)
          }}
        />
      )}

      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
          return (
            <span /*className={currentPage === p && s.selectedPage}*/
              key={p}
              onClick={(e) => {
                onPageChanged(p)
              }}
            >
              {p}{' '}
            </span>
          )
        })}

      {portionCount > portionNumber && (
        <Button
          type="submit"
          endIcon={<NavigateNextIcon />}
          onClick={() => {
            setPortionNumber(portionNumber + 1)
          }}
        />
      )}
    </div>
  )
}

export default Paginator
