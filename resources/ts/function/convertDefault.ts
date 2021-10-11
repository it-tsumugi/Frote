import { DBType, taskListType } from "../assets/type/dataType";

export const convertDefault = (dbData: DBType[]) => {
    let result: taskListType[] = [];
    if (dbData.length === 0) {
        result = [];
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
                result.push(bufList);
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
                result.push(bufList);
            }
        }
    }
    return result;
};
