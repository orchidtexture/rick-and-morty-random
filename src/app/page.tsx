'use client';

export const dynamic = "force-dynamic";

import { gql } from '@apollo/client';
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

import styled from 'styled-components';
import { Button } from './components/Button/Button';
import Card from './components/Card/Card';
import Image from 'next/image';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 4%;
  padding: 0 2%;
`

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2% 0;
`

const Title = styled.h1`
  color: #fff;
  margin: 2% 0;
  font-style: oblique;
  font-size: xx-large;
  text-align: center;
`

const query = gql`query {
    characters {
      results {
        name
      }
    }
  }`

export default function Page() {
  const { data } = useSuspenseQuery(query);

  console.log(data);

  return (
    <div className="space-y-4">
      <Title>
        The Rick and Morty Random Character Generator
      </Title>
      <Container>
        <Image width={312} height={312} src="https://rickandmortyapi.com/api/character/avatar/443.jpeg" alt="tanktopJerry" />
        <Card />
      </Container>
      <ButtonsContainer>
        <Button onClick={() => console.log("Generate")} $primary>Generate</Button>
        <Button onClick={() => console.log("History")}>History</Button>
      </ButtonsContainer>
      
    </div>
  );
}