import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completeDate: number | null; // nulo se interromper a task, e number se a task for completada
  interruptDate: number | null; // se task interrompida, quando
  type: keyof TaskStateModel['config'];
}