import { FC } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Rent.module.scss";
import strings from "../../../../helpers/strings";

const Rent: FC = () => {
    const navigate = useNavigate();
    // to do dispatch
    // const dispatch = useAppDispatch()

    //   useEffect(() => {
    //     dispatch(fetchFlats())
    //   }, [dispatch])
    return (
        <section className={classes.wrapper}>
            <div className="container">
                <div className={classes.rent}>
                    <div className={classes.flex}>
                        <div className={classes.titleWrapper}>
                            <p className={classes.subtitle}>{strings.also}</p>
                            <h3 className={classes.title}>{rentTitle}</h3>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Rent;