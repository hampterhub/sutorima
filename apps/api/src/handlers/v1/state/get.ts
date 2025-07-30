
import { defaultEndpointsFactory, Routing } from 'express-zod-api';
import {
  v1GetStateInputSchema, V1GetStateOutput, v1GetStateOutputSchema
} from '@sutorima/schema';

const v1GetStateEndpoint: Routing[keyof Routing] = defaultEndpointsFactory.build({
  method: "get",
  input: v1GetStateInputSchema,
  output: v1GetStateOutputSchema,
  handler: async ({ input, options, logger }) => {
    logger.debug("v1GetStateEndpoint:input: ", input);
    logger.debug("v1GetStateEndpoint:options: ", options);
    const output: V1GetStateOutput = {
      balance: {},
      activities: [],
    };
    return output;
  },
});

export default v1GetStateEndpoint;