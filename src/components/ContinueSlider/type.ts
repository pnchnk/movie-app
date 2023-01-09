export interface IContinueSliderProps {
    className?: string,
    item?: ISliderItem,
}

export interface ISliderItem {
    title: string,
    rating?: number,
    episodes?: number,
    genre?: string,
    img: string,
}