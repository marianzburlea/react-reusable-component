import type { TBanner, TIconButton, TLink, TSkill } from '@wowjob/type'

export type THeaderType = {
  topHeaderLinkList: TLink[]
  footerLinkList: TLink[]
  bannerInfo?: TBanner
  popularCategoryList: TSkill[]
  footerIconList: TIconButton[]
  homepageCardList?: TBanner[]
}
