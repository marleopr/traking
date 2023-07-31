import './styled.css'

const SvgIcon = ({ icon, color }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" fill={color}>
            {icon}
        </svg>
    );
};

const TrackButtonV2 = ({ onClick, label, disabled, iconSvg }) => {
    const handleClick = () => {
        onClick();
    };
    return (
        <button onClick={handleClick} disabled={disabled} className='track-button'>
            <div className="track-button" >
                <div className="track-button">
                    <SvgIcon icon={iconSvg} color="#ffffff" />
                    {/* <SvgIcon icon={<path d="M112 0C85.5 0 64 21.5 64 48V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 272c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 48c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 240c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 208c8.8 0 16 7.2 16 16s-7.2 16-16 16H64V416c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H112zM544 237.3V256H416V160h50.7L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />} color="#ffffff" /> */}
                </div>
            </div>
            {/* <span>Rastrear</span> */}
            <span>{label}</span>
        </button>
    )
}
export default TrackButtonV2