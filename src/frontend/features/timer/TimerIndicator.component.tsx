import React from 'react';
interface TimerProps {
    timer: number;
}
const TimerIndicator: React.FC<TimerProps> = ({timer}) => {
    return (
        <p>Time Left: {timer}</p>
    );
}
export default TimerIndicator