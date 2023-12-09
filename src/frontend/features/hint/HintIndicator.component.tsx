import React from 'react';
import { FaLightbulb } from 'react-icons/fa';
import {HintContainer} from "./Hint.styles.ts";

interface HintProps {
    hint: string;
}
const HintIndicator: React.FC<HintProps> = ({hint}) => {
    return (
        <HintContainer>
            <FaLightbulb />
            <p>HINT: {hint}</p>
        </HintContainer>
    );
}
export default HintIndicator