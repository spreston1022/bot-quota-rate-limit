import { QuotaInboundPolicy, ZuploContext, ZuploRequest } from "@zuplo/runtime";

type Options = {
  quotaPolicyName: string;
};

export default async function (
  request: ZuploRequest,
  context: ZuploContext,
  options: Options,
  policyName: string,
) {
  const usage = QuotaInboundPolicy.getUsage(context, options.quotaPolicyName);
  if (usage) {
    context.log.info({
      message: "Quota consumption",
      anchorDate: usage.anchorDate,
      nextResetDate: usage.nextResetDate,
      meters: usage.meters,
    });
  }
  return request;
}
