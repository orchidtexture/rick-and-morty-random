'use client';

import styled from 'styled-components';
import { Button } from './components/Button/Button';
import Card from './components/Card/Card';
import Image from 'next/image';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 4%;
  padding: 0 2%;
`;

export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">
        The Rick and Morty Random Character Generator
      </h1>
      <Container>
        <Image width={312} height={312} src="https://rickandmortyapi.com/api/character/avatar/443.jpeg" alt="tanktopJerry" />
        <Card />
      </Container>
      <Container>
        <Button onClick={() => console.log("Generate")} $primary>Generate</Button>
      </Container>
      
    </div>
  );
}