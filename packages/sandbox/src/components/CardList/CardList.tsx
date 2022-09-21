import { Stack } from '@chakra-ui/react'

import { Card, CardProps } from '../Card/Card'

export const CardList = ({ cards }: { cards: Array<CardProps> }) => {
  return (
    <Stack
      direction='column'
      width='100%'
      spacing='14px'
      borderRadius='xl'
      minWidth='768px'
      maxWidth='1440px'
    >
      {cards.map((card, idx) => {
        return card.enabled ? (
          <Card
            key={card.name}
            name={card.name}
            icon={card.icon}
            symbol={card.symbol}
            actions={card.actions}
            hasInputField={card.hasInputField}
            enabled={card.enabled}
          ></Card>
        ) : null
      })}
    </Stack>
  )
}
