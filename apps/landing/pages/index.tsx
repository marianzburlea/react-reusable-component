import { Aspect, Button, Icon } from '@wowjob/atom'

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

        <Button radius="normal" size="xs">
          laalla
        </Button>
        <Button radius="pill" size="l">
          tra la la
        </Button>
        <Button radius="normal" size="giant">
          {' '}
          uuuu uu
        </Button>
        <Button radius="pill" size="massive">
          oo oo OO
        </Button>
        <Button size="huge">rectangle</Button>
      </Aspect>

      <div></div>
    </div>
  )
}

export default LandingPage
