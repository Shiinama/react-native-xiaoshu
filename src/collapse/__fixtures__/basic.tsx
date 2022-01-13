import React, { useCallback } from 'react'
import { View, Text, ScrollView } from 'react-native'

import { Collapse, CellGroup } from '@fruits-chain/react-native-xiaoshu'

const BasicCollapse: React.FC = () => {
  return (
    <ScrollView>
      <CellGroup title="基础用法" bordered={false}>
        <Collapse title="标题11">
          <Text style={{ lineHeight: 20 }}>文案</Text>
          <View style={{ height: 20 }} />
          <Text style={{ lineHeight: 20 }}>文案</Text>
        </Collapse>

        <Collapse title="标题12" bodyPadding={false}>
          <Text style={{ lineHeight: 20 }}>文案</Text>
          <View style={{ height: 20 }} />
          <Text style={{ lineHeight: 20 }}>文案</Text>
        </Collapse>

        <Collapse
          title={
            <View>
              <Text style={{ marginRight: 8 }}>测试案例</Text>
              <Text>测试案例2</Text>
            </View>
          }>
          <Text style={{ lineHeight: 20 }}>文案</Text>
          <View style={{ height: 20 }} />
          <Text style={{ lineHeight: 20 }}>文案</Text>
        </Collapse>

        <Collapse
          title="title文案"
          renderTitle={useCallback((v: boolean) => {
            return `不要这样写 useCallback：${v ? '好的' : '不好'}`
          }, [])}
          renderBody={useCallback((v: boolean) => {
            return (
              <>
                <Text style={{ lineHeight: 20 }}>文案：{v ? '展开' : ''}</Text>
                {v ? <View style={{ height: 400 }} /> : null}
                <Text style={{ lineHeight: 20 }}>文案</Text>
              </>
            )
          }, [])}
        />

        <Collapse title="title文案">
          <Text style={{ lineHeight: 20 }}>文案</Text>
          <View style={{ height: 20 }} />
          <Text style={{ lineHeight: 20 }}>文案</Text>
        </Collapse>

        <Collapse
          title="自定义标题颜色"
          titleStyle={{ backgroundColor: '#f5f5f5' }}
          titleTextStyle={{
            color: '#f30',
          }}
          iconColor="#fff">
          <Text style={{ lineHeight: 20 }}>文案</Text>
          <View style={{ height: 20 }} />
          <Text style={{ lineHeight: 20 }}>文案</Text>
        </Collapse>

        <Collapse title="title文案" bodyStyle={{ backgroundColor: '#f5f5f5' }}>
          <Text style={{ lineHeight: 20 }}>文案</Text>
          <View style={{ height: 20 }} />
          <Text style={{ lineHeight: 20 }}>文案</Text>
        </Collapse>
      </CellGroup>
    </ScrollView>
  )
}

export default BasicCollapse
