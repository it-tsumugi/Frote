import { VFC } from "react";
import styled from "styled-components";

import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

import { taskListType } from "../../assets/type/dataType";
import { TaskList } from "./TaskList";

type PropsType = {
    data: taskListType[];
};

export const CardList: VFC<PropsType> = (props) => {
    const { data } = props;
    return (
        <Grid container spacing={2}>
            {data.map((taskList, index) => {
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
                            <SId>{"優先度:" + (index + 1) + "　"}</SId>
                            <TaskList taskList={taskList} />
                        </SCard>
                    </Grid>
                );
            })}
        </Grid>
    );
};

const SCard = styled(Card)`
    padding: 15px;
    border: solid 4px #2d2d31;
    border-radius: 10px;
    background-color: #55555a;
    color: #f0f0f0;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
`;

const SId = styled.div``;
