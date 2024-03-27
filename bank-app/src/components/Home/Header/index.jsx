import React from 'react';
import { Container, UserPhotoContainer, UserPhotoImage, Logo } from './styled'; // Correção aqui
import { MaterialCommunityIcons } from "@expo/vector-icons"; // Correção de nome aqui

const Header = () => {
  return (
    <Container>
      <Logo source={require("../../../../assets/logo.png")} />
      <UserPhotoContainer>
        <UserPhotoImage source={require("../../../../assets/userPhoto.png")} />
      </UserPhotoContainer>
    </Container>
  );
};

export default Header;
