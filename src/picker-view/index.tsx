import React, { useMemo, useEffect, useState, useRef, memo } from 'react'
import type { StyleProp, ViewStyle } from 'react-native'
import { View } from 'react-native'

import Loading from '../loading'
import { useTheme, widthStyle } from '../theme'
import { useControllableValue } from '../hooks'
import { isDef } from '../helpers'
import type { PickerViewProps, PickerValue, PickerOption } from './interface'
import PickerColumn from './column'
import { createStyles } from './style'
import {
  getDataType,
  findDefaultValue,
  buildOptions,
  findNextAllColumns,
  buildSelectedValue,
} from './helper/picker'

/**
 * 选择器
 */
const Picker: React.FC<PickerViewProps> = ({
  visibleItemCount = 5,
  itemHeight = 50,
  loading = false,
  columns,

  ...restProps
}) => {
  /** 选项的高度 */
  const columnsHeight = visibleItemCount * itemHeight
  /** 居中选中的偏移量 */
  const markMargin = itemHeight / 2
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)
  /**
   * 数据类型
   * @description cascade 联级选择，multiple 多列选择，single 单列选择
   */
  const dataType = useMemo(() => getDataType(columns), [columns])
  const isControlled = 'value' in restProps
  const isNoDefaultValue = 'defaultValue' in restProps

  const [value, onChange] = useControllableValue<PickerValue[]>(restProps, {
    defaultValue: [],
  })
  const [options, setOptions] = useState<PickerOption[][]>([])
  const ColumnDefaultValues = useRef<PickerValue[]>([])

  // 初始化数据
  useEffect(() => {
    if (dataType !== 'cascade') {
      const [_options, defaultValues] = buildOptions(dataType, columns)
      ColumnDefaultValues.current = defaultValues
      setOptions(_options)

      // 非受控的情况才去同步数据
      // 并且没有默认值
      if (!isControlled && !isNoDefaultValue) {
        const [v, o] = buildSelectedValue(defaultValues, _options)
        onChange(v, o)
      }
    }
  }, [columns, dataType, onChange, isControlled, isNoDefaultValue])

  // 联级依赖 value 单独处理
  useEffect(() => {
    if (dataType === 'cascade') {
      const [_options, , _values] = buildOptions(dataType, columns, value)
      const [v, o] = buildSelectedValue(_values, _options)

      setOptions(_options)

      if (value !== _values) {
        onChange(v, o)
      }
    }
  }, [columns, value, dataType, onChange])

  const bodyStyle: ViewStyle = {
    height: columnsHeight,
    backgroundColor: THEME_VAR.picker_view_background_color,
    flexDirection: 'row',
    overflow: 'hidden',
  }
  const maskTopStyleSummary: StyleProp<ViewStyle> = [
    STYLES.mask,
    {
      top: 0,
      bottom: '50%',
      borderBottomWidth: 1,
      transform: [
        {
          translateY: -markMargin,
        },
      ],
    },
  ]
  const maskBottomStyleSummary: StyleProp<ViewStyle> = [
    STYLES.mask,
    {
      top: '50%',
      bottom: 0,
      borderTopWidth: 1,
      transform: [
        {
          translateY: markMargin,
        },
      ],
    },
  ]

  return (
    <View style={STYLES.picker}>
      {loading ? <Loading style={STYLES.loading} /> : null}

      <View style={bodyStyle}>
        <View style={maskTopStyleSummary} pointerEvents="none" />

        <View style={maskBottomStyleSummary} pointerEvents="none" />

        {options.map((optionItem, optionIndex) => {
          const _value = (() => {
            if (isDef(value[optionIndex])) {
              return value[optionIndex]
            }

            // 默认值
            // 非受控的情况才去同步数据
            // 并且没有默认值
            if (!isControlled && !isNoDefaultValue) {
              if (dataType === 'multiple') {
                return ColumnDefaultValues.current[optionIndex]
              }

              // 真的没有就默认第一个选项
              return findDefaultValue(options[optionIndex][0].value, optionItem)
            }

            return null
          })()

          return (
            <PickerColumn
              key={optionIndex}
              itemHeight={itemHeight}
              visibleItemCount={visibleItemCount}
              options={optionItem}
              value={_value}
              onChange={column => {
                switch (dataType) {
                  // 联级选择
                  // 如果是 cascade 需要重置选项
                  case 'cascade': {
                    const nextAll = findNextAllColumns(column?.children || [])
                    const _options = options
                      .slice(0, optionIndex + 1)
                      .concat(nextAll.options)
                    const values = value
                      .slice(0, optionIndex)
                      .concat(column?.value)
                      .concat(nextAll.values)

                    const [v, o] = buildSelectedValue(values, _options)
                    onChange(v, o)
                    break
                  }

                  // 多选
                  case 'multiple': {
                    const newValues = value.concat([])
                    // 先从默认数据中拼凑好数据
                    ColumnDefaultValues.current.forEach((cdv, cdvIndex) => {
                      if (!isDef(newValues[cdvIndex])) {
                        newValues[cdvIndex] = cdv
                      }
                    })

                    console.log(
                      'ColumnDefaultValues   ->>>>   ',
                      ColumnDefaultValues.current,
                    )
                    console.log('value   ->>>>>   ', newValues)

                    newValues[optionIndex] = column.value

                    const [v, o] = buildSelectedValue(newValues, options)

                    onChange(v, o)
                    break
                  }

                  // 单选
                  default: {
                    const columnsIndex = columns.findIndex(
                      c => (c as PickerOption).value === column.value,
                    )
                    onChange([column.value], [columns[columnsIndex]])
                    break
                  }
                }
              }}
            />
          )
        })}
      </View>
    </View>
  )
}

export default memo(Picker)
