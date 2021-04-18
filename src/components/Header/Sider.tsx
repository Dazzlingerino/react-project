import React, {FC} from 'react'

import {UsergroupAddOutlined, UserOutlined} from '@ant-design/icons'
import {Link} from 'react-router-dom'
import ForumIcon from '@material-ui/icons/Forum'
import PeopleIcon from '@material-ui/icons/People'
import AnnouncementIcon from '@material-ui/icons/Announcement'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import {Layout, Menu} from 'antd'
const {  Sider  } = Layout


export const AppSider:FC = () => {

  return (
    <>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} >
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="/profile">Profile</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<ForumIcon />}>
          <Link to="/dialogs">Dialogs</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<PeopleIcon />}>
          <Link to="/users">Users</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<AnnouncementIcon />}>
          <Link to="/news">News</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<MusicNoteIcon />}>
          <Link to="/music">Music</Link>
        </Menu.Item>
        <Menu.Item key="6" icon={<UsergroupAddOutlined />}>
          <Link to="/friends">Friends</Link>
        </Menu.Item>
      </Menu>
    </>
  )
}
