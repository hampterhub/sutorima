import { Routing } from "express-zod-api";
import v1GetStateEndpoint from './handlers/v1/state/get';
import v1PostActivityEndpoint from './handlers/v1/activity/post';

const routing: Routing = {
  v1: {
    activity: v1PostActivityEndpoint,
    state: v1GetStateEndpoint,
  },
};

export default routing;