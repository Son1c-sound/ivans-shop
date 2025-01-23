'use client'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

if (typeof window !== 'undefined') {
  posthog.init('phc_n4PKYlSgGiw1EssscAr9k5BLL3uuo81W8UOmc77Zh9Z', {
    api_host: 'https://eu.i.posthog.com',
    person_profiles: 'identified_only', 
  })
}
export function CSPostHogProvider({ children }) {
    return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}