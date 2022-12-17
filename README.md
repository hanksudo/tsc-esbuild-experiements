Somehow this code behave different result on `tsc` and `esbuild`.

```bash
$ node tsc-es2015.js
abc@abc.com

$ node tsc-esnext.js
abc@abc.com

$ node esbuild-es2015.js
abc@abc.com

$ node esbuild-esnext.js
undefined
```

## Solution

- set `useDefineForClassFields` to false in tsconfig.json will solve the esbuild with esnext issue.
- [TypeScript: TSConfig Reference - useDefineForClassFields](https://www.typescriptlang.org/tsconfig/)

## Reference

- [ts playground](https://www.typescriptlang.org/play?target=99&ts=4.9.4#code/MYGwhgzhAECiB2AXAlogngWQPYBMCmIAPACoB80A3gFDS3R5KpoBc0xA3DXcFvBIgCcArsERYBACgYp0rYgEpKXOnUQALZBAB00ptAC89Ruk4qV6zVrAAHayDQIZaKcbTzTdAL5Vl0a0IAjEGRgaBs7B1cXJzl5VgA3LGQcJTM6AHkAgCs8USsoZABzeAkLCAAaIyd3X29vH2QkPAEAMzBgPGgAVQhmxz1qFWTWeCEAWwDmj1o8MbBkEFZ+AUbCznrQSBge5ux8EHoAD0QGHBh+9D2CQh2BC7RyQbph6FGJqd9Z+cXoZdWPXw8PiCERiSS6WTdXp3VyKJ4qCBCazNaJMGoqOo+IH8aBCaEGV54ADuUN2uAIEgoLwAjJUvgtWAByMABYAAARZwC0PDGjM8NWxWBAeC0ICwhQkeOaOjmC3kVCAA)
