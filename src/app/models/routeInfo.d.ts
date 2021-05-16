export interface IRouteInfo {
    school_id?: string;
    school_route_number?: string;
    route_id: string;
    route_type?: string;
    route_graph: Array<IRouteGraph>;
    scheduled_start_time?: string;
    time_zone?: string;
    route_number?: string;
}

export interface IRouteGraph {
    route_stop_id?: string;
    school_id?: string;
    route_number: string;
    school_route_stop_uuid?: string;
    address?: {
        entity?: string;
        apt_plot?: string;
        street?: string;
        city?: string;
        state?: string;
        zip_code?: string;
    },
    geo_location: {
        latitude: string;
        longitude: string;
    },
    registered_arrival_time?: string,
    time_from_src?: number,
    distance_from_prev_stop?: {
        text?: string;
        value?: number;
    },
    duration_from_prev_stop?: {
        text?: string;
        value?: number;
    },
    geo_fence?: {
        radius?: number,
    },
    is_school?: boolean
}

export interface IMapCordinate {
    latitude: number;
    longitude: number;
}