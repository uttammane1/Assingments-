import React from 'react';
import { Container, Heading } from '@chakra-ui/react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <Container centerContent>
      <Heading as="h1" size="xl" my={6}>
        Todo List
      </Heading>
      <TodoInput />
      <TodoList />
    </Container>
  );
};

export default App;
