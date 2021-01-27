import { ListOption } from 'src/app/models/list-options.model';

export interface AuthorsState {
  authors: ListOption[];
  error: Error | string;
}
