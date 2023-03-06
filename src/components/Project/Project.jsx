import LiveButton from "../AnimatedButton/LiveButton";
import SourceButton from "../AnimatedButton/SourceButton";

const Project = (props) => {
    return (
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
                <img
                    src={props.icon}
                    className="d-block mx-lg-auto img-fluid project-img"
                    alt={props.name}
                    width="1182"
                    height="634"
                    loading="lazy"
                />
            </div>
            <div className="col-lg-6">
                <h2 className="mainTitle fw-bold lh-1 mb-3">{props.name}</h2>
                <p className="lead">{props.desc}</p>
                <br />
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <LiveButton link={props.liveLink} />
                    <SourceButton link={props.sourceLink} />
                </div>
            </div>
        </div>
    );
};

export default Project;
