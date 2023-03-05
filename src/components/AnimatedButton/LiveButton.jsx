import "./AnimatedButton.css";

const LiveButton = (props) => {
    return (
        <div>
            <a
                className="btn-link"
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <span>See Live</span>
            </a>
        </div>
    );
};

export default LiveButton;
