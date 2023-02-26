import { useDispatch, useSelector } from "react-redux";
import { statusChanged } from "../redux/filter/action";

const numberOfTodos = (no_of_todos) => {
    switch (no_of_todos) {
        case 0:
            return 'No task'

        case 1:
            return '1 task'

        default:
            return `${no_of_todos} tasks`;
    }
}

export default function Footer() {
    const todos = useSelector((state) => state.todos)
    const todosRemaining = todos.filter(todo => !todo.completed).length
    const dispatch = useDispatch()


    const handleStatusChanged = (status) => {
        dispatch(statusChanged(status))
    }
    const filters = useSelector((state) => state.filters)
    const { status, colors } = filters

    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{numberOfTodos(todosRemaining)} tasks left</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li className={`cursor-pointer ${status === 'All' && ' text-xl'}`}
                    onClick={() => handleStatusChanged('All')}
                >All</li>
                <li>|</li>
                <li className={`cursor-pointer ${status === 'Incomplete' && ' text-xl'}`}
                    onClick={() => handleStatusChanged('Incomplete')}
                >Incomplete</li>
                <li>|</li>
                <li className={`cursor-pointer ${status === 'Complete' && ' text-xl'}`}
                    onClick={() => handleStatusChanged('Complete')}
                >Complete</li>
                <li></li>
                <li></li>
                <li className="h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer bg-green-500"></li>
                <li className="h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer"></li>
                <li className="h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer"></li>
            </ul>
        </div>
    );
}
