import nock from "nock";

nock("https://iwdfzvfqbtokqetmbmbp.supabase.co:443", {
  encodedQueryParams: true,
})
  .post("/auth/v1/token", {
    email: "info@refine.dev",
    password: "refine-supabase",
    gotrue_meta_security: {},
  })
  .query({ grant_type: "password" })
  .reply(
    200,
    {
      access_token:
        "eyJhbGciOiJIUzI1NiIsImtpZCI6IldGWnFuOWt6bnBJZTIvL2wiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzE0MDM5OTAzLCJpYXQiOjE3MTQwMzYzMDMsImlzcyI6Imh0dHBzOi8vaXdkZnp2ZnFidG9rcWV0bWJtYnAuc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6ImJkZWZhYzgxLTJiZDEtNDRkMS1iNWVkLTdhYmVkYjk2Y2NjZSIsImVtYWlsIjoiaW5mb0ByZWZpbmUuZGV2IiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCJ9LCJ1c2VyX21ldGFkYXRhIjp7fSwicm9sZSI6ImF1dGhlbnRpY2F0ZWQiLCJhYWwiOiJhYWwxIiwiYW1yIjpbeyJtZXRob2QiOiJwYXNzd29yZCIsInRpbWVzdGFtcCI6MTcxNDAzNjMwM31dLCJzZXNzaW9uX2lkIjoiNzZlZGVjZmItY2NkMS00OTVlLWIxZDAtOGJjMTZjY2QxMWIyIiwiaXNfYW5vbnltb3VzIjpmYWxzZX0.h1ujlkSBF2ffMtawITfk1e55ekrQBIHDe8Q9AHr9hkI",
      token_type: "bearer",
      expires_in: 3600,
      expires_at: 1714039903,
      refresh_token: "FsqYSQlJiUAHRzFTlhyBAw",
      user: {
        id: "bdefac81-2bd1-44d1-b5ed-7abedb96ccce",
        aud: "authenticated",
        role: "authenticated",
        email: "info@refine.dev",
        email_confirmed_at: "2021-09-08T11:09:24.284171Z",
        phone: "",
        confirmation_sent_at: "2021-09-08T11:08:06.793257Z",
        confirmed_at: "2021-09-08T11:09:24.284171Z",
        recovery_sent_at: "2024-02-04T09:33:53.383988Z",
        last_sign_in_at: "2024-04-25T09:11:43.634259122Z",
        app_metadata: { provider: "email" },
        user_metadata: {},
        identities: [
          {
            identity_id: "6b8dcf5b-f068-401b-95ae-ddd93d771b74",
            id: "bdefac81-2bd1-44d1-b5ed-7abedb96ccce",
            user_id: "bdefac81-2bd1-44d1-b5ed-7abedb96ccce",
            identity_data: {
              email: "info@refine.dev",
              sub: "bdefac81-2bd1-44d1-b5ed-7abedb96ccce",
            },
            provider: "email",
            last_sign_in_at: "2022-11-25T00:00:00Z",
            created_at: "2022-11-25T00:00:00Z",
            updated_at: "2022-11-25T00:00:00Z",
            email: "info@refine.dev",
          },
        ],
        created_at: "2021-09-08T11:08:06.789274Z",
        updated_at: "2024-04-25T09:11:43.636138Z",
        is_anonymous: false,
      },
    },
    [
      "Date",
      "Thu, 25 Apr 2024 09:11:43 GMT",
      "Content-Type",
      "application/json",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "879d35106bb851ad-IST",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Origin",
      "*",
      "Set-Cookie",
      "sb-access-token=eyJhbGciOiJIUzI1NiIsImtpZCI6IldGWnFuOWt6bnBJZTIvL2wiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzE0MDM5OTAzLCJpYXQiOjE3MTQwMzYzMDMsImlzcyI6Imh0dHBzOi8vaXdkZnp2ZnFidG9rcWV0bWJtYnAuc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6ImJkZWZhYzgxLTJiZDEtNDRkMS1iNWVkLTdhYmVkYjk2Y2NjZSIsImVtYWlsIjoiaW5mb0ByZWZpbmUuZGV2IiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCJ9LCJ1c2VyX21ldGFkYXRhIjp7fSwicm9sZSI6ImF1dGhlbnRpY2F0ZWQiLCJhYWwiOiJhYWwxIiwiYW1yIjpbeyJtZXRob2QiOiJwYXNzd29yZCIsInRpbWVzdGFtcCI6MTcxNDAzNjMwM31dLCJzZXNzaW9uX2lkIjoiNzZlZGVjZmItY2NkMS00OTVlLWIxZDAtOGJjMTZjY2QxMWIyIiwiaXNfYW5vbnltb3VzIjpmYWxzZX0.h1ujlkSBF2ffMtawITfk1e55ekrQBIHDe8Q9AHr9hkI; Path=/; Expires=Fri, 26 Apr 2024 09:11:43 GMT; Max-Age=86400; HttpOnly; Secure",
      "Strict-Transport-Security",
      "max-age=15552000; includeSubDomains",
      "Vary",
      "Accept-Encoding, Origin",
      "Via",
      "kong/2.8.1",
      "sb-gateway-version",
      "1",
      "Set-Cookie",
      "sb-refresh-token=FsqYSQlJiUAHRzFTlhyBAw; Path=/; Expires=Fri, 26 Apr 2024 09:11:43 GMT; Max-Age=86400; HttpOnly; Secure",
      "x-kong-proxy-latency",
      "0",
      "x-kong-upstream-latency",
      "96",
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400',
    ],
  );

