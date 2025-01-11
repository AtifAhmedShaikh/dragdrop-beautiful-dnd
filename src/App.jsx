import React, { useState } from "react";
import "./App.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { initialData } from "./data";



function App() {
  const [data, setData] = useState(initialData);
  
    const handlePrint = () => {
    window.print(); // This will open the print dialog
  };


  const handleDragEnd = (result) => {
    const { source, destination } = result;

    // If dropped outside a destination, do nothing
    if (!destination) return;

    const startBoard = data.boards[source.droppableId];
    const endBoard = data.boards[destination.droppableId];

    if (startBoard === endBoard) {
      // Moving within the same board
      const updatedCards = Array.from(startBoard.cards);
      const [movedCard] = updatedCards.splice(source.index, 1);
      updatedCards.splice(destination.index, 0, movedCard);

      const updatedBoard = {
        ...startBoard,
        cards: updatedCards,
      };

      setData((prevData) => ({
        ...prevData,
        boards: {
          ...prevData.boards,
          [updatedBoard.id]: updatedBoard,
        },
      }));
    } else {
      // Moving between boards
      const startCards = Array.from(startBoard.cards);
      const endCards = Array.from(endBoard.cards);
      const [movedCard] = startCards.splice(source.index, 1);
      endCards.splice(destination.index, 0, movedCard);

      const updatedStartBoard = {
        ...startBoard,
        cards: startCards,
      };

      const updatedEndBoard = {
        ...endBoard,
        cards: endCards,
      };

      setData((prevData) => ({
        ...prevData,
        boards: {
          ...prevData.boards,
          [updatedStartBoard.id]: updatedStartBoard,
          [updatedEndBoard.id]: updatedEndBoard,
        },
      }));
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <h2 className="text-center text-2xl font-bold my-5">Simple Implemantation of Drag and Drop using React Beautiful DND </h2>
      <div className="flex space-x-4 p-5">
        {data.boardOrder.map((boardId) => {
          const board = data.boards[boardId];
          return (
            <Droppable key={board.id} droppableId={board.id}>
              {(provided,snp) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={`w-1/2 p-4 bg-gray-800 text-gray-200 rounded-md shadow-md ${snp.isDraggingOver&&"bg-gray-600"} ${snp.draggingFromThisWith&&"bg-teal-600"}`}
                >
                  <h2 className="text-lg font-bold mb-3">{board.title}</h2>
                  {board.cards.map((card, index) => (
                    <Draggable key={card.id} draggableId={card.id.toString()} index={index}>
                      {(provided, snp) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`p-3 mb-2 bg-gray-700 rounded-md shadow cursor-pointer ${snp.isDragging&&"bg-green-400"}`}
                        >
                          {card.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          );
        })}
      </div>
      <button
        onClick={handlePrint}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Print
      </button>
    </DragDropContext>
  );
}

export default App;
