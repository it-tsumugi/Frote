import axios from "axios";
import { taskListType } from "../type/dataType";
// import { dbData } from "./dbData";

type DBType = {
    task_id: number;
    task_list_id: number;
    importance: -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4;
    urgency: -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4;
    group: string;
    task: string;
};
export let allTaskLists: taskListType[] = [];

let dbData: DBType[] = [];

const getTaskData = async () => {
    try {
        const res = await axios.get("/api/test");
        console.log("getTaskData:データ取得に成功しました");
        dbData = res.data.data;
    } catch (err) {
        console.log("Test:接続に失敗");
        console.log(err);
    }

    if (dbData.length === 0) {
        allTaskLists = [];
    } else {
        let task_list_buf_id: number = dbData[0].task_list_id;
        //初期化
        let bufList: taskListType = {
            task_list_id: dbData[0].task_list_id,
            priority: dbData[0].importance + 2 * dbData[0].urgency,
            group: dbData[0].group,
            task: [],
        };

        for (let i: number = 0; i < dbData.length; i++) {
            if (task_list_buf_id !== dbData[i].task_list_id) {
                allTaskLists.push(bufList);
                bufList = {
                    task_list_id: dbData[i].task_list_id,
                    priority: dbData[i].importance + 2 * dbData[i].urgency,
                    group: dbData[i].group,
                    task: [],
                };
                task_list_buf_id = dbData[i].task_list_id;
            }
            bufList.task.push({
                task_id: dbData[i].task_id,
                text: dbData[i].task,
            });
            if (i === dbData.length - 1) {
                allTaskLists.push(bufList);
            }
        }
    }
};

getTaskData();
