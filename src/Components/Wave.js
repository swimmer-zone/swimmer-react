import React from 'react';

const Wave = () => {
    return (
    	<svg version="1.1" id="wave" viewBox="0 0 1920 600">
	        <path d="M0 167 C 273,283 822,60 1920,206 V 0 H 0 V 167 Z" className="dark">
	            <animate
	                repeatCount="indefinite"
	                attributeName="d"
	                dur="30s"
	                attributeType="XML"
                    values="
                    	M0 147 C 473,353  822,30  1920,186 V 0 H 0 V 300 Z;
                        M0 147 C 473,60  1222,353 1920,206 V 0 H 0 V 300 Z;
                        M0 147 C 973,330 1722,17  1920,190 V 0 H 0 V 300 Z;
                        M0 147 C 473,353  822,30  1920,186 V 0 H 0 V 300 Z;
                        M0 147 C 473,30  1222,353 1920,206 V 0 H 0 V 300 Z;
                        M0 147 C 473,353  822,30  1920,186 V 0 H 0 V 300 Z
                    ">
	            </animate>
	        </path>
	        <path d="M0 177 C 473,383 822,60 1920,216 V 0 H 0 V 300 Z" className="light">
	            <animate
                    repeatCount="indefinite"
                    attributeName="d"
                    dur="50s"
                    attributeType="XML"
                    values="
                    	M0 167 C 273,283  822,60  1920,206 V 0 H 0 V 167 Z;
                    	M0 177 C 473,383  822,60  1920,216 V 0 H 0 V 300 Z;
                        M0 177 C 473,60  1222,383 1920,236 V 0 H 0 V 300 Z;
                        M0 177 C 973,360 1722,47  1920,220 V 0 H 0 V 300 Z;
                    	M0 177 C 473,383  822,60  1920,216 V 0 H 0 V 300 Z;
                        M0 167 C 273,283  822,60  1920,206 V 0 H 0 V 167 Z
                    ">
	            </animate>
	        </path>
	    </svg>
    );
};

export default Wave;
