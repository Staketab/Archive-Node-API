import type { EventFilterOptionsInput } from '../resolvers-types';
import type { Actions, Events } from '../models/types';
import { ArchiveNodeAdapter } from './archive-node-adapter';

export interface DatabaseAdapter {
  getEvents(input: EventFilterOptionsInput): Promise<Events>;
  getActions(input: EventFilterOptionsInput): Promise<Actions>;
}

export { ArchiveNodeAdapter };