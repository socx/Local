import React from 'react'
import { Header, Icon, Item } from 'semantic-ui-react';
import LogoImg from 'images/logo.png';

const Branding = (props) => {
  return <Item.Group>
          <Item>
            <Item.Image size='tiny' src={LogoImg} />
            <Item.Content>
              <Item.Header as='a'>LBA</Item.Header>
              <Item.Meta>Membership Database</Item.Meta>
            </Item.Content>
          </Item>
      </Item.Group>
  
}

export default Branding
