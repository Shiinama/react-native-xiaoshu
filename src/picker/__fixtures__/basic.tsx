import React from 'react'
import { ScrollView } from 'react-native'

import type { PickerOptionCascade } from '@fruits-chain/react-native-xiaoshu'
import {
  Picker,
  Button,
  CellGroup,
  Space,
} from '@fruits-chain/react-native-xiaoshu'

const columns1 = new Array(10).fill(0).map((_, index) => ({
  label: `选项${index}`,
  value: `${index}`,
  disabled: index === 6,
}))

const columns2 = [columns1, columns1, columns1, columns1]

const columns3 = [
  {
    options: columns1,
    defaultValue: '4',
  },
  {
    options: columns1,
    defaultValue: '2',
  },
  {
    options: columns1,
    defaultValue: '6',
  },
]

const buildChildren = (
  num: number,
  valuePrefix: string,
  labelPrefix: string,
  insertChildren?: (value: string, label: string) => PickerOptionCascade[],
) => {
  return new Array(num).fill(0).map((_, index) => ({
    label: `${labelPrefix}_${index}`,
    value: `${valuePrefix}_${index}`,
    children: insertChildren
      ? insertChildren(`${valuePrefix}_${index}`, `${labelPrefix}_${index}`)
      : null,
  }))
}

const columns4 = buildChildren(8, 'sj', '省级', (sjValue, sjLabel) =>
  buildChildren(
    6,
    sjValue.replace('sj', 'sq'),
    sjLabel.replace('省级', '市区'),
    (sqValue, sqLabel) =>
      buildChildren(
        4,
        sqValue.replace('sq', 'qx'),
        sqLabel.replace('市区', '区县'),
      ),
  ),
)

const BasicPicker: React.FC = () => {
  return (
    <ScrollView>
      <CellGroup title="函数使用" bodyPaddingHorizontal>
        <Space>
          <Button
            text="单选:Promise"
            onPress={() => {
              Picker({
                title: '这是单选',
                columns: columns1,
              }).then(data => {
                console.log(data)
              })
            }}
          />
          <Button
            text="单选:默认值:Promise"
            onPress={() => {
              Picker({
                title: '这是单选',
                columns: columns1,
                defaultValue: [columns1[4].value],
              }).then(data => {
                console.log(data)
              })
            }}
          />
          <Button
            text="单选:Callback"
            onPress={() => {
              Picker({
                title: '这是单选',
                columns: columns1,
                onCancel: (v, c) => {
                  console.log('onCancel')
                  console.log('单选:Callback ==> values ', v)
                  console.log('单选:Callback ==> columns ', c)
                },
                onConfirm: (v, c) => {
                  console.log('onConfirm')
                  console.log('单选:Callback ==> values ', v)
                  console.log('单选:Callback ==> columns ', c)
                },
              })
            }}
          />
          <Button
            text="多选:Promise"
            onPress={() => {
              Picker({
                title: '这是多选',
                columns: columns2,
              }).then(data => {
                console.log(data)
              })
            }}
          />
          <Button
            text="多选:默认值:Promise"
            onPress={() => {
              Picker({
                title: '这是多选',
                columns: columns2,
                defaultValue: [columns2[0][4].value, columns2[1][8].value],
              }).then(data => {
                console.log(data)
              })
            }}
          />
          <Button
            text="多选:选项默认值:Promise"
            onPress={() => {
              Picker({
                title: '这是多选',
                columns: columns3,
              }).then(data => {
                console.log(data)
              })
            }}
          />
          <Button
            text="联级选择:Promise"
            onPress={() => {
              Picker({
                title: '这是联级',
                columns: columns4,
              }).then(data => {
                console.log(data)
              })
            }}
          />
        </Space>
      </CellGroup>
    </ScrollView>
  )
}

export default BasicPicker
