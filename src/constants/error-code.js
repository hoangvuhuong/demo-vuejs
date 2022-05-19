export const GatewayError = {
   SUCCESS: 'S200',
   ACCEPTED: 'S202',
   INCORECT_ACCOUNT: 'S204',
   SESSION_EXPIRED: 'S400',
   SESSION_EXPIRED1: 'S401',
   SESSION_EXPIRED2: 'S404',
   INTERNAL_ERROR: 'S500',
   BAD_GATEWAY: 'S502',
   SERVICE_UNAVAILABLE: 'S503',
   GATEWAY_TIMEOUT: 'S504'
}

export const FunctionErrors = {
   SUCCESS: '0',
   FAIL: '1'
}

export const STAY_PAGE_ERRORS = [
   GatewayError.INCORECT_ACCOUNT,
   GatewayError.INTERNAL_ERROR,
   GatewayError.BAD_GATEWAY,
   GatewayError.SERVICE_UNAVAILABLE,
   GatewayError.GATEWAY_TIMEOUT
]
