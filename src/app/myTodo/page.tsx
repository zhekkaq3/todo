
import { TodoComp } from '@/components/TodoComp';
import { TodoForm } from '@/components/TodoForm';
import { xataClient } from '@/utils/xataClient';

const xata = xataClient();

export default async function MyTodo({ searchParams }: { searchParams: { q: string } }) {
    let todos : any[] = [];
    if (searchParams.q) {
        const { records } = await xata.db.todo.search(searchParams.q, { fuzziness: 2 });
        todos = records;
    } else {
        try {
            todos = await xata.db.todo.getAll();
        } catch (error) {
            console.log(error,'ssssss')
        }
        
    }

    return (
            <div className='w-full mt-6 flex justify-center'>   
                <div className='w-full lg:w-1/2'>
                    <TodoForm />

                    <section className='border-t border-t-zinc-200 mt-6 px-2 py-4'>
                        <div className="w-full mt-2 mb-6">
                            <form>
                                <input
                                    name="q"
                                    defaultValue={searchParams.q}
                                    placeholder="Search..."
                                    className="w-60 border rounded-lg p-2 dark:text-purple-950"
                                />
                            </form>
                        </div>
                        {todos.length < 1 ? (
                            <p className='text-sm text-zinc-500 text-center'>
                                No todo yet!
                            </p>
                        ) : (
                            todos.map((todo) => (
                                <TodoComp todo={todo} key={todo.id} />
                            ))
                        )}
                    </section>
                </div>
            </div>
    );
}