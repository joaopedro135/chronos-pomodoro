export function getNextCycle(currentCycle: number) {
  return currentCycle === 0 || currentCycle === 8 ? 1 : currentCycle + 1; //se currentCycle for equivalente a 0 ou 8 ele via para 1, caso contrário ele soma uma unidade em currentCycle
}
