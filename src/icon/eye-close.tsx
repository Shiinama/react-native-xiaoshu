import React from 'react'
import { Path } from 'react-native-svg'

import { genIcon } from './helper/gen'

const IconEyeCloseOutline = genIcon({
  render: color => {
    return (
      <Path
        fill={color}
        fillRule="nonzero"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.397 8.54a23.457 23.457 0 0 1 2.311 2.204l.09.098.086.096.32.366.207.246.17.213a.75.75 0 0 1 .06.826l-.062.094-.235.285-.298.344-.341.376a23.323 23.323 0 0 1-2.312 2.174c-2.462 2.012-5.026 3.23-7.596 3.23a8.32 8.32 0 0 1-1.249-.095l.725-1.426a6.6 6.6 0 0 0 .524.021c2.158 0 4.428-1.078 6.647-2.891.79-.647 1.517-1.34 2.162-2.034l.164-.178.153-.171.088-.101-.091-.105-.318-.354a21.972 21.972 0 0 0-2.162-2.064 16.558 16.558 0 0 0-2.33-1.635l.681-1.34c.879.497 1.749 1.11 2.606 1.82zm-7.6-3.277a8.48 8.48 0 0 1 1.716.179l-.71 1.398a6.752 6.752 0 0 0-1.006-.077c-2.148 0-4.333 1.086-6.422 2.918a19.839 19.839 0 0 0-2.02 2.056l-.15.18-.142.173-.103.127.1.123.292.347a19.69 19.69 0 0 0 2.02 2.027 14.565 14.565 0 0 0 2.523 1.782l-.682 1.34c-.962-.523-1.905-1.193-2.823-1.987a21.175 21.175 0 0 1-2.173-2.182l-.084-.097-.08-.095-.297-.362-.133-.168-.217-.288a.75.75 0 0 1-.063-.767l.06-.101.084-.116.266-.346.296-.367.164-.195a21.324 21.324 0 0 1 2.173-2.212c2.337-2.049 4.833-3.29 7.411-3.29zm4.001 6.973a3.754 3.754 0 0 1-3.72 3.754l.855-1.682a2.254 2.254 0 0 0 1.309-2.574l.855-1.683c.441.615.701 1.37.701 2.185zm-3.832-3.753l-.868 1.707a2.254 2.254 0 0 0-1.264 2.489l-.867 1.707a3.754 3.754 0 0 1 3-5.902zM16.392 3.64a.75.75 0 0 1 .369.915l-.04.094-8.056 15.846a.75.75 0 0 1-1.377-.586l.04-.094 8.056-15.846a.75.75 0 0 1 1.008-.329z"
      />
    )
  },
})

export default IconEyeCloseOutline