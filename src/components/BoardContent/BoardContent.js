import React, { useState, useEffect } from 'react'
import Column from 'components/Column/Column'
import './BoardContent.scss'
import { isEmpty } from 'lodash'
import { mapOrder } from './../../utilities/sorts'
import { initialData } from './../../actions/initialData'
import { Container, Draggable } from 'react-smooth-dnd'


function BoardContent() {
  const [board, setBoard] = useState({})
  const [column, setColumn] = useState({})

  //[] chay 1 lan thoi khong bi lap lai
  useEffect(
    () => {
      const boardFromDb = initialData.boards.find(board => board.id === 'board-1')
      if (boardFromDb) {
        setBoard(boardFromDb)
        // sort column
        setColumn(mapOrder(boardFromDb.columns, boardFromDb.columnOrder, "id"))
      }
    }, [])

  if (isEmpty(board)) {
    return <div className="not-found">Not found</div>
  }

  const onColumnDrop = (dropResult) => {
    console.log(dropResult)
    // const scene = Object.assign({}, this.state.scene);
    // scene.children = applyDrag(scene.children, dropResult);
    // this.setState({
    //   scene
    // })
  }


  return (
    <div className="board-content">
      <Container
        orientation="horizontal" //Chieu ngang
        onDrop={onColumnDrop} //
        dragHandleSelector=".column-drag-handle"
        getChildPayload={index => column[index]}
        dropPlaceholder={{
          animationDuration: 150,
          showOnTop: true,
          className: 'cards-drop-preview'
        }}
      >
        {
          column.map((column, index) => (
            <Draggable key={index}>
              <Column key={index} column={column} />
            </Draggable>
          ))}
      </Container>

    </div>

  )
}

export default BoardContent

