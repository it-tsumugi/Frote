import { VFC } from "react";

import Grid from "@material-ui/core/Grid";

import { TaskList } from "./TaskList";
import { SCard } from "../atoms/style/SCard";
import { useTaskListsContext } from "../../providers/TaskListsProvider";
import { useGetTaskLists } from "../../hooks/useGetTaskLists";

export const TaskLists: VFC = () => {
    const { taskLists } = useTaskListsContext();
    useGetTaskLists();

    return (
        <Grid container spacing={2}>
            {taskLists.map((taskList, index) => {
                return (
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                        key={taskList.task_list_id}
                    >
                        <SCard>
                            <TaskList taskList={taskList} priority={index} />
                        </SCard>
                    </Grid>
                );
            })}
        </Grid>
    );
};
