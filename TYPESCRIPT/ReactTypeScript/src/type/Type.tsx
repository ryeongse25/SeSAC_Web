export type TDates = {
    id: number,
    date: string
}

export type TDiary = {
    id: number,
    title: string,
    content: string,
    date: string
}

export type RootState = {
    dates: TDates[],
    diaries: TDiary[]
}

export type DateAction = {
    type: string,
    payload: TDates | number
}