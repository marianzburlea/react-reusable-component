import { Box } from '@wowjob/atom'
import {
  CardList,
  Footer,
  GuaranteeedBanner,
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
    <Box vertical gap="l" align>
      <Box padding="huge" />
      <TopHeader linkList={topHeaderLinkList} />

      <PopularCategory list={popularCategoryList} />

      {bannerInfo?.logo && <GuaranteeedBanner info={bannerInfo} />}

      {showCardList && <CardList list={homepageCardList} />}

      <Footer linkList={footerLinkList} iconList={footerIconList} />
    </Box>
  )
}
