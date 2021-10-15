import { Button } from "@material-ui/core";
import axios from "axios";
import { VFC } from "react";
import { useHistory, useParams } from "react-router";
import { path } from "../../../../assets/data/path";
import { useGetTask } from "../../../../hooks/useGetTask";
import { useTaskContext } from "../../../../providers/TaskProvider";

export const EditTask: VFC = () => {
    const { id } = useParams<{ id: string }>();
    const task_id = Number(id);
    const { task, setTask } = useTaskContext();
    const history = useHistory();
    useGetTask(task_id);
    console.log("task_id=", task_id);

    const updateTask = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await axios.put("/api/put/task", {
                task_id,
                task,
            });
            if (res.data.result) {
                console.log("updateTask:タスクの更新に成功");
                window.alert("グループを更新しました");
                history.push({ pathname: path.home });
            } else {
                console.log("updateTask:タスクの追加に失敗");
            }
        } catch (err) {
            console.log("updateTask:接続に失敗");
            console.log(err);
        }
    };

    return (
        <>
            <form onSubmit={(e) => updateTask(e)}>
                <h3>タスクを編集してください</h3>
                <textarea
                    cols={30}
                    rows={2}
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <Button type="submit" color="default" variant="contained">
                    更新
                </Button>
            </form>
        </>
    );
};
