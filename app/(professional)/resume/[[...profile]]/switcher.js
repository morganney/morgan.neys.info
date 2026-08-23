'use client'

import { useRouter } from 'next/navigation'

export default function DevProfileSwitcher({ activeSlug, defaultSlug, options }) {
  const router = useRouter()

  function handleChange(event) {
    const nextSlug = event.target.value
    const nextPath = nextSlug === defaultSlug ? '/resume' : `/resume/${nextSlug}`
    router.push(nextPath)
  }

  return (
    <p>
      <label htmlFor="dev-profile-switcher">Dev profile: </label>
      <select id="dev-profile-switcher" value={activeSlug} onChange={handleChange}>
        {options.map(option => (
          <option key={option.slug} value={option.slug}>
            {option.label}
          </option>
        ))}
      </select>
    </p>
  )
}
