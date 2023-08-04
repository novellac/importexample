<script>
import { computed, h, resolveComponent, toRefs } from 'vue'

import IconSupport from './icons/IconSupport.vue'

export default {
  props: {
    variant: {
      type: String,
      default: null
    }
  },

  setup (props, { attrs }) {
    const { variant } = toRefs(props)

    const tag = computed(() => {
      switch (variant.value) {
        case 'community':
          return resolveComponent('IconCommunity')

        case 'documentation':
          return resolveComponent('IconDocumentation')

        case 'ecosystem':
        return resolveComponent('IconEcosystem')

        case 'support':
        return IconSupport // This will work since we import it directly

        case 'tooling':
        default:
          return resolveComponent('IconTooling')
      }
    })

    return () => h(tag.value,
      {
        ...attrs,
        ...props
      }
    )
  }
}
</script>
