import React,{useContext} from "react";
import PropTypes from "prop-types";
import Context from '../context.jsx'

const styles = {
  li: `flex justify-between items-center py-2 px-4 border border-solid border-gray-400	mb-2`,
  input: `mr-4`,
  button:`bg-red-400 border-0 text-white rounded-full`,
  done: 'line-through'
};

function TodoItem({ todo, index, onChange }) {
	const {removeTodo}=useContext(Context)
	const classes = []
	if(todo.completed) classes.push(styles.done)
	return (
		<li className={styles.li} >
			<span className={classes.join(' ')}>
				<input
					checked={todo.completed}
				 type="checkbox"
				  className={styles.input} 
				  onChange={()=>onChange(todo.id)}
				 />
				<strong>{index + 1}</strong>
				&nbsp;
				{todo.title}
			</span>

			<button onClick={removeTodo.bind(null,todo.id)} className={styles.button}>&times;</button>
		</li>
	);
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	index: PropTypes.number,
	onChange: PropTypes.func.isRequired,
};

export default TodoItem;
