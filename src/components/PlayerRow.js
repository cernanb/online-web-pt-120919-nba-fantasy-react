import React from 'react';

function PlayerRow({ player }) {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
        {player.name}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
        {player.number}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
        {player.position}
      </td>
    </tr>
  );
}

export default PlayerRow;
