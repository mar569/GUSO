

import ContactServices from '../ContactServices';
import ButtonScroll from '../../Footer/ButtonScroll';
import MapInfo from './MapInfo';

const MapLocation = () => {
    return (
        <div className="relative w-full max-w-[1920px] mx-auto bg-gradient-to-br from-[#000000] via-[#17021f] to-[#140829] flex flex-col">
            <MapInfo address={''} />
            <ContactServices />
            <ButtonScroll />
        </div>
    );
};

export default MapLocation;
