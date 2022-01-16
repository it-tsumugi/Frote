import { atom, atomFamily, selector, selectorFamily } from "recoil";
import { taskListType } from "../assets/type/dataType";
import { fetchTaskLists } from "../api/fetchTaskLists";
import {
    groupTaskListsType,
    groupListType,
    impTaskListsType,
    urgTaskListsType,
} from "../assets/type/dataType";

//atomFamiliy
export const booleanState = atomFamily<boolean, string>({
    key: "booleanState",
    default: false,
});

export const stringState = atomFamily<string, string>({
    key: "stringState",
    default: "",
});

export const numberState = atomFamily<number, string>({
    key: "numberState",
    default: 0,
});

export const taskListsState = atom<taskListType[]>({
    key: "taskListsState",
    default: fetchTaskLists(),
    // default: [],
});

// export const taskListsState = selector<taskListType[]>({
//     key: "taskListsState",
//     get: (f:Promise<taskListType[]>) => {f()},
//     set: ({ set }, newValue) => set(taskListsAtom, newValue),
// });

// export const taskListsState = selectorFamily<taskListType[],() => Promise<taskListType[]>>({
//     key: "taskListsState",
//     get: () => ,
//     set: ({ set }, newValue) => set(taskListsAtom, newValue),
// });

export const groupListsState = atom<groupListType[]>({
    key: "groupListsState",
    default: [],
});

export const groupTaskListsState = atom<groupTaskListsType>({
    key: "groupTaskListsState",
    default: [],
});

export const impTaskListsState = atom<impTaskListsType>({
    key: "impTaskListsState",
    default: [],
});

export const urgTaskListsState = atom<urgTaskListsType>({
    key: "urgTaskListsState",
    default: [],
});
