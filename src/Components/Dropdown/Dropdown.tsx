import { FC } from "react"
import DropdownList, { IListDrodown } from "./DropdownList/DropdownList";
import classes from "./Dropdown.module.scss";

export interface IPropsDropdown {
    data: IListDrodown[],
}

export const Dropdown: FC<IPropsDropdown> = ({ data }) => {
    return (
        <div className={classes.flex}>
            {data.map((menu) => {
                return (
                    <DropdownList
                        key={menu.title}
                        menu={menu}
                    />
                )
            })}
        </div>
    )
}