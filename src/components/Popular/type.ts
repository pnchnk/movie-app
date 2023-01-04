export interface IPopularProps {
    items: IPopularItem[],
    classname?: string,
}

export interface IPopularItem {
    title: string,
    rating: number,
    episodes?: number,
    duration?: string,
    genre: string,
    img: string,
}
