import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

let data = [
  {
    id: 1,
    name: 'Morning routine',
    created: 'July 01, 2023',
    category: 'Task',
    content: 'Read the news daily',
    dates: '',
    archived: false,
  },
  {
    id: 2,
    name: 'Kentaro Miura, Berserk',
    created: 'July 07, 2023',
    category: 'Random thought',
    content:
      '“In this world, is the destiny of mankind controlled by some transcendental entity or law? Is it like the hand of God hovering above? At least it is true that man has no control, even over his own will. Man takes up the sword in order to shield the small wound in his heart sustained in a far-off time beyond remembrance. Man wields the sword so that he may die smiling in some far-off time beyond perception.”',
    dates: '',
    archived: false,
  },
  {
    id: 3,
    name: 'Portfolio Idea',
    created: 'July 07, 2023',
    category: 'Idea',
    content:
      'Develop a landing page for one of the units of the Armed Forces of Ukraine',
    dates: '',
    archived: false,
  },
  {
    id: 4,
    name: 'Caring for a pet',
    created: 'July 10, 2023',
    category: 'Task',
    content: 'Order cat food',
    dates: '',
    archived: false,
  },
  {
    id: 5,
    name: 'Caring for a pet',
    created: 'July 11, 2023',
    category: 'Task',
    content:
      'Make an appointment with a vet on 5/12/2023, cancel an appointment on 5/11/2023',
    dates: ' 5/12/2023, 5/11/2023',
    archived: false,
  },
  {
    id: 6,
    name: 'Сharity',
    created: 'July 12, 2023',
    category: 'Random thought',
    content: 'Send a donation',
    dates: '',
    archived: false,
  },
  {
    id: 7,
    name: 'Morning routine',
    created: 'July 18, 2023',
    category: 'Task',
    content: 'Pray to Stepan Bandera',
    dates: '',
    archived: false,
  },
]


export default function ActiveTable() {
  return (
    // <div style={{ height: 400, width: '1200px' }}>
    //   <DataGrid
    //     rows={rows}
    //     columns={columns}
    //     initialState={{
    //       pagination: {
    //         paginationModel: { page: 0, pageSize: 5 },
    //       },
    //     }}
    //     pageSizeOptions={[5, 10]}
    //     checkboxSelection
    //   />
    // </div>
    <>
      <TableContainer>
  <Table variant='simple'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th></Th>
        <Th>Name</Th>
              <Th>Created</Th>
              <Th>Category</Th>
              <Th>Content</Th>
              <Th>Dates</Th>
              <Th></Th>
              <Th>Archive</Th>
              <Th>Remove</Th>
      </Tr>
    </Thead>
          <Tbody>
            {data.map(({id, name, created, category, content, dates}) => (
              <Tr key={id}>
                <Td></Td>
                <Td>{name}</Td>
                <Td>{created}</Td>
                <Td>{category}</Td>
                <Td>{content}</Td>
                <Td>{dates}</Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </Tr>
            ))}
      </Tbody>
  </Table>
</TableContainer>
    </>
  );
}
