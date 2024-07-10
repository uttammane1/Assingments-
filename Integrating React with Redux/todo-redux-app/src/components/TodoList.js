import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../todoSlice';
import { List, ListItem, Checkbox, IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <List spacing={3}>
      {todos.map((todo) => (
        <ListItem key={todo.id} display="flex" alignItems="center">
          <Checkbox
            isChecked={todo.status}
            onChange={() => dispatch(toggleTodo(todo.id))}
            flex="1"
          >
            {todo.title}
          </Checkbox>
          <IconButton
            aria-label="Delete Todo"
            icon={<DeleteIcon />}
            onClick={() => dispatch(deleteTodo(todo.id))}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
