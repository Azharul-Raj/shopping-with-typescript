import SingleTodo from "./SingleTodo";
import { Todo } from "./Style";

type ListTypeProps = {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: (e: React.FormEvent<EventTarget>) => void;
    todos: Array<Todo>
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const List = ({value,setValue,handleSubmit,todos,setTodos}:ListTypeProps) => {
    
    return (
        <div>
            <h2>TODO LIST</h2>
            <div className="">
                <form onSubmit={handleSubmit} action="" className="flex justify-center items-center relative">
                <input onChange={(e)=>setValue(e.target.value)} value={value} className='p-3 bg-gray-600 text-white focus:border-gray-800 active:border-red-500 rounded-3xl w-11/12' type="text" name="" id="" />
                    <button className='btn rounded-full absolute right-10' type='submit'>Go</button>
                </form>
                <div className="">
                    {
                        todos?.map(todo => <SingleTodo todo={ todo} key={todo.id} todos={todos} setTodos={setTodos}  />)
                    }
                </div>
            </div>
        </div>
    );
};

export default List;