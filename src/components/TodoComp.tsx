
import { deleteTodo } from '@/actions/deleteTodo';
import { TodoRecord } from '@/xata';
import { DeleteButton } from './ui/DeleteButton';
import { Pencil } from 'lucide-react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/Button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { EditTodoForm } from './EditTodoForm';



export const TodoComp = ({ todo }: { todo: TodoRecord }) => {
    
    return (
        <TooltipProvider>
            <div className='flex border p-2 rounded-lg mb-2'>
                <div className='ml-4'>
                    <header className='flex items-center mb-2'>
                        <h5 className='text-sm text-zinc-500'>
                            <Tooltip>
                                <TooltipTrigger>Todo item </TooltipTrigger>
                                <TooltipContent>
                                    {todo.id}
                                </TooltipContent>
                            </Tooltip>
                        </h5>
                        <p className='mx-1 font-light text-zinc-500'>|</p>

                        <p className='text-sm text-zinc-500'>
                            {todo.xata.createdAt.toDateString()}</p>
                    </header>
                    <p className=' mb-2'>{todo.description}</p>
                    <div className='flex gap-4 items-center'>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="outline"><Pencil className='h-4 w-4 mr-2' />Edit</Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-80">
                              <EditTodoForm todo={todo}/>
                            </PopoverContent>
                        </Popover>
                        <form action={deleteTodo}>
                            <input type='hidden' name='id' value={todo.id} />
                            <DeleteButton />
                        </form>
                    </div>
                </div>
            </div>
        </TooltipProvider>
    );
};