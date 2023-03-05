import "./AnimatedButton.css";

const SourceButton = (props) => {
    return (
        <div>
            <a
                className="btn-link"
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <span>Source Code</span>
            </a>
        </div>
    );
};

export default SourceButton;
