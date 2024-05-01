import { useAppDispatch } from 'shared/customHooks/typedReduxHooks';
import { Button } from 'shared/ui';

import { toggleTaskAddingStatus } from '../model/tasksManagerSlice';
import './styles/tasksAddingButtonForm.scss';

/** "Add task" button form (at to-do column) */
export function TasksAddingButtonForm() {
    const dispatch = useAppDispatch();

    const addTask = () => {
        dispatch(toggleTaskAddingStatus());
    };

    return (
        <Button
            className='tasks-adding-button-form'
            text={'Add task...'}
            onClick={addTask}
        />
    );
}
