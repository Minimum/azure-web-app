class TimeUtil {
<<<<<<< HEAD
=======

    public constructor() {

    }

>>>>>>> master
    public static getDateString(date: Date): string {
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    }

    public static getTimestampString(date: Date): string {
        let totalHours: number = date.getHours();
        let hours: number = totalHours % 12;
        let amPm: string = totalHours < 12 ? "AM" : "PM";

        return `${this.getDateString(date)} ${hours}:${date.getMinutes()}:${date.getSeconds()} ${amPm}`;
    }
}

export default TimeUtil;