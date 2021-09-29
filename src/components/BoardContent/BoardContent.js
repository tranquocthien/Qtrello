import React, { useState, useEffect } from 'react'
import Column from 'components/Column/Column';
import './BoardContent.scss';
import { isEmpty } from 'lodash'; 
import {mapOrder} from './../../utilities/sorts';
import { initialData } from './../../actions/initialData';

function BoardContent() {
    const [board, setBoard] = useState({});
    const [column, setColumn] = useState({});

    //[] chay 1 lan thoi khong bi lap lai
    useEffect(
        () => {
            const boardFromDb = initialData.boards.find(board => board.id === 'board-1');
            if(boardFromDb) {
                setBoard(boardFromDb);
                // sort column
                setColumn(mapOrder(boardFromDb.columns, boardFromDb.columnOrder, "id"));
            }
        },[]);

        if(isEmpty(board)) {
            return <div className="not-found">Not found</div>
        }
       

    return (
        <div className="board-content">
            {column.map((column, index) => <Column key={index} column={column} />)}

        </div>

    )
}

export default BoardContent
