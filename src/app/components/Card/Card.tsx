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

const Header = () => {
  return (
    <HeaderContainer>
      <CharacterName>Tanktop Jerry</CharacterName>
      <CharacterId>
        <span>Character id:</span>
        <span> 1</span>
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

const Card = () => {
  return (
    <CardInner>
      <Header />
      {/* <SkeletonImg /> */}
      <FieldsGrid>
        <FieldCard fieldName='Status' value='Alive' />
        <hr/>
        <FieldCard fieldName='Species' value='Human' />
        <hr/>
        <FieldCard fieldName='Type' value='Unknown' />
        <hr/>
        <FieldCard fieldName='Gender' value='Male' />
        <hr/>
        <FieldCard fieldName='Origin' value='Unknown' />
        <hr/>
        <FieldCard fieldName='Location' value='Earth' />
        <hr/>
        <FieldCard fieldName='Created At' value='Tue May 01 2018' />
      </FieldsGrid>
    </CardInner>
  )
}

export default Card