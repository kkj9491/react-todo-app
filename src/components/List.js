import React from 'react';

const List =React.memo(({id, title, completed, todoData, setTodoData, provided, snapshot, handleClick }) => {
    console.log("list Component")
    const handleCompleteChange = (id) => {
        let newTodoData = todoData.map(data => {
            if(data.id === id) {
                data.completed = !data.completed;
            }
            return data;
        })
        setTodoData(newTodoData)
    }




    return (
        <div
            key={id}
            {...provided.draggableProps}
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            className={
                `${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"} flex items-center justify-between w-full px-4 py1 my2 text-gray-600 border rounded`}
        >
            <div className="items-center">
                <input
                    type="checkbox"
                    defaultChecked={completed}
                    onChange={() => handleCompleteChange(id)}
                />{" "}
                <span className={completed ? "line-through" : undefined}>{title}</span>
            </div>
            <div className="items-center">
                <button
                    className="px-4 py-2 float-right"
                    onClick={() => handleClick(id)}
                >
                    x
                </button>
            </div>

        </div>
    );
})

export default List;