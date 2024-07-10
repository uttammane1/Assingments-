import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../todoSlice';
import { Input, Button, VStack } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';

const TodoInput = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (title.trim()) {
      dispatch(addTodo({
        id: uuidv4(),
        title,
        status: false,
      }));
      setTitle('');
    }
  };

  return (
    <VStack spacing={4} mb={6}>
      <Input
        placeholder="Add a new todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button onClick={handleAddTodo} colorScheme="blue">
        Add Todo
      </Button>
    </VStack>
  );
};

export default TodoInput;
