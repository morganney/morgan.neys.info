import { browserProfile } from '../profiles/browser'
import { saasProfile } from '../profiles/saas'
import { PROFILE_DEFAULT_KEY, PROFILE_IDENTITY } from '../profiles/shared'
import DevProfileSwitcher from './switcher'

const PROFILE_ROUTES = [
  { slug: '9f3a7c1e', profile: saasProfile },
  { slug: '2b8d4e6a', profile: browserProfile },
]

const profileMap = Object.fromEntries(
  PROFILE_ROUTES.map(({ profile }) => [profile.key, profile])
)

const profileBySlug = Object.fromEntries(
  PROFILE_ROUTES.map(({ slug, profile }) => [slug, profile])
)

const slugByProfileKey = Object.fromEntries(
  PROFILE_ROUTES.map(({ slug, profile }) => [profile.key, slug])
)

const defaultProfileSlug =
  slugByProfileKey[PROFILE_DEFAULT_KEY] ?? PROFILE_ROUTES[0]?.slug ?? '9f3a7c1e'

const profileOptions = PROFILE_ROUTES.map(({ slug, profile }) => ({
  slug,
  label: profile.label,
}))

const SECTION_TITLES = {
  summary: 'Summary',
  skills: 'Skills',
  experience: 'Experience',
  oss: 'Recent OSS Projects',
  education: 'Education',
  awards: 'Awards',
}

function resolveProfileSlug(profileSegments) {
  const slug = Array.isArray(profileSegments) ? profileSegments[0] : undefined
  return slug && profileBySlug[slug] ? slug : defaultProfileSlug
}

function buildDynamicResumeUrl(profileSlug) {
  return profileSlug === defaultProfileSlug ? '/resume' : `/resume/${profileSlug}`
}

function RichBullet({ bullet }) {
  if (typeof bullet === 'string') {
    return <>{bullet}</>
  }

  const before = bullet.before ?? ''
  const after = bullet.after ?? ''

  if (!bullet.link) {
    return <>{before + after}</>
  }

  return (
    <>
      {before}
      <a target="_blank" rel="noopener noreferrer" href={bullet.link.href}>
        {bullet.link.label}
      </a>
      {after}
    </>
  )
}

function SkillsSection({ skills }) {
  return (
    <dl>
      {skills.map(group => (
        <div key={group.title}>
          <dt>{group.title}</dt>
          <dd>
            <ul>
              {group.items.map(item => (
                <li key={`${group.title}-${item.label}`}>
                  <strong>{item.label}:</strong> {item.value}
                </li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  )
}

function ExperienceSection({ experience }) {
  return (
    <div>
      {experience.map(role => (
        <article key={role.title}>
          <h4>{role.title}</h4>
          <h5>{role.date}</h5>
          <ul>
            {role.bullets.map((bullet, index) => (
              <li key={`${role.title}-${index}`}>
                <RichBullet bullet={bullet} />
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}

function ProjectsSection({ projects }) {
  return (
    <div>
      {projects.map(project => (
        <article key={project.title}>
          <h4>{project.title}</h4>
          <h5>{project.date}</h5>
          <ul>
            {project.bullets.map((bullet, index) => (
              <li key={`${project.title}-${index}`}>
                <RichBullet bullet={bullet} />
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}

function EducationSection({ education }) {
  return (
    <div>
      {education.map(entry => (
        <article key={entry.title}>
          <h4>{entry.title}</h4>
          <h5>{entry.date}</h5>
          <p>{entry.detail}</p>
        </article>
      ))}
    </div>
  )
}

function AwardsSection({ awards }) {
  return (
    <div>
      {awards.map((award, index) => (
        <p key={`${award.link?.href ?? 'award'}-${index}`}>
          <RichBullet bullet={award} />
        </p>
      ))}
    </div>
  )
}

export const dynamicParams = false

export function generateStaticParams() {
  return [{ profile: [] }, ...PROFILE_ROUTES.map(route => ({ profile: [route.slug] }))]
}

export default async function ResumePage({ params }) {
  const resolvedParams = await params
  const profileSlug = resolveProfileSlug(resolvedParams?.profile)
  const profile = profileBySlug[profileSlug] ?? profileMap[PROFILE_DEFAULT_KEY]
  const dynamicResumeUrl = buildDynamicResumeUrl(profileSlug)

  return (
    <>
      <section>
        <header>
          <h1>
            <a target="_blank" rel="noopener noreferrer" href={PROFILE_IDENTITY.website}>
              {PROFILE_IDENTITY.name}
            </a>
          </h1>
          <h2>
            <a target="_blank" rel="noopener noreferrer" href={PROFILE_IDENTITY.linkedin}>
              <span>{profile.title}</span>
              <span>{profile.tagline}</span>
            </a>
          </h2>
          <p>
            <a target="_blank" rel="noopener noreferrer" href={dynamicResumeUrl}>
              morgan.neys.info/resume
            </a>
          </p>
          {process.env.NODE_ENV !== 'production' ? (
            <DevProfileSwitcher
              activeSlug={profileSlug}
              defaultSlug={defaultProfileSlug}
              options={profileOptions}
            />
          ) : null}
        </header>
        <div>
          <h3>{PROFILE_IDENTITY.name}</h3>
          <address>
            <p>{PROFILE_IDENTITY.location}</p>
            <p>
              <a href={`mailto:${PROFILE_IDENTITY.email}`}>{PROFILE_IDENTITY.email}</a>
            </p>
            <p>
              <a href={`tel:${PROFILE_IDENTITY.phoneHref}`}>
                {PROFILE_IDENTITY.phoneLabel}
              </a>
            </p>
          </address>
          <ul>
            {PROFILE_IDENTITY.profileLinks.map(link => (
              <li key={link}>
                <a target="_blank" rel="noopener noreferrer" href={link}>
                  {link.replace(/^https?:\/\//, '')}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {profile.sectionOrder.map(sectionKey => {
        const sectionTitle = SECTION_TITLES[sectionKey]
        const sectionData = profile.sections[sectionKey]

        if (!sectionTitle || !sectionData) {
          return null
        }

        return (
          <section key={sectionKey}>
            <h3>{sectionTitle}</h3>
            {sectionKey === 'summary' ? <p>{sectionData}</p> : null}
            {sectionKey === 'skills' ? <SkillsSection skills={sectionData} /> : null}
            {sectionKey === 'experience' ? (
              <ExperienceSection experience={sectionData} />
            ) : null}
            {sectionKey === 'oss' ? <ProjectsSection projects={sectionData} /> : null}
            {sectionKey === 'education' ? (
              <EducationSection education={sectionData} />
            ) : null}
            {sectionKey === 'awards' ? <AwardsSection awards={sectionData} /> : null}
          </section>
        )
      })}
    </>
  )
}
