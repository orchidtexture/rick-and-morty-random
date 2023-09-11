'use client';

export const dynamic = "force-dynamic";

import { gql, useLazyQuery } from '@apollo/client';
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

import styled from 'styled-components';
import { Button } from './components/Button/Button';
import Card from './components/Card/Card';
import { genRandomId } from './utils/genRandomId';
import Image from 'next/image';
import { useState } from 'react';

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

const GET_CHARACTER_BY_ID = gql`
query($id: ID!) {
  character(id: $id) {
    id
    name
    status
    species
    type
    origin {
      name
    }
    location {
      name
    }
    image
    episode {
      name
    }
    created
    gender
  }
}`

export default function Page() {
  const [getUserById, { loading, error, data }] = useLazyQuery(GET_CHARACTER_BY_ID);
  const [currentCharacter, setCurrentCharacter] = useState<any>()
  const [history, setHistory] = useState<Object[]>([]) // possibly not rendered
  const [viewHistoryOpen, setViewHistoryOpen] = useState<boolean>(false)

  console.log(currentCharacter)

  const handleOnClick = () => {
    const preffix = '5d299c853d1d85c017cc3'
    const id = `${preffix}${genRandomId(preffix)}`
    getUserById({ variables: { id } }).then(res => {
      setCurrentCharacter(res.data.character)
      setHistory([res.data.character, ...history])
    })
  }

  const handleViewOnClick = (character: any) => {
    // setCurrentCharacter(character)
  }

  const handleOpenHistory = () => {
    console.log(history)
    setViewHistoryOpen(!viewHistoryOpen)
  }

  return (
    <div className="space-y-4">
      <Title>
        The Rick and Morty Random Character Generator
      </Title>
      <Container>
        { data && currentCharacter && (
          <>
            <Image width={312} height={312} src={currentCharacter.image} alt="tanktopJerry" />
            <Card character={currentCharacter} />
          </>
        )}
      </Container>
      <ButtonsContainer>
        <Button onClick={handleOnClick} $primary>Generate</Button>
        <Button onClick={handleOpenHistory}>History</Button>
      </ButtonsContainer>
      
    </div>
  );
}