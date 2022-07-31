import { Github } from "@styled-icons/bootstrap/Github";
import React from "react";
import styled from "styled-components";

const GithubCardContainer = styled.div`
  width: 400px;
  background-color: #0f172a;
  height: 150px;
  border-radius: 15px;
  display: block;
  margin: 0 auto;
  padding: 10px;
`;



const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h3`
  color: white;
  font-size: 1.3rem;
  padding-left: 15px;
`;

const GithubIcon = styled(Github)`
  width: 50px;
  padding-left: 15px;
  color: white;
`;



const StackContainer = styled.div`
  display: flex;
  padding-top: 20px;
  justify-content: end;
  padding-right: 15px;
`;

const Stack = styled.h3`
  color: green;
  font-size: 1rem;
  padding-left: 15px;
`;





const GithubCard = ({ items }: any) => {
  return (
    <GithubCardContainer>
      <Wrapper>
        <GithubIcon />
        <Title>{items.name}</Title>
      </Wrapper>
      <StackContainer>
        <Stack>Vue</Stack>
        <Stack>Vuex</Stack>
        <Stack>TailwindCSS</Stack>
      </StackContainer>
    </GithubCardContainer>
  );
};

export default GithubCard;
