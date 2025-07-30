import {
  V1GetStateOutput,
  V1PostActivityInput,
  V1PostActivityOutput,
} from '@sutorima/schema';

export type SutorimaService = {
  getState: () => Promise<V1GetStateOutput>
  postActivity: (input: V1PostActivityInput) => Promise<V1PostActivityOutput>
}
// TODO update store on these service methods
export const sutorimaService: SutorimaService = {
  async getState(): Promise<V1GetStateOutput> {
    const object: V1GetStateOutput = {
      activities: [
        {
          type: '',
          name: 'gooning',
          state: '',
          description: 'lolwot',
          available: true,
          startingCost: {
            bits: 69,
            subs: 0,
          },
        },
      ],
      balance: {
        bits: 42069,
        subs: 69,
      },
    };
    return object;
  },
  async postActivity(input): Promise<V1PostActivityOutput> {
    const object: V1PostActivityOutput = {
      activities: [
        {
          type: '',
          name: 'gooning',
          state: 'newState',
          description: 'lolwot',
          available: true,
          startingCost: {
            bits: 69,
            subs: 0,
          },
        },
      ],
      balance: {
        bits: 42069,
        subs: 69,
      },
      result: {
        name: input.activityName,
        rewards: {

        },
        newState: 'newState',
      },
    };
    return object;
  }
}