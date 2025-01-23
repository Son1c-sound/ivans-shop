'use client'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

const postKey = process.env.NEXT_PUBLIC_POSTHOG_KEY
const publicKey = process.env.NEXT_PUBLIC_POSTHOG_HOST

if (typeof window !== 'undefined') {
  posthog.init(postKey, {
    api_host: publicKey,
    person_profiles: 'identified_only', 
  })
}
export function CSPostHogProvider({ children }) {
    return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}