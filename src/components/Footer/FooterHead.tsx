import mapPlace from '../../assets/mapBg.svg';

const FooterHead = () => {
    return (
        <>
            <div className="w-full text-center py-6 px-4 md:py-8">
                <h2 className="text-[#6EFF24] text-2xl md:text-3xl font-medium">
                    Where are we located
                </h2>
                <p className="text-white text-lg md:text-xl mt-2">
                    Москва, Ломоносовский проспект, 29к3
                </p>
            </div>

            <div className="w-full overflow-hidden" style={{ height: 'min(100vw, 1512px)' }}>
                <img
                    src={mapPlace}
                    alt="Карта расположения"
                    className="w-full h-full object-cover"
                />
            </div>
        </>
    )
}

export default FooterHead