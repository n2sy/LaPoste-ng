import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: true,
})
export class FilterPipe implements PipeTransform {
  transform(
    value: { name: string; type: string; status: string; startDate: Date }[],
    selectedStatus: string
  ): { name: string; type: string; status: string; startDate: Date }[] {
    if (!selectedStatus.length) return value;
    else {
      let filtredServers = [];
      for (const serv of value) {
        if (serv['status'] == selectedStatus) filtredServers.push(serv);
      }
      return filtredServers;
    }
  }
}
