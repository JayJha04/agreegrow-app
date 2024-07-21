import React from 'react';
import { SideBySideMagnifier } from 'react-image-magnifiers';

export interface IAgreegrowImageMagnifier {
    imageSrc: string;
    largeImageSrc: string;
};

const AgreegrowImageMagnifier: React.FC<IAgreegrowImageMagnifier> = ({ imageSrc, largeImageSrc }) => {
    return (
        <SideBySideMagnifier
            imageSrc={imageSrc}
            largeImageSrc={largeImageSrc}
            alwaysInPlace={true}
            fillAvailableSpace={true}
            fillAlignTop={false}
            fillGapLeft={0}
            fillGapRight={0}
            fillGapTop={0}
            fillGapBottom={0}
            zoomContainerBorder="1px solid #ccc"
            zoomContainerBoxShadow="0 4px 8px rgba(0,0,0,0.5)"
            inPlaceMinBreakpoint={640}
        />
    );
}

export default AgreegrowImageMagnifier;