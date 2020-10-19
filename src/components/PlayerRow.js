import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

function PlayerRow({ player, index, innerRef, ...rest }) {
  return (
    <tr ref={innerRef} {...rest}>
      <td className="w-1/2 px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
        {player.name}
      </td>
      <td className="w-1/4 px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
        {player.number}
      </td>
      <td className="w-1/4 px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
        {player.position}
      </td>
    </tr>
  );
}

export default PlayerRow;
