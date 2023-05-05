import { Box } from '../box'
import { Text } from '../text'
import * as S from './input.style'
import type * as T from './input.type'

const Input = ({
  describedBy,
  label,
  size,
  field,
  form,
  required,
  placeholder,
  type,
}: T.Input) => {
  const { [field?.name]: errorMessage }: any = form?.errors || {}
  return (
    <Box vertical gap="xs">
      <S.Input
        required={required}
        placeholder={placeholder}
        type={type}
        aria-labelledby={label}
        aria-describedby={describedBy}
        $size={size}
        {...field}
      />

      {errorMessage && (
        <Box fill="full" light color="danger" padding="m" size="s">
          <Text color="danger">{errorMessage}</Text>
        </Box>
      )}
    </Box>
  )
}

export { Input }
