# Auth System — Feature Spec

## Overview
Email + password authentication using Clerk (`@clerk/expo`), with custom React Native UI matching the Recurly brand design.

## Screens

### Sign In (`/(auth)/sign-in`)
- Email field, password field
- "Sign in" primary button (accent color, rounded)
- "New to Recurly? Create an account" link → navigates to sign-up
- MFA email-code verification step (if `needs_client_trust`)
- On success → redirected to `/(tab)`

### Sign Up (`/(auth)/sign-up`)
- Email, password, confirm password fields
- "Create account" primary button
- Clerk captcha placeholder (`nativeID="clerk-captcha"`)
- "Already have an account? Sign in" link
- Email verification step: 6-digit OTP after submit
- On verified → redirected to `/(tab)`

## Auth Guard
- `app/(auth)/_layout.tsx` uses `useAuth()` — redirects signed-in users to `/(tab)`
- Root `app/_layout.tsx` wraps the entire app with `<ClerkProvider>`

## Environment
```
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
```
Add this to your `.env` file. Obtain the key from the Clerk Dashboard → API keys.

## Design
Uses existing `global.css` auth component classes:
- `auth-safe-area`, `auth-content`, `auth-brand-block`
- `auth-logo-mark` — square accent-color badge with "R"
- `auth-wordmark` + `auth-wordmark-sub`
- `auth-card` — rounded card container
- `auth-form`, `auth-field`, `auth-label`, `auth-input`, `auth-input-error`, `auth-error`
- `auth-button`, `auth-button-disabled`, `auth-button-text`
- `auth-secondary-button`, `auth-secondary-button-text`
- `auth-link-row`, `auth-link-copy`, `auth-link`
