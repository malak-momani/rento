import { FC, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import { setSelectedData } from "../../../store/reducers/filterReducer";
import classes from "./DropdownList.module.scss"
import { IconSvg } from "../../IconSvg/IconSvg";
import { Link } from "react-router-dom";

export interface IListDrodown {
    title: string,
    isIcon?: boolean,
    list: {
        id: number,
        value: string,
        label: string,
        city: string,
        path: string,
    }[]
}

export interface IPropsDropdown {
    menu: IListDrodown,
}
const DropdownList: FC<IPropsDropdown> = ({ menu }) => {
    const dispatch = useAppDispatch();
    const { stateData } = useAppSelector(state => state.filter);
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleClickOutsideDropdown = (e: MouseEvent) => {
            const path = e.composedPath();
            if (path[0] !== ref?.current) {
                setIsOpen(false)
            }
        }
        window.addEventListener('click', handleClickOutsideDropdown);
        return () => {
            window.removeEventListener('click', handleClickOutsideDropdown)
        }
    });

    const onClickHandler = (city: string) => {
        dispatch(setSelectedData({
            ...stateData,
            city: city
        }));
    }
    return (
        <button className={classes.button}
        ref={ref}
        onClick={() => setIsOpen(prevState => !prevState)}
        >
            {menu?.title}
            {menu?.isIcon && 
            <IconSvg id="#mark" className={classes.icon} />
            }
            {
                isOpen && 
                <ul className={classes.list} >
                    {menu?.list.map((item) => 
                        <li
                            key={item.city}
                            className={classes.listItem}
                            onClick={() => onClickHandler(item.city)}
                        >
                            <Link to={item.path} className={classes.itemLink}>
                                    {item.value}
                            </Link>
                        </li>
                    )}
                </ul>
            }

        </button>
    )
}

export default DropdownList;