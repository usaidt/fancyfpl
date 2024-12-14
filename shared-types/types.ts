// this is not complete

export interface GeneralInfoResponse {
    events: Event[];
    game_settings: GameSettings;
    teams: Team[];
    total_players: number;
    elements: Element[];
    element_stats: ElementStat[];
    element_types: ElementType[];
}

export interface Event {
id: number;
name: string;
deadline_time: string;
}

export interface GameSettings {
league_join_private_max: number;
}

export interface Team {
code: number;
name: string;
}

export interface Element {
id: number;
first_name: string;
}

export interface ElementStat {
label: string;
name: string;
}

export interface ElementType {
id: number;
name: string;
}
