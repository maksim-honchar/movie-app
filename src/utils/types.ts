export interface IMovie {
    movieTitle: string
    year: number
    format: string
    cast: {firstName: string, lastName: string}[]
    id: string
}

export interface InitialState {
    setMovies: IMovie[],
    status: string,
    error: null | string
}
