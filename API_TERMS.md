# PromoClock API Terms of Use

Last updated: October 6, 2026

These terms apply to the PromoClock API, `GET https://promoclock.co/api/status`, which is the only public endpoint. By calling the API you agree to them. The [LICENSE](LICENSE) covers the source code in this repository. These terms cover use of the API.

## 1. Free for non-commercial use

You may use the API for free in personal, educational and non-commercial open-source projects. You don't need a key or an account.

## 2. Credit PromoClock

Wherever you show data from the API, credit PromoClock and link to https://promoclock.co. For example:

> Peak-hours data: [PromoClock](https://promoclock.co)

Some places have no room for a credit, such as a status line, a menu bar badge or a shell prompt. In that case, put the credit in your README and in your About screen, settings or `--help` output.

## 3. Commercial use needs written permission

Ask before you use the API in or for a commercial product. Commercial use includes:

- paid apps, extensions, plugins or subscriptions, and features behind a paywall
- free products that a company offers to sell or promote its paid service
- reselling or redistributing the data

To ask for permission, contact [@onursendere on X](https://x.com/onursendere).

## 4. Identify your app

Send a `User-Agent` header with your app's name, its version and a link to the project:

```
User-Agent: my-app/1.2 (+https://github.com/me/my-app)
```

## 5. Don't poll too often

- Ask at most once a minute per device. The `nextChange` and `minutesUntilChange` fields tell you when the status will flip, so you can schedule the next request instead of polling.
- The hard limit is 60 requests per minute per IP address. Above it, the API answers `429 Too Many Requests` with a `Retry-After` header.

## 6. Represent the data accurately

- PromoClock is independent and not affiliated with Anthropic. Don't present the data as official Anthropic information.
- Don't suggest that PromoClock endorses your project.

## 7. Availability and changes

- The API is provided as is, on a best-effort basis, with no guarantee of uptime or accuracy.
- Field names and types stay stable, and a contract test guards them. Text values such as `label` and `note` may change.
- These terms may change. The date at the top shows the current version, and the commit history shows every change.

## 8. Enforcement

We may rate-limit or block clients that ignore these terms or put load on the service. We'll normally contact you first, for example with an issue in your repository.

## Already using the API?

If you integrated before October 6, 2026, please add the credit (section 2) and a `User-Agent` (section 4) in your next release. If your use is commercial, please get in touch.

## Get listed

If your project follows these terms, open a pull request to add it to the [Used by](README.md#used-by) list.
