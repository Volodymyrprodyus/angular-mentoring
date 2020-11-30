import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: 'duration'
})

export class DurationPipe implements PipeTransform {
	transform(courseDuration: number) {
		if (!courseDuration) {
			return 'not specified';
		}
		const hours = Math.floor(courseDuration / 60);
		const minutes = Math.floor(courseDuration % 60);
		const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;

		return hours ? `${formattedHours} h ${minutes} min` : `${minutes} min`;
	}
}
