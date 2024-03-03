type TCoord = {
    lat: number;
    lon: number;
}

type TWeather = {
    id: number;
    main: string;
    description: string;
    icon: string;
}

type TMain = {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
}

export type TWind = {
    speed: number;
    deg: number;
    gust: number;
}

export type TClouds = {
    all: number;
}

export type TSys = {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
}

export interface IWeatherData {
    coord: TCoord;
    weather: TWeather[];
    base: string;
    main: TMain;
    visibility: number;
    wind: TWind;
    clouds: TClouds;
    dt: number;
    sys: TSys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}
