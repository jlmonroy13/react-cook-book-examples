import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';

const List = props => (
  <ul>
    {props.items.map((item, key) => (
      <li key={key} className={`${item.completed ? 'completed' : 'pending'}`}>
        {item.task}
        <div className="actions">
          <span
            className={item.completed ? 'hide' : 'done'}
            onClick={() => props.markAsCompleted(item.id)}
          >
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <span className="trash" onClick={() => props.removeTask(item.id)}>
            <FontAwesomeIcon icon={faTrash} />
          </span>
        </div>
      </li>
    ))}
  </ul>
);
export default List;
