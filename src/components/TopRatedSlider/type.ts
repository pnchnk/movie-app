export interface ITopRatedSliderProps {
    className?: string,
    item?: ITopRatedSliderItem[],
}

export interface ITopRatedSliderItem {
    title: string,
    rating?: number,
    duration?: string,
    genre?: string,
    img: string,
}