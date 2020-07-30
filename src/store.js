import { observable } from 'mobx'

class AppStore {
    @observable title = "Hello World"
}

export default AppStore;