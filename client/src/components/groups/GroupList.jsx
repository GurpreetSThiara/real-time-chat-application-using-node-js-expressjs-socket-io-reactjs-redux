import { Stack, Typography } from '@mui/material'
import React from 'react'
import GroupListItem from './GroupListItem'

const GroupList = ({w="100%"},myGroups=[],chatId) => {
  return (
    <Stack>
        {myGroups.length > 0 ? myGroups.map((group , index)=> {
            return <GroupListItem key={index} group={group} chatId={chatId}/>
        }):<Typography>
            No Groups
            </Typography>}
    </Stack>
  )
}

export default GroupList