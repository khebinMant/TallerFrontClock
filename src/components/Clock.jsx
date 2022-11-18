import { ClockHands } from './ClockHands';
import { ClocksNumbers } from './ClocksNumbers';

export const Clock = () => {
    
    return (
        <div className="clock">
            <ClockHands />
            <ClocksNumbers/>
        </div>
    )
}
