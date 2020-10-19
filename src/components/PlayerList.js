import React, { useState, useEffect } from 'react';
import { apiUrl } from '../config';
import { connect } from 'react-redux';
import PlayerRow from './PlayerRow';
import { css } from '@emotion/core';
import MoonLoader from 'react-spinners/MoonLoader';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function PlayerList({ user }) {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPlayers() {
      try {
        const res = await fetch(`${apiUrl}/users/${user.id}/players`, {
          credentials: 'include',
        });

        const data = await res.json();
        setPlayers(data.players);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    }

    getPlayers();
  }, [user.id]);

  const reorder = (items, oldPosition, newPosition) => {
    const copy = Array.from(items);
    const [removedItem] = copy.splice(oldPosition, 1);
    copy.splice(newPosition, 0, removedItem);
    return copy;
  };

  const saveOrder = async (updatedItems) => {
    const playerIds = updatedItems.map((i) => i.id);
    console.log(playerIds);
    const res = await fetch(`${apiUrl}/users/${user.id}/update_player_order`, {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ player_ids: playerIds }),
    });
  };

  const onDragEnd = (result) => {
    console.log('something was dragged', result);

    const updatedOrder = reorder(
      players,
      result.source.index,
      result.destination.index
    );
    saveOrder(updatedOrder);
    setPlayers(updatedOrder);
  };

  if (loading)
    return (
      <div className="sweet-loading">
        <MoonLoader
          css={override}
          size={150}
          color={'#123abc'}
          loading={loading}
        />
      </div>
    );
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 table-fixed">
                <thead>
                  <tr>
                    <th className="w-1/2 px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="w-1/4 px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Number
                    </th>
                    <th className="w-1/4 px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Position
                    </th>
                  </tr>
                </thead>
                <DragDropContext onDragEnd={onDragEnd}>
                  <Droppable droppableId="player-list">
                    {(provided) => (
                      <tbody
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                      >
                        {players.map((player, index) => (
                          <Draggable
                            key={player.id}
                            draggableId={`${player.id}`}
                            index={index}
                          >
                            {(provided) => (
                              <PlayerRow
                                innerRef={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                player={player}
                              />
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </tbody>
                    )}
                  </Droppable>
                </DragDropContext>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect((state) => ({ user: state.auth.currentUser }))(
  PlayerList
);
