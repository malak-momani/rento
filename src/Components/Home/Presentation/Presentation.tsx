import { FC } from "react";
import classes from "./Presentation.module.scss"
import data from "./data";
import cn from "classnames"

const Presentation: FC = () => {
    return (
        <section className={classes.wrapper}>
            <div className={cn("container", classes.container)}>
                <div className={classes.searchBlock}>
                    <h3 className={classes.title}> to do text</h3>
                    <p className={classes.subtitle}>to do text</p>
                    {/* <OpenMapButtom /> */}
                </div>
                <div className={classes.presentationBlock}>
                    {
                        data.map((card) => 
                            <div key={card.id} className={cn(classes.card, card.className)}>
                                <div className={classes.flex}>
                                    {card.imgPath &&
                                    <div className={classes.cardImg}> 
                                        <img src={card.imgPath} alt="" />
                                    </div>
                                    }
                                    <h4 className={classes.cardTitle}>{card.title}</h4>
                                </div>
                                <div className={classes.cardSubtitle}>{card.subtitle.paragraph}</div>
                                <div>
                                    {/**to do Button */}
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Presentation;