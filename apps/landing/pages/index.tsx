import { Box } from '@wowjob/atom'
import { HomePage } from '@wowjob/template'
import type { TBanner, TLink, TSkill } from '@wowjob/type'

const topLinkList: TLink[] = [
  {
    label: 'Owner',
    href: '#owner',
    color: 'primary',
  },
  {
    label: 'Skill',
    href: '#skill',
    color: 'primary',
  },
]

const footerLinkList: TLink[] = [
  {
    label: 'Why TrustUs',
    href: '#why-trust-us',
    color: 'primary',
    size: 'xs',
  },
  {
    label: 'Standard',
    href: '#standard',
    color: 'primary',
    size: 'xs',
  },
  {
    label: 'Complaints about a member',
    href: '#complaints-about-a-member',
    color: 'primary',
    size: 'xs',
  },
  {
    label: 'FAQ',
    href: '#faq',
    color: 'primary',
    size: 'xs',
  },
  {
    label: 'Secure contacts',
    href: '#secure-contacts',
    color: 'primary',
    size: 'xs',
  },
  {
    label: 'Member Benefits',
    href: '#member-benefits',
    color: 'primary',
    size: 'xs',
  },
  {
    label: 'Terms of use',
    href: '#terms-of-use',
    color: 'primary',
    size: 'xs',
  },
  {
    label: 'Partnerships',
    href: '#partnerships',
    color: 'primary',
    size: 'xs',
  },
  {
    label: 'Privacy notice',
    href: '#privacy-notice',
    color: 'primary',
    size: 'xs',
  },
  {
    label: 'Sitemap',
    href: '#sitemap',
    color: 'primary',
    size: 'xs',
  },
  {
    label: 'Contact us',
    href: '#contact-us',
    color: 'primary',
    size: 'xs',
  },
  {
    label: 'Gender pay reports',
    href: '#gender-pay-reports',
    color: 'primary',
    size: 'xs',
  },
  {
    label: 'Guaranteed T&Cs',
    href: '#guaranteed-tcs',
    color: 'primary',
    size: 'xs',
  },
  {
    label: 'Review Guidelines',
    href: '#review-guidelines',
    color: 'primary',
    size: 'xs',
  },
]

const popularCategorySkillList: TSkill[] = [
  { skill: 'Pilot', icon: 'airplane' },
  { skill: 'Writer', icon: 'pencil7' },
  { skill: 'Photographer', icon: 'image' },
  { skill: 'Actor', icon: 'clapboard-play' },
  { skill: 'Explorer', icon: 'location3' },
  { skill: 'Firefighter', icon: 'fire' },
]

const footerIconList: TIconButton[] = [
  { skill: 'Pilot', icon: 'airplane' },
  { skill: 'Writer', icon: 'pencil7' },
  { skill: 'Photographer', icon: 'image' },
  { skill: 'Actor', icon: 'clapboard-play' },
  { skill: 'Explorer', icon: 'location3' },
  { skill: 'Firefighter', icon: 'fire' },
]

const bannerInfo: TBanner = {
  title: 'Good projects, guaranteed',
  message: 'Get covered when you book with MyWebsite.',
  logo: 'https://picsum.photos/id/63/200/300',
  cta: {
    color: 'background',
    bgColor: 'primary',
    label: 'Find out more',
  },
}

const homepageCardList: TBanner[] = [
  {
    title: 'Leave a Review',
    message:
      'Have you completed a project recently? Let your tradesperson know how they did.',
    logo: 'https://picsum.photos/640/480?random=1',
    cta: {
      color: 'background',
      bgColor: 'danger',
      label: 'Leave a review',
    },
  },
  {
    title: 'Tradesperson sign up',
    message:
      'Over 1 million homeowners visit our site looking for approved and quality tradespeople like you.',
    logo: 'https://picsum.photos/640/480?random=2',
    cta: {
      color: 'background',
      bgColor: 'danger',
      label: 'Join today',
    },
  },
  {
    title: 'Request a quote',
    message:
      'Tell us what you’re looking for and we’ll pass your request on to three approved tradespeople.',
    logo: 'https://picsum.photos/640/480?random=3',
    cta: {
      color: 'background',
      bgColor: 'danger',
      label: 'Request a quote',
    },
  },
]

const LandingPage = () => {
  return (
    <Box vertical>
      <HomePage
        topHeaderLinkList={topLinkList}
        bannerInfo={bannerInfo}
        popularCategoryList={popularCategorySkillList}
        footerLinkList={footerLinkList}
        footerIconList={footerIconList}
        homepageCardList={homepageCardList}
      />
    </Box>
  )
}

export default LandingPage
