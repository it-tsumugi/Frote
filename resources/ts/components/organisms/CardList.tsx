import { VFC } from "react";
import styled from "styled-components";

import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

import { allListsType } from "../../assets/type/dataType";
import { path } from "../../assets/data/path";
import { NavButton } from "../atoms/button/NavButton";

type PropsType = {
    data: allListsType[];
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
                        sm={6}
                        md={6}
                        lg={6}
                        key={taskList.task_list_id}
                    >
                        <SCard>
                            <SId>{"優先度:" + (index + 1) + "　"}</SId>
                            <STaskContainer>
                                <STaskContentsContainer>
                                    <STaskItemContainer>
                                        <SEmpty />
                                        {taskList.tasks[0].task}
                                        <button>削除</button>
                                    </STaskItemContainer>
                                    <SInput
                                        type="Checkbox"
                                        id={"test" + taskList.task_list_id}
                                    />
                                    <SHiddenDetail className="HiddenDetail">
                                        {taskList.tasks
                                            .map((task) => {
                                                return (
                                                    <STaskItemContainer
                                                        key={task.task_id}
                                                    >
                                                        <SEmpty />
                                                        {task.task}
                                                        <button
                                                            style={{
                                                                width: "20",
                                                            }}
                                                        >
                                                            削除
                                                        </button>
                                                    </STaskItemContainer>
                                                );
                                            })
                                            .filter((task, index) => index > 0)}
                                    </SHiddenDetail>
                                </STaskContentsContainer>
                                <SButtonContainer>
                                    {taskList.tasks.length > 1 ? (
                                        <SLabel
                                            htmlFor={
                                                "test" + taskList.task_list_id
                                            }
                                        >
                                            すべて表示
                                        </SLabel>
                                    ) : null}
                                    <NavButton to={path.edit}>編集</NavButton>
                                    <button>削除</button>
                                </SButtonContainer>
                            </STaskContainer>
                        </SCard>
                    </Grid>
                );
            })}
        </Grid>
    );
};

const SCard = styled(Card)`
    text-align: center;
    padding: 15px;
    border: solid 4px #2d2d31;
    border-radius: 10px;
    background-color: #55555a;
    color: #f0f0f0;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    font-size: 24px;
`;

const SId = styled.div``;

const STaskContainer = styled.div``;

const STaskContentsContainer = styled.div``;

const STaskItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const SHiddenDetail = styled.div`
    height: 0;
    overflow: hidden;
    opacity: 0;
    transition: 0.8s;
    width: 100%;
    border-radius: 5px 5px 5px 5px;
    box-sizing: border-box;
`;

const SEmpty = styled.div`
    width: 30px;
`;

const SInput = styled.input`
    display: none;
    :checked ~ .HiddenDetail {
        height: auto;
        opacity: 1;
    }
`;

const SButtonContainer = styled.div``;

const SLabel = styled.label`
    margin: 5px;
    display: inline-block;
    border-radius: 5%;
    font-size: 18pt;
    cursor: pointer;
    padding: 12px 12px;
    background: #2d2d31;
    color: #ffffff;
    line-height: 1em;
    opacity: 1;
    transition: 0.3s;
    box-shadow: 4px 4px 3px gray;
    font-size: 14px;
    &:hover {
        box-shadow: none;
        text-decoration: none;
        color: white;
        opacity: 0.6;
    }
`;
