const Form = ({inputText,setInputText,todos,setTodos}) => {

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log('nghi1')
        const newTodos = {name:inputText};
        fetch('http://localhost:8000/todos',{
            method:'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTodos)
        })
        .then(()=>{
            console.log('nghi2')
        })
        setTodos([
            ...todos,
            newTodos
        ])
    }
    return ( 
        <div>
        {console.log('nghi3')}
            <input
            value = {inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter todo"
            />
         <button onClick={handleSubmit} >Submit</button>
         <ul>
             {todos.map( (todo) =>(
                 <li key={todo.id} >{todo.name} - {todo.id} </li>
             ))}
         </ul>
        </div>
        
     );
}
 
export default Form;