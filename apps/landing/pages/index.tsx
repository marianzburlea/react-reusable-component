import { Box } from '@wowjob/atom'
import { HomePage } from '@wowjob/template'
import {
  topLinkList,
  bannerInfo,
  footerIconList,
  footerLinkList,
  homepageCardList,
  popularCategorySkillList,
} from '../data'

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
