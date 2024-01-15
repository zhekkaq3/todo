'use client';

import { useFormState } from 'react-dom';
import { createTodo } from '@/actions/createTodo';
import { useState } from 'react';
import { Button } from './ui/Button';


export const TodoForm = () => {
    const [formState, action] = useFormState(createTodo, { type: 'initial' });
    const [value, setValue] = useState('')
    const resetValue = () => {
        setTimeout(() => { setValue('') },)
    }

    return (
        <form action={action}>
            {formState.type === 'error' && (
                <p className='mb-6 text-center text-red-600'>
                    {formState.message}
                </p>
            )}
            <textarea
                name='description'
                cols={30}
                rows={2}
                className='w-full border rounded-lg mb-2 p-4'
                required
                placeholder='Input todo details'
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <div className='flex justify-end'>
                <div onClick={() => resetValue()}>
                    <Button variant="ghost">Create</Button>
                </div>
            </div>
        </form>
    );
};
