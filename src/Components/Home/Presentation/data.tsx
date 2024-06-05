import client from "../../../assets/images/client.svg";
import raise from "../../../assets/images/raise.svg";
import strings from "../../../helpers/strings";
import classes from "./Presentation.module.scss";

const data = [
  {
    id: 0,
    title: strings.attractClients, subtitle: { paragraph: <div>{strings.attractClientsDesc}</div> },
    btnName: strings.postAd, imgPath: client, styleButton: classes.placeBtn, className: classes.place
  },
  {
    id: 1,
    title: strings.raiseAd, subtitle: { paragraph: <div>{strings.raiseAdDesc}</div> },
    btnName: strings.serviceCost, imgPath: raise, styleButton: classes.priceBtn, className: classes.price
  },
  {
    id: 2,
    title: strings.priGold, subtitle: {
      paragraph:
        <div>{strings.priGoldDesc}</div>
    }
    , btnName: "Еще о тарифе Gold",
    styleButton: classes.goldBtn, className: classes.gold
  }
]

export default data;