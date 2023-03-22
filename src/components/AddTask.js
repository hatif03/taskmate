import React from "react";

export const AddTask = ({taskList, setTaskList, task, setTask}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const date = new Date()

        if (task.id){
            const newTaskList = taskList.map((todo) => {
                return (todo.id === task.id ? 
                {id: task.id, name: e.target.task.value, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} :
                 todo);
            });
            setTaskList(newTaskList);
            setTask({});
        } else {
            const newTask = {
            id: date.getTime(),
            name: e.target.task.value,
            time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
        };
        setTaskList([...taskList, newTask]);
        }
        setTask({});
        
        e.target.reset();
    };

    return(
        <section className="addTask">
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" value={task.name || ""} autoComplete="off" placeholder="Add a task" maxLength="25" onChange={ e => setTask({...task, name: e.target.value})}/>
                <button type="submit">{ task.id? "Update" : "Add" }</button>
            </form>
        </section>
    );
}