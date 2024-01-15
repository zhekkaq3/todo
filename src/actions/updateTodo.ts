'use server';

import { FormResponseType } from '@/utils/types';
import { xataClient } from '@/utils/xataClient';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const updateTodo = async (
    _: FormResponseType,
    formData: FormData
): Promise<FormResponseType> => {
    const xata = xataClient();
    const description = String(formData.get('description'));
    const id = String(formData.get('id'));

    const response = await xata.db.todo.update(id, { description });

    if (response?.description) {
        revalidatePath('/');
        return {
            type: 'success',
            message: 'Todo updated successfully!',
        };
    } else {
        return {
            type: 'error',
            message: 'Error updating todo!',
        };
    }
};