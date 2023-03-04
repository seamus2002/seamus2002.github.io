import Lottie from "lottie-react";
import animation from "./Laptop.json";

const Laptop = () => {
    return (
        <Lottie
            animationData={animation}
            loop={true}
            height={400}
            width={400}
        />
    );
};

export default Laptop;
