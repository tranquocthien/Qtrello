import React from 'react'
import './Column.scss'
import Card from '../Card/Card'
import { mapOrder } from './../../utilities/sorts'
import { Container, Draggable } from 'react-smooth-dnd'

function Column(props) {

  const { column } = props

  const cards = mapOrder(column.cards, column.cardOrder, "id")

  return (
    <div className="column">
      <header className="column-drag-handle"> {column.title}</header>
      <ul className="card-list">
        {cards.map((card, index) => <Card key={index} card={card} />)}
      </ul>
      <footer>Add another card</footer>
    </div>
  )
}

export default Column
