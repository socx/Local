import React from 'react'
import { Image, Icon } from 'semantic-ui-react';
import LogoImg from 'images/logo.png';

const Branding = (props) => {
  return <div className='branding'>
            <Image size='tiny' src={LogoImg} />
        </div>
}

export default Branding
