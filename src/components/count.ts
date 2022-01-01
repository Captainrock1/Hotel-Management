import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'hello-world',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const count = ref(0)

    const isDisabled = computed(() => {
      return count.value === 0
    })

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const increment = () => {
      count.value += 1
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const decrement = () => {
      if (count.value > 0) {
        count.value -= 1
      }
    }

    return {
      count,
      isDisabled,
      increment,
      decrement
    }
  }
})
