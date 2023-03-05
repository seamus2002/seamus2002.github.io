import Lottie from "lottie-react";
import animation from "./Person.json";

const Person = () => {
    return <Lottie animationData={animation} loop={true} />;
};

export default Person;
