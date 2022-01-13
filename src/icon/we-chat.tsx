import React from 'react'
import { Path } from 'react-native-svg'

import { genIcon } from './helper/gen'

const IconWeChatOutline = genIcon({
  render: color => {
    return (
      <Path
        fill={color}
        fillRule="nonzero"
        d="M8.816 3.25c3.605 0 6.78 2.173 7.526 5.247 3.086.412 5.608 2.84 5.608 5.751 0 1.488-.757 2.89-2.025 4.045l-.249.216.352 1.295a.75.75 0 0 1-1.013.889l-.087-.044-1.571-.911-.754.178a5.502 5.502 0 0 1-1.187.146c-2.69 0-4.995-1.433-5.988-3.512l.082-.009c-.077.01-.157.017-.242.022l-.35.008h-.102c-.686 0-1.24-.071-1.943-.247l-.353-.094-2.16 1.117a.75.75 0 0 1-1.082-.805l.025-.096.529-1.606-.03-.024c-1.582-1.288-2.47-2.856-2.546-4.658l-.006-.26c0-3.75 3.39-6.648 7.566-6.648zm6.6 6.686c-2.812 0-5.01 1.94-5.01 4.312 0 2.374 2.198 4.314 5.01 4.314.2 0 .413-.023.67-.071l.265-.055.881-.207.092-.02a.75.75 0 0 1 .432.037l.1.048.247.143-.013-.051-.01-.06-.004-.044-.002-.055.002-.05.005-.047.019-.095.031-.091.032-.068.057-.09.069-.081.082-.073c1.236-.927 1.987-2.053 2.071-3.174l.008-.21c0-2.314-2.325-4.312-5.034-4.312zm-6.6-5.186C5.42 4.75 2.75 7.034 2.75 9.898c0 1.563.808 2.914 2.4 4.062a.75.75 0 0 1 .3.739l-.026.104-.121.368.792-.41a.75.75 0 0 1 .443-.076l.112.023c.814.239 1.325.34 1.932.36l.234.004.153-.002a5.35 5.35 0 0 1-.063-.822c0-3.05 2.567-5.498 5.863-5.784-.742-2.16-3.167-3.714-5.953-3.714zm4.727 7.238c.505 0 .865.319.865.712 0 .32-.36.64-.865.64-.335 0-.671-.32-.671-.64 0-.393.336-.712.671-.712zm3.769 0c.48 0 .84.319.84.712 0 .32-.36.64-.84.64-.36 0-.672-.32-.672-.64 0-.393.312-.712.672-.712zM11.336 6.95c.528 0 .864.318.864.86 0 .516-.336.86-.864.86-.504 0-.984-.344-.984-.86 0-.542.48-.86.984-.86zm-4.752 0c.48 0 .864.318.864.86 0 .516-.384.86-.864.86-.504 0-1.032-.344-1.032-.86 0-.542.528-.86 1.032-.86z"
      />
    )
  },
})

export default IconWeChatOutline
