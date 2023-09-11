import { Character } from '@/app/page'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { Button } from '../Button/Button'

const Name = styled.h4`
  color: #5adb01;
  margin: 2% 0;
  font-size: x-large;
`

const Card = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 4%;
  border: solid #5adb01 1px;
  border-radius: 0.5rem;
`
const Grid = styled.div`
  display: grid;
  width: 100%;
  gap: 6%;
`

const SmallCard = ({ character, handleOnclick }: { character: Character; handleOnclick: (character: Character) => void }) => {
  return (
    <Card>
      <Image style={{ borderRadius: '0.5rem'}} width={80} height={80} src={character.image} alt="tanktopJerry" />
      <Name>{character.name}</Name>
      <Button onClick={() => handleOnclick(character)}>View</Button>
    </Card>
  )
}

const History = ({ characters, handleViewOnClick }: { characters: Character[]; handleViewOnClick: () => void }) => {
  return (
    <Grid>
      {characters.map((c) => {
        return <SmallCard key={c.id} character={c} handleOnclick={handleViewOnClick} />
      })}
    </Grid>
  )
}

export default History