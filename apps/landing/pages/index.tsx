import { Box } from '@wowjob/atom'
import { HomePage } from '@wowjob/template'

export const getServerSideProps = () => {
  return {
    props: {},
  }
}

import {
  topLinkList,
  bannerInfo,
  footerIconList,
  footerLinkList,
  homepageCardList,
  popularCategorySkillList,
} from '../data'
import Head from 'next/head'

const LandingPage = ({}) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

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
    </>
  )
}

export default LandingPage
