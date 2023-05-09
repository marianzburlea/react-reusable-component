import { Box } from '@wowjob/atom'
import {
  CardList,
  Footer,
  GuaranteeedBanner,
  Hero,
  PopularCategory,
  TopHeader,
} from '@wowjob/organism'
import { THeaderType } from './home-page.type'

export const HomePage = ({
  topHeaderLinkList,
  bannerInfo,
  popularCategoryList,
  footerLinkList,
  footerIconList,
  homepageCardList,
}: THeaderType) => {
  const showCardList = Array.isArray(homepageCardList)

  return (
    <Box vertical align>
      <Box padding="xxl" />

      <Hero />

      <Box vertical gap="l" align padding="l">
        <PopularCategory list={popularCategoryList} />

        {bannerInfo?.logo && <GuaranteeedBanner info={bannerInfo} />}

        {showCardList && <CardList list={homepageCardList} />}
      </Box>

      <TopHeader linkList={topHeaderLinkList} />
      <Footer linkList={footerLinkList} iconList={footerIconList} />
    </Box>
  )
}
