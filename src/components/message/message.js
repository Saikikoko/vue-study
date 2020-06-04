import {create} from '../../util/create'
import Message from './Message.vue'
const Plugin = {
    install (Vue, options = {}) {
        /**
         * Makes sure that plugin can be insstalled only once
         */
        if (this.installed) {
            return
        }

        this.installed = true

        Vue.prototype.$message = (props) => {
            const comp = create(Message, props)
            comp.show()
            return comp
        }
       
    }
}

export default Plugin
