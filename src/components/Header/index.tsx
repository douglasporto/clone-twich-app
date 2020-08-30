import React from 'react';
import { MaterialIcons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

import { Container, Avatar, RightSide, OnlineStatus, Button } from './styles';
import colors from '../../styles/colors';

const Header: React.FC = () => {
  return (
    <Container>
      <Avatar>
        <OnlineStatus />
      </Avatar>

      <RightSide>
        <Button>
          <MaterialIcons
            name="notifications-none"
            size={26}
            color={colors.black}
          ></MaterialIcons>
        </Button>

        <Button>
          <MaterialCommunityIcons
            name="message-outline"
            size={26}
            color={colors.black}
          ></MaterialCommunityIcons>
        </Button>

        <Button>
          <Feather
            name="search"
            size={26}
            color={colors.black}
          ></Feather>
        </Button>
      </RightSide>
    </Container>
  );
};

export default Header;
