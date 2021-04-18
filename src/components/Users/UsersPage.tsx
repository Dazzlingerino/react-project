import React, { FC } from 'react'
import { useSelector } from 'react-redux'

import Preloader from '../common/preloader/Preloader'
import { getIsFetching } from '../../redux/usersSelectors'
import { Users } from './Users'

type OwnPropsType = {
  pageTitle: string
}

const UsersPage: FC<OwnPropsType> = (props) => {
  const isFetching = useSelector(getIsFetching)

  return (
    <>
      <h2>{props.pageTitle}</h2>
      {isFetching ? <Preloader /> : null}
      <Users />
    </>
  )
}
const UsersPageWithMemoHOC = React.memo(UsersPage)
export default UsersPageWithMemoHOC
