import { useGetTaskLists } from "../hooks/useGetTaskLists";
import { useTaskListsContext } from "../providers/TaskListsProvider";

export const getTaskListLength = (task_list_id: number) => {
    const { taskLists } = useTaskListsContext();
    useGetTaskLists();
    let length: number = 0;
    for (let i = 0; i < taskLists.length; i++) {
        if (task_list_id === taskLists[i].task_list_id) {
            length = taskLists[i].task.length;
            break;
        }
    }
    return length;
};
