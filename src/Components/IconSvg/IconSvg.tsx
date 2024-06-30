import { FC } from "react";
import sprite from "../../assets/images/sprite.svg"


interface IPropSvg {
    id: string;
    className?: string;
}

export const IconSvg: FC<IPropSvg> = ({id, className}) => {
    return (
        <svg className={className}>
            <use href={sprite + id} />
        </svg>
    )
}