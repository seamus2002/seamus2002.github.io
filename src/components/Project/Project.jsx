import LiveButton from "../AnimatedButton/LiveButton";
import SourceButton from "../AnimatedButton/SourceButton";

const Project = (props) => {
    return (
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
                <img
                    src={props.icon}
                    class="d-block mx-lg-auto img-fluid"
                    alt="Bootstrap Themes"
                    width="700"
                    height="500"
                    loading="lazy"
                />
            </div>
            <div class="col-lg-6">
                <h2 class="mainTitle fw-bold lh-1 mb-3">{props.name}</h2>
                <p class="lead">{props.desc}</p>
                <br />
                <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                    <LiveButton link={props.liveLink} />
                    <SourceButton link={props.sourceLink} />
                </div>
            </div>
        </div>
    );
};

export default Project;
