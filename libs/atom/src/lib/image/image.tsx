import type { TImage } from './image.type'
import { SImage } from './image.style'
import { getSrcset } from '@wowjob/util'

/**
 * This functional component represents an HTML <img> tag that can be customized
 * with various props.
 *
 * @param {TImage} props An object that contains the following properties:
 * - "src": the URL of the image.
 * - "srcset" (optional): a boolean value that specifies whether to generate a
 *   "srcset" attribute for the image. If true, the component generates a "srcset"
 *   attribute with URLs to resized versions of the image.
 * - "aspect" (optional): a string that represents the aspect ratio of the image.
 *   The value should be a string in the format "width:height", e.g. "16:9".
 * - "width" (optional): an integer that specifies the width of the image, in pixels.
 * - "height" (optional): an integer that specifies the height of the image, in pixels.
 * - "alt": a string that specifies the alternative text for the image.
 * - "label" (optional): a string that specifies the label for the image. If not
 *   provided, the component generates a default label based on the "alt" text.
 * - "title" (optional): a string that specifies the title for the image.
 * - "loading" (optional): a string that specifies the loading behavior of the
 *   image. Possible values are "lazy", "eager", or "auto". If not provided,
 *   the lazy default value is used.
 * - "testId" (optional): a string that specifies the data-testid for the image.
 * - "labelledBy" (optional): a string that specifies the aria-labelledby for the image.
 *
 * @returns {JSX.Element} An HTML <img> tag with the specified props.
 */
export const Image = ({
  alt,
  src,
  aspect,
  height,
  title,
  width,
  loading = 'lazy',
  srcset,
  label,
  labelledBy,
  testId,
}: TImage) => {
  const ariaLabel = label || `${alt}, optimized for different screen sizes`
  const srcSetValue = getSrcset({
    src,
    $srcset: srcset,
  })

  return (
    <SImage
      alt={alt}
      aria-label={ariaLabel}
      aria-labelledby={labelledBy}
      data-testid={testId}
      src={src}
      height={height}
      title={title}
      width={width}
      loading={loading}
      $aspect={aspect}
      $srcset={srcset}
      srcSet={srcSetValue}
    />
  )
}
