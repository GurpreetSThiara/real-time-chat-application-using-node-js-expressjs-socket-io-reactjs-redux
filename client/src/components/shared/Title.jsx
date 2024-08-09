import React from 'react'
import { Helmet } from 'react-helmet-async'

const Title = ({title = "Chats", description = "des"}) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name='description' content={description}/>
    </Helmet>
  )
}

export default Title