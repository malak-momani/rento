import { FC } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Rent.module.scss";
import strings from "../../../../helpers/strings";
import { useAppSelector } from "../../../../hooks/redux-hooks";
import { usePageTitle } from "../../../../hooks/usePageTitle";

const Rent: FC = () => {
    const navigate = useNavigate();
    // to do dispatch
    // const dispatch = useAppDispatch()

    //   useEffect(() => {
    //     dispatch(fetchFlats())
    //   }, [dispatch])

    const { loading, error } = useAppSelector(state => state.flats);
    const { stateData, filteredData } = useAppSelector(state => state.filter);
    const { rentTitle, totalOffersTitle } = usePageTitle();
    return (
        <section className={classes.wrapper}>
            <div className="container">
                <div className={classes.rent}>
                    <div className={classes.flex}>
                        <div className={classes.titleWrapper}>
                            <p className={classes.subtitle}>{strings.also}</p>
                            <h3 className={classes.title}>{rentTitle}</h3>
                        </div>
                        <div className={classes.selectWrapper}>
                            <div className={classes.autocomplete}>
                                {/** to do AutoComplete Component  */}
                                {/*<Autocomplete
                                    value={metroValue}
                                    options={metroOptions}
                                    placeholder={"Выберите"}
                                    classNames={cn(classes.selectMetro)}
                                    onChange={(newValue) => onChangeHandler(newValue)}
    />*/}
                            </div>
                            <div>
                                {/**<Autocomplete
                  value={areaValue}
                  options={areaOptions}
                  placeholder={"Выберите"}
                  classNames={cn(classes.selectArea)}
                  onChange={(newValue) => onChangeHandler(newValue)}
                /> */}
                            </div>
                        </div>
                    </div>
                    <div>
                        {!loading && !error ?
                            <>
                                {/** to do 4 components
                         *  {filteredData?.length > 0 ?
                  <Carousel data={filteredData} />
                  :
                  <NothingFound />
                }
                         */}
                            </>
                            :
                            <>
                                {/**<Spinner visible={loading} />
                <ErrorMessage error={error} /> */}
                            </>
                        }
                    </div>
                    <div className={classes.offers}>
                        <div>
                            <span></span>
                            <span></span>
                            <p></p>
                        </div>
                        {/** <Button className={classes.seeAllBtn}
              onClick={onClickHandler}
            >
              Посмотреть все

                        </Button>
                    */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Rent;