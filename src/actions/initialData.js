export const initialData = {
  boards: [
    {
      id: "board-1",
      columnOrder: ["column-1", "column-2", "column-3"],
      columns: [
        {
          id: "column-1",
          boardId: 'board-1',
          title: 'To do column',
          cardOrder: ['card-1', 'card-2', 'card-3', 'card-4', 'card-5', 'card-6'],
          cards: [
            {
              id: 'card-1',
              boardId: 'card-1',
              columnId: 'column-1',
              title: 'Title of card 1',
              cover: 'https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-9/243561799_1023904651706707_9136932404935069371_n.jpg?_nc_cat=100&_nc_rgb565=1&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=8FA1DZ0QIOQAX__sTq7&tn=CGApyQjHQl1PWnBB&_nc_ht=scontent-hkt1-2.xx&oh=b6f297e42e24d86e5cd1614ee64d04e9&oe=617A2046'
            },
            {
              id: 'card-2',
              boardId: 'card-2',
              columnId: 'column-2',
              title: 'Title of card 2',
              cover: null
            },
            {
              id: 'card-3',
              boardId: 'card-3',
              columnId: 'column-3',
              title: 'Title of card 3',
              cover: null
            },
            {
              id: 'card-4',
              boardId: 'card-4',
              columnId: 'column-4',
              title: 'Title of card 4',
              cover: null
            },
            {
              id: 'card-5',
              boardId: 'card-5',
              columnId: 'column-5',
              title: 'Title of card 5',
              cover: null
            },
            {
              id: 'card-6',
              boardId: 'card-6',
              columnId: 'column-6',
              title: 'Title of card 6',
              cover: null
            }
          ]

        },
        {
          id: "column-2",
          boardId: 'board-1',
          title: 'Inprocess column',
          cardOrder: ['card-7', 'card-8', 'card-9'],
          cards: [
            {
              id: 'card-7',
              boardId: 'card-7',
              columnId: 'column-7',
              title: 'Title of card 7',
              cover: null
            },
            {
              id: 'card-8',
              boardId: 'card-8',
              columnId: 'column-8',
              title: 'Title of card 8',
              cover: null
            },
            {
              id: 'card-9',
              boardId: 'card-9',
              columnId: 'column-9',
              title: 'Title of card 9',
              cover: null
            }
          ]

        },
        {
          id: "column-3",
          boardId: 'board-1',
          title: 'Done column',
          cardOrder: ['card-10', 'card-11', 'card-12'],
          cards: [
            {
              id: 'card-10',
              boardId: 'card-10',
              columnId: 'column-10',
              title: 'Title of card 10',
              cover: null
            },
            {
              id: 'card-11',
              boardId: 'card-11',
              columnId: 'column-11',
              title: 'Title of card 11',
              cover: null
            },
            {
              id: 'card-12',
              boardId: 'card-12',
              columnId: 'column-12',
              title: 'Title of card 12',
              cover: null
            }
          ]

        }
      ]
    }
  ]
}