import React from 'react';
import { FaClock } from 'react-icons/fa';
import {TimerContainer} from "./TimerIndicator.styles.ts";
interface TimerProps {
    timer: number;
}
const TimerIndicator: React.FC<TimerProps> = ({timer}) => {
    return (
        <TimerContainer>
            <FaClock />
            <p>Time Left: {timer}</p>
        </TimerContainer>
    );
}
export default TimerIndicator