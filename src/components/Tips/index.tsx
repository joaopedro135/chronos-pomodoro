import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function Tips() {
  const { state } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCyleType = getNextCycleType(nextCycle);

  // Tips
  const tipsForWhenActiveTask = {
    workTime: <span>Foque por {state.config.workTime}</span>,
    shortBreakTime: <span>Descance por {state.config.shortBreakTime}</span>,
    longBreakTime: (
      <span>Denscanso longo, faça algo {state.config.longBreakTime}</span>
    ),
  };

  const tipsForNoActiveTask = {
    workTime: <span>Próximo ciclo é de {state.config.workTime}</span>,
    shortBreakTime: (
      <span>Próximo descanso é de {state.config.shortBreakTime}</span>
    ),
    longBreakTime: <span>Próximo ciclo é de {state.config.longBreakTime}</span>,
  };

  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCyleType]}
    </>
  );
}
