import Vue from 'vue'
import io from 'socket.io-client'
import router from './router'

const socket = io('https://bddi-2019-chat.herokuapp.com/')

const store = new Vue({
  data: {
    user: {},
    users: [],
    usersPosition: {},
    usersTyping: [],
    windows: [...Array(51).keys()],
    separationWindow: 24,
    messages: [],
    messagesDisplayed: [],
    isRegistered: false
  },
  watch: {
    isRegistered (registered) {
      if (registered) {
        router.push('/')
      } else {
        router.push('/login')
      }
    }
  },
  methods: {
    registerListeners () {
      socket.on('connect', () => {
        const sessionUser = sessionStorage.getItem('user')

        if (sessionUser) {
          store.userRegister(JSON.parse(sessionUser))
        }
      })

      socket.on('disconnect', () => {
        this.isRegistered = false
        this.user = {}
      })

      socket.on('users update', (infos) => {
        this.users = infos.users
        if (Object.keys(this.usersPosition).length === 0) {
          for (let i = 0; i < infos.users.length; i++) {
            let window
            if (infos.users[i].username === this.user.username) {
              window = 40
              this.windows = this.windows.filter((value) => value !== 40)
            } else {
              const random = Math.floor(Math.random() * this.windows.length)
              window = this.windows[random]
              this.windows.splice(random, 1)
            }
            Vue.set(this.usersPosition, infos.users[i].username, { window, side: window > this.separationWindow ? 'right' : 'left' })
          }
        } else if (infos.type === 'join') {
          let window
          if (infos.user.username === this.user.username) {
            window = 40
            this.windows = this.windows.filter((value) => value !== 40)
          } else {
            const random = Math.floor(Math.random() * this.windows.length)
            window = this.windows[random]
            this.windows.splice(random, 1)
          }
          Vue.set(this.usersPosition, infos.user.username, { window, side: window > this.separationWindow ? 'right' : 'left' })
        } else if (infos.type === 'left') {
          this.windows.push(this.usersPosition[infos.user.username].window)
          Vue.delete(this.usersPosition, infos.user.username)
        }
      })

      socket.on('user registered', (user) => {
        this.isRegistered = true
        this.user = user

        sessionStorage.setItem('user', JSON.stringify(user))
      })

      socket.on('messages update', ({ messages }) => {
        this.messages = messages
      })

      socket.on('user typing', (infos) => {
        if (infos.typing && !this.usersTyping.includes(infos.user.username)) {
          this.usersTyping.push(infos.user.username)
        } else if (!infos.typing) {
          this.usersTyping = this.usersTyping.filter((value) => value !== infos.user.username)
        }
      })

      socket.on('message new', ({ message }) => {
        this.messages.push(message)
        this.messagesDisplayed.push(message)
        setTimeout(() => {
          this.messagesDisplayed = this.messagesDisplayed.filter((value) => value !== message)
        }, 20000)
      })

      socket.on('chat error', (error) => {
        console.log('chat error', error)
      })
    },
    logout () {
      sessionStorage.clear()
      socket.disconnect()
      router.push('/login')
    },
    userRegister (user) {
      socket.emit('user register', user)
    },
    userTyping () {
      socket.emit('user typing')
    },
    messageNew (message) {
      socket.emit('message new', message)
    }
  },
  created () {
    this.registerListeners()
  }
})

export default store
