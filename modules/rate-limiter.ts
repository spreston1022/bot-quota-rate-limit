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
      requestsAllowed: 3,
      timeWindowMinutes: 5 / 60,
    };
  }
  return undefined;
}
