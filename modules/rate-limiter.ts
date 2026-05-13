import { CustomRateLimitDetails, ZuploContext, ZuploRequest } from "@zuplo/runtime";

export function rateLimitKey(
  request: ZuploRequest,
  context: ZuploContext,
  policyName: string,
): CustomRateLimitDetails | undefined {
  const akamaiBot = request.headers.get("akamai-bot");
  if (akamaiBot?.includes("intuit")) {
    return {
      key: "akamai-bot-intuit",
      requestsAllowed: 2,
      timeWindowMinutes: .03,
    };
  }
  return undefined;
}
