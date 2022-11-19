import { ClockHands } from './ClockHands';
import { ClockNumbers } from './ClockNumbers';

export const Clock = () => {
    
    return (
        <div className="clock">
            <ClockHands />
            <ClockNumbers/>
        </div>
    )
}
