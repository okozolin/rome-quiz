import React from 'react';

interface HintProps {
    hint: string;
}
const HintIndicator: React.FC<HintProps> = ({hint}) => {
    return (
        <p>HINT: {hint}</p>
    );
}
export default HintIndicator