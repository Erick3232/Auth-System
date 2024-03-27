import styled from "styled-components/native"; // Alteração aqui
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.View`
  width: 85%;
  margin: 0 auto;
  border: 0px solid #373738;
  border-bottom-width: 2px;
  padding-bottom: 0px; 
  flex-direction: row;
  justify-content: space-between 10px;
  align-items: center; 
  margin-top: 10px;
`;

export const Logo = styled.Image.attrs({
    resizeMode: "contain", // Removido o estilo aninhado e adicionado diretamente aqui
})`
  margin-left: 25px;
  width: 200px;
  height: 100px;
`;

export const UserPhotoContainer = styled.View`
  margin-left: 0px;
  width: 50px;
  height: 50px;
  border-radius: 18px;
  border: 1px solid #e53d41;
`;

export const UserPhotoImage = styled.Image.attrs({
    resizeMode: "contain", // Removido o estilo aninhado e adicionado diretamente aqui
})`
  width: 100%;
  height: 100%;
  border-radius: 18px;
`;
