import { defaultEndpointsFactory, Routing } from 'express-zod-api';
import { v1PostActivityInputSchema, V1PostActivityOutput, v1PostActivityOutputSchema } from '@sutorima/schema';

const v1PostActivityEndpoint: Routing[keyof Routing] = defaultEndpointsFactory.build({
  method: "post",
  input: v1PostActivityInputSchema,
  output: v1PostActivityOutputSchema,
  handler: async ({ input: { activityName }, options, logger }) => {
    logger.debug("v1PostActivityEndpoint:options: ", options);
    logger.debug("v1PostActivityEndpoint:activityName: ", activityName);
    const output: V1PostActivityOutput = {
      balance: {},
      activities: [],
      result: {
        name: activityName,
        rewards: {

        },
        newState: '',
      },
    };
    return output;
  },
});

export default v1PostActivityEndpoint;
