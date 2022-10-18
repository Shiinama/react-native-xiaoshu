/**
 * title: 分割线
 * desc: Cell 支持自定义分割线左右边距。
 */

import React from 'react'

import { Cell } from '@fruits-chain/react-native-xiaoshu'

const CellDivider: React.FC = () => {
  return (
    <>
      <Cell.Group title="默认">
        <Cell title="标题" />
        <Cell title="标题" />
        <Cell title="标题" />
        <Cell title="标题" divider={false} />
      </Cell.Group>

      <Cell.Group title="左侧无">
        <Cell title="标题" value="左侧无" dividerLeftGap={0} />
        <Cell title="标题" value="左侧无" dividerLeftGap={0} />
        <Cell title="标题" value="左侧无" dividerLeftGap={0} divider={false} />
      </Cell.Group>

      <Cell.Group title="右侧无">
        <Cell title="标题" value="右侧无" dividerRightGap={0} />
        <Cell title="标题" value="右侧无" dividerRightGap={0} />
        <Cell title="标题" value="右侧无" dividerRightGap={0} />
        <Cell title="标题" value="右侧无" dividerRightGap={0} divider={false} />
      </Cell.Group>

      <Cell.Group title="右右皆无">
        <Cell
          title="标题"
          value="右右皆无"
          dividerLeftGap={0}
          dividerRightGap={0}
        />
        <Cell
          title="标题"
          value="右右皆无"
          dividerLeftGap={0}
          dividerRightGap={0}
        />
        <Cell
          title="标题"
          value="右右皆无"
          dividerLeftGap={0}
          dividerRightGap={0}
        />
        <Cell
          title="标题"
          value="右右皆无"
          dividerLeftGap={0}
          dividerRightGap={0}
          divider={false}
        />
      </Cell.Group>
    </>
  )
}

export default CellDivider
