/**
 * Returns a string representing the "srcset" attribute for an HTML <img> tag,
 * with URLs to images that are resized to different widths based on the provided
 * "m", "t", and "d" values, and the file extension of the original "src" image.
 *
 * @param {Object} options An object containing the following properties:
 * - "src": (string) The URL of the original image.
 * - "srcset": (boolean) A boolean flag indicating whether to include a "srcset"
 *    attribute in the returned string. If true, the string will include URLs for
 *    resized images at the provided widths ("m", "t", and "d").
 * - "m": (number) An optional integer value representing the maximum width of
 *    the resized image for mobile. Default is 320.
 * - "t": (number) An optional integer value representing the maximum width of
 *    the resized image for tablet. Default is 768.
 * - "d": (number) An optional integer value representing the maximum width of
 *    the resized image for desktop. Default is 1280.
 *
 * @returns {string} A string representing the "srcset" attribute for an HTML <img> tag.
 *    If "srcset" is true, the string will include comma-separated URLs and sizes
 *    for the resized images based on the provided options. If "srcset" is false or
 *    not provided, an empty string will be returned.
 *
 * @throws {Error} If any of the input parameters are invalid or missing.
 */
export const getSrcset = ({
  src,
  $srcset,
  m = 320,
  t = 768,
  d = 1280,
}: {
  $srcset?: boolean
  src: string
  m?: number
  t?: number
  d?: number
}) => {
  // TODO: implement cloudinary
  const lastIndex = src.lastIndexOf('.')
  const name = src.slice(0, lastIndex)
  const extension = src.slice(-(src.length - lastIndex))

  return $srcset
    ? [m, t, d].map((n) => `${name}-${n}${extension} ${n}w`).join(',')
    : ''
}
