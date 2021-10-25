import { VFC } from "react";

import Grid from "@material-ui/core/Grid";

import { TaskList } from "./TaskList";
import { SCard } from "../atoms/style/SCard";
import { taskListType } from "../../assets/type/dataType";

type propsType = {
    taskLists: taskListType[];
    taskType: string;
};

export const TaskLists: VFC<propsType> = (props) => {
    const { taskLists, taskType } = props;

    return (
        <Grid container spacing={2}>
            {taskLists.map((taskList, index) => {
                return (
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        key={taskList.task_list_id}
                    >
                        <SCard>
                            <TaskList
                                taskList={taskList}
                                priority={index}
                                taskType={taskType}
                            />
                        </SCard>
                    </Grid>
                );
            })}
        </Grid>
    );
};
