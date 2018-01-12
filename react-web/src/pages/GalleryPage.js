import React from 'react'
import InstagramEmbed from 'react-instagram-embed'

export default function () {
  return (
    <InstagramEmbed
      url='https://www.instagram.com/p/BV6dT2xBSOy/?taken-by=_bakergirl'
      maxWidth={320}
      hideCaption={false}
      containerTagName='div'
      protocol=''
      onLoading={() => {}}
      onSuccess={() => {}}
      onAfterRender={() => {}}
      onFailure={() => {}}
    />
  )
}
