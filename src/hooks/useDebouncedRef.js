import { customRef } from "vue"

export function useDebouncedRef(value, delay = 200) {
  let timeout
  return customRef((track, trigger) => {
    return {
      get() {
        console.log(`有人读取数据，我把${value}给他了`)
        // 告诉Vue追踪数据
        track()
        return value
      },
      set(newValue) {
        console.log(`有人修改数据，将数据改为：${newValue}`)
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          value = newValue
          // 告诉Vue去触发界面更新
          trigger()
        }, delay)
      }
    }
  })
}