nock("https://iwdfzvfqbtokqetmbmbp.supabase.co:443", {
  encodedQueryParams: true,
})
  .patch("/rest/v1/posts", {
    title: "test",
    categoryId: 5,
    content: "test content",
  })
  .query({ id: "eq.1", select: "%2A" })
  .reply(
    200,
    [
      {
        id: 1,
        title: "test",
        slug: "61a31089-c85d-48a0-a4be-d5dce5c96b6a",
        createdAt: "2024-04-24T13:20:10.200327+00:00",
        content: "test content",
        categoryId: 5,
        images: null,
      },
    ],
    [
      "Date",
      "Thu, 25 Apr 2024 09:11:43 GMT",
      "Content-Type",
      "application/json; charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "Content-Range",
      "0-0/*",
      "CF-Ray",
      "879d3512cb5d515f-IST",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Origin",
      "*",
      "Strict-Transport-Security",
      "max-age=15552000; includeSubDomains",
      "Vary",
      "Accept-Encoding",
      "Via",
      "kong/2.8.1",
      "content-profile",
      "public",
      "sb-gateway-version",
      "1",
      "x-kong-proxy-latency",
      "3",
      "x-kong-upstream-latency",
      "5",
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400',
    ],
  );

nock("https://iwdfzvfqbtokqetmbmbp.supabase.co:443", {
  encodedQueryParams: true,
})
  .patch("/rest/v1/posts", { title: "IPhone 16" })
  .query({ id: "eq.1", select: "%2A" })
  .reply(
    200,
    [
      {
        id: 1,
        title: "IPhone 16",
        slug: "61a31089-c85d-48a0-a4be-d5dce5c96b6a",
        createdAt: "2024-04-24T13:20:10.200327+00:00",
        content: "test content",
        categoryId: 5,
        images: null,
      },
    ],
    [
      "Date",
      "Thu, 25 Apr 2024 09:11:44 GMT",
      "Content-Type",
      "application/json; charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "Content-Range",
      "0-0/*",
      "CF-Ray",
      "879d35145e6f720c-IST",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Origin",
      "*",
      "Strict-Transport-Security",
      "max-age=15552000; includeSubDomains",
      "Vary",
      "Accept-Encoding",
      "Via",
      "kong/2.8.1",
      "content-profile",
      "public",
      "sb-gateway-version",
      "1",
      "x-kong-proxy-latency",
      "0",
      "x-kong-upstream-latency",
      "5",
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400',
    ],
  );

nock("https://iwdfzvfqbtokqetmbmbp.supabase.co:443", {
  encodedQueryParams: true,
})
  .patch("/rest/v1/posts", { title: "IPhone 16" })
  .query({ id: "eq.1", select: "%2A" })
  .reply(
    406,
    {
      code: "PGRST106",
      details: null,
      hint: null,
      message: "The schema must be one of the following: public, storage",
    },
    [
      "Date",
      "Thu, 25 Apr 2024 09:11:44 GMT",
      "Content-Type",
      "application/json; charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "879d3515fad66966-IST",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Origin",
      "*",
      "Strict-Transport-Security",
      "max-age=15552000; includeSubDomains",
      "Via",
      "kong/2.8.1",
      "sb-gateway-version",
      "1",
      "x-kong-proxy-latency",
      "3",
      "x-kong-upstream-latency",
      "1",
      "Vary",
      "Accept-Encoding",
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400',
    ],
  );

nock("https://iwdfzvfqbtokqetmbmbp.supabase.co:443", {
  encodedQueryParams: true,
})
  .post("/auth/v1/logout")
  .query({ scope: "global" })
  .reply(204, "", [
    "Date",
    "Thu, 25 Apr 2024 09:11:44 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "879d3518ffc1515a-IST",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Origin",
    "*",
    "Set-Cookie",
    "sb-access-token=; Path=/; Expires=Wed, 24 Apr 2024 23:11:44 GMT; Max-Age=0; HttpOnly; Secure",
    "Strict-Transport-Security",
    "max-age=15552000; includeSubDomains",
    "Vary",
    "Origin, Accept-Encoding",
    "Via",
    "kong/2.8.1",
    "sb-gateway-version",
    "1",
    "Set-Cookie",
    "sb-refresh-token=; Path=/; Expires=Wed, 24 Apr 2024 23:11:44 GMT; Max-Age=0; HttpOnly; Secure",
    "x-kong-proxy-latency",
    "1",
    "x-kong-upstream-latency",
    "5",
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400',
  ]);
