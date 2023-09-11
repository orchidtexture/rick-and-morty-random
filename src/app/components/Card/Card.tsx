import { Character } from '@/app/page';
import React from 'react'
import styled from "styled-components";

const CardInner = styled.div`
  padding: 1rem /* 16px */;
  background-color: rgb(24 24 27 / 0.8);
  border-radius: 1rem /* 16px */;
  width: 60%;
`;

const SkeletonImg = styled.div`
  height: 3.5rem /* 56px */;
  border-radius: 0.5rem /* 8px */;
  background-color: rgb(63 63 70 / 1);
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column
`

const CharacterName = styled.span`
  font-size: larger;
  padding: 1% 0;
`

const CharacterId = styled.div`
  text-transform: uppercase;
  font-size: small;
  color: #5adb01;
  font-weight: bold;
  padding: 1% 0;
`

const FieldsGrid = styled.div`
  display: grid;
`

const Header = ({ characterId, characterName }:{ characterId: string; characterName: string }) => {
  return (
    <HeaderContainer>
      { characterName && <CharacterName>{characterName}</CharacterName> }
      <CharacterId>
        <span>Character id: </span>
        { characterId && <span>{characterId}</span> }
      </CharacterId>
    </HeaderContainer>
  )
}

const Field = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2% 0;
`

const FieldCard = ({ fieldName, value }: { fieldName: string; value: string}) => {
  return (
    <Field>
      <span>{fieldName}</span>
      <span>{value}</span>
    </Field>
  )
}

const unknownIfNull = (field: null | string): string => {
  return !!field ? field : 'Unknown'
}

const formatDate = (date: string | undefined) => {
  if (date) {
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: '2-digit', year: 'numeric'}
    const d = new Date(date)
    return d.toLocaleDateString(undefined, options)
  } 
  return 'Unkown'
}

const handleNamedProperties = (property: any | undefined): string => {
  return !!property ? property.name : 'Unknown'
}

const Card = ({ character }: { character: Character}) => {
  return (
    <CardInner>
      {character && (
        <>
          <Header characterId={character.id} characterName={character.name} />
          <FieldsGrid>
            <FieldCard fieldName='Status' value={unknownIfNull(character.status)} />
            <hr/>
            <FieldCard fieldName='Species' value={unknownIfNull(character.species)} />
            <hr/>
            <FieldCard fieldName='Type' value={unknownIfNull(character.type)} />
            <hr/>
            <FieldCard fieldName='Gender' value={unknownIfNull(character.gender)} />
            <hr/>
            <FieldCard fieldName='Origin' value={handleNamedProperties(character.origin)} />
            <hr/>
            <FieldCard fieldName='Location' value={handleNamedProperties(character.location)} />
            <hr/>
            <FieldCard fieldName='Created At' value={formatDate(character.created)} />
          </FieldsGrid>
        </>
      )}
    </CardInner>
  )
}

export default Card