import { Aspect, Icon } from '@wowjob/atom'

const LandingPage = () => {
  return (
    <div>
      <Aspect>
        <h1>landing page</h1>

        <Icon icon="airplane" />
        <Icon icon="album" size="l" />
        <Icon icon="file-download2" size="xl" />
        <Icon icon="arrow-right" size="xxl" />
        <Icon icon="clock4" size="xxxl" />
      </Aspect>

      <div></div>
    </div>
  )
}

export default LandingPage
