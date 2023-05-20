import { fetchAuth, fetch } from "@/utils/request"

const routes = {
  verifyEmailEcard: (token, email) => `auth/active-user?token=${token}&email=${email}`,
}

export function verifyEmailEcard(token, email) {
  return fetch({
    url: routes.verifyEmailEcard(token, email),
    method: 'GET'
  });
}
