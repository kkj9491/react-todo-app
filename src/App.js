import React, {useCallback, useState} from "react";
import "./App.css"
import Lists from "./components/Lists";
import Form from "./components/Form";


export default function App() {
    console.log("App Component")
    const [todoData, setTodoData] = useState([]);
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // 새로운 할 일 데이터 생성
        let newTodo = {
            id: Date.now(),
            title: value,
            completed: false,
        }
        setTodoData(prev =>
            [...prev, newTodo]
        );
        setValue("");
    }

    const handleClick = useCallback((id) =>{
        let newTodoData = todoData.filter((data) => data.id !== id);
        setTodoData(newTodoData)
    }, [todoData])

    return (
        <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
            <div className="w-full p-6 m-4 bg-white rounded shadow lg:max-w-lg">
                <div className="flex justify-between mb-3">
                    <h1>할일 목록</h1>
                </div>
                <Lists
                    todoData={todoData}
                    setTodoData={setTodoData}
                    handleClick={handleClick}
                />

                <Form value={value} setValue={setValue} handleSubmit={handleSubmit} />
            </div>

        </div>
    )

}