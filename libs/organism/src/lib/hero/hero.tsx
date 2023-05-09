import { Box, Button, Input, Modal, Text } from '@wowjob/atom'
import { InputGroup } from '@wowjob/molecule'
import { useState } from 'react'
import { Form, Formik } from 'formik'

export const Hero = () => {
  const [show, toggleModal] = useState(false)

  const closeModal = () => toggleModal(false)

  const showModal = () => toggleModal(true)

  return (
    <Box
      bgImage="https://picsum.photos/id/525/1280/425"
      width="100%"
      height={425}
      justify
    >
      <Box width={1280} justify="end" padding="l" align>
        <Box
          bgColor="primary"
          radius="xxs"
          padding="l"
          height="fit-content"
          vertical
          gap="xs"
        >
          <Text as="h2" color="background">
            Find your local guaranteed supplier
          </Text>

          <Text as="h3" color="background" size="xxs">
            Recommendations you can rely on
          </Text>

          <InputGroup click={showModal} />

          <Box gap="xxs">
            <Text color="background">Or</Text>

            <Text as="a" href="#look-up" color="background">
              look up a member by name
            </Text>
          </Box>
        </Box>
      </Box>

      <Modal show={show} closeModal={closeModal}>
        <Formik initialValues={{ name: '' }} onSubmit={closeModal}>
          {() => (
            <Form>
              <Box vertical gap="l" align padding="l">
                <Input
                  color="danger"
                  name="search"
                  placeholder="Trade (e.g. Singer)"
                  padding="l"
                  size="l"
                />

                <Button
                  bgColor="primary"
                  color="background"
                  padding="l"
                  type="submit"
                  radius="pill"
                  click={closeModal}
                >
                  Search
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Modal>
    </Box>
  )
}
