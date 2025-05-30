import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Cycle } from "../Cycle";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

export function MainForm() {
  return (
    <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput id='meuImput' type='text' placeholder='Digite algo' />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycle />
          </div>

          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} color='green'/>

            <DefaultButton icon={<StopCircleIcon />} color='red'/>
          </div>
        </form>
  );
}