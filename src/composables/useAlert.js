import { reactive } from 'vue'

const alerts = reactive([])
let idCounter = 0

function remove(id) {
  const idx = alerts.findIndex(a => a.id === id)
  if (idx !== -1) alerts.splice(idx, 1)
}

function show(type, message, duration = 3000) {
  const id = ++idCounter
  alerts.push({ id, type, message })
  if (duration > 0) setTimeout(() => remove(id), duration)
}

export const alerts$ = alerts
export const remove$ = remove
export const alertSuccess = (msg) => show('success', msg)
export const alertError   = (msg) => show('error', msg, 4000)
export const alertWarning = (msg) => show('warning', msg, 3500)
export const alertInfo    = (msg) => show('info', msg)
