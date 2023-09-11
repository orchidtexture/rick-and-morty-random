'use client';

export const dynamic = "force-dynamic";

import { gql, useLazyQuery } from '@apollo/client';

import styled from 'styled-components';
import { Button } from './components/Button/Button';
import Card from './components/Card/Card';
import History from './components/History/History';
import { genRandomId } from './utils/genRandomId';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export interface Character {
  __typeName: string
  created: string
  episode: any[]
  gender: string
  id: string
  image: string
  location: any | null
  name: string
  origin: any | null
  species: string
  status: string
  type: string
}

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 4%;
  padding: 0 2%;
  flex-wrap: wrap-reverse;
  align-items: start;
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

const PageContainer = styled.div`
  min-height: calc(100vh - 100px);
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
  const [getUserById, { loading }] = useLazyQuery(GET_CHARACTER_BY_ID);
  const [currentCharacter, setCurrentCharacter] = useState<Character | undefined>()
  const [history, setHistory] = useState<Character[] | []>([]) // possibly not rendered
  const [viewHistoryOpen, setViewHistoryOpen] = useState<boolean>(false)
  const [generatedId, setGeneratedId] = useState<string | undefined>()

  useEffect(() => {
    generatedId && getUserById({ variables: { id: generatedId } })
    .then((res) => {
      setHistory((h) => [res.data.character, ...h])
      setCurrentCharacter(res.data.character)
    })
  }, [generatedId, getUserById])
  

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    })
  }

  const handleOnClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, history: Character[] | []) => {
    e.preventDefault();
    const prefix = '5d299c853d1d85c017cc3'
    const id = `${prefix}${genRandomId({ prefix, min: undefined, max: undefined })}`
    setGeneratedId(id)
  }

  const handleViewOnClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, character: Character) => {
    setCurrentCharacter(character)
    handleScroll(e)
  }

  const handleOpenHistory = () => {
    setViewHistoryOpen(!viewHistoryOpen)
  }

  return (
    <>
      <PageContainer>
        <Title>
          The Rick and Morty Random Character Generator
        </Title>
        <Container>
          {currentCharacter && (
            <>
              <Image style={{ borderRadius: '0.5rem', marginBottom: '10px'}} width={312} height={312} src={currentCharacter.image} alt="tanktopJerry" />
              <Card character={currentCharacter} />
            </>
          )}
        </Container>
        <ButtonsContainer>
          <Button onClick={(e) => handleOnClick(e, history)} $primary>{loading ? 'Loading' : 'Generate' }</Button>
          <Button onClick={handleOpenHistory}>History</Button>
        </ButtonsContainer>
        {viewHistoryOpen && (
          <Container>
            <History characters={history} handleViewOnClick={handleViewOnClick} />
          </Container>
        )}
      </PageContainer>
    </>   
  );
}