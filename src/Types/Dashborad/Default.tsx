export interface OnlineTimelineGroupType {
    id: number;
    title: string;
}

export interface OnlineTimelineItemsType {
    id: number;
    group: number;
    title: string;
    start_time: moment.Moment;
    end_time: moment.Moment;
}