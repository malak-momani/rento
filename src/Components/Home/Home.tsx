import { FC } from "react";
import Presentation from "./Presentation/Presentation";
import Rent from "./Presentation/Rent/Rent";

const Home: FC = () => {
    return (
        <>
            <Rent />
            <Presentation />
        </>
    )
}

export default Home;