import React, { useEffect } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Loader from './Loader'
import { useSelector } from 'react-redux'
import Tasks from './Tasks'

function a11yProps(index) {
  return {
    id: `list-${index}`,
    'aria-controls': `listpanel-${index}`,
  }
}

const Home = ({ history }) => {
  const [value, setValue] = React.useState(0)

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    }
  }, [history, userInfo])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      {userInfo ? (
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 2 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label='the nav tabs'
            variant='scrollable'
            scrollButtons
            allowScrollButtonsMobile
          >
            {userInfo.lists.map((list, index) => (
              <Tab key={list._id} label={list.title} {...a11yProps(index)} />
            ))}
            <Tab label='+ New List' {...a11yProps(userInfo.lists.length)} />
          </Tabs>
        </Box>
      ) : (
        <Loader />
      )}
      <Tasks value={value} />
    </Box>
  )
}

export default Home
