import { allListsType } from "../type/dataType";
import { dbData } from "./dbData";

export let allTaskLists: allListsType[] = [];
let task_list_buf_id: number = dbData[0].task_list_id;
//初期化
let bufList: allListsType = {
    task_list_id: dbData[0].task_list_id,
    priority: dbData[0].importance + 2 * dbData[0].urgency,
    group: dbData[0].group,
    tasks: [],
};

for (let i: number = 0; i < dbData.length; i++) {
    if (task_list_buf_id !== dbData[i].task_list_id) {
        allTaskLists.push(bufList);
        bufList = {
            task_list_id: dbData[i].task_list_id,
            priority: dbData[i].importance + 2 * dbData[i].urgency,
            group: dbData[i].group,
            tasks: [],
        };
        task_list_buf_id = dbData[i].task_list_id;
    }
    bufList.tasks.push({
        task_id: dbData[i].task_id,
        task: dbData[i].task,
    });
    if (i === dbData.length - 1) {
        allTaskLists.push(bufList);
    }
}
