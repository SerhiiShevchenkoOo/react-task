import React from 'react';
import TodoItem from './todoItems.jsx';
import PropTypes from 'prop-types';
 function TodoList(props) {
	return (
		<ul>
			{ props.todos.map((todo, index) => {
				return <TodoItem todo={todo}
					key={todo.id} index={index}
				onChange={props.onToggle}
				/>
			})}
		</ul>

	)
}
TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.object).isRequired,
	onToggle: PropTypes.func.isRequired,
}

 export default TodoList