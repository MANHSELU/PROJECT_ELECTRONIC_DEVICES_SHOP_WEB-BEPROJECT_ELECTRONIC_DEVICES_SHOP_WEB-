<template>
  <Teleport to="body">
    <div class="alert-container">
      <TransitionGroup name="alert">
        <div
          v-for="alert in alerts$"
          :key="alert.id"
          class="alert-item"
          :class="`alert-${alert.type}`"
        >
          <span class="alert-icon">
            <Icon :icon="iconMap[alert.type]" width="20" />
          </span>
          <span class="alert-message">{{ alert.message }}</span>
          <button class="alert-close" @click="remove$(alert.id)">
            <Icon icon="mdi:close" width="16" />
          </button>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { alerts$, remove$ } from '@/composables/useAlert'

const iconMap = {
  success: 'mdi:check-circle',
  error: 'mdi:alert-circle',
  warning: 'mdi:alert',
  info: 'mdi:information'
}
</script>



<style scoped>
.alert-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 380px;
  width: 100%;
}

.alert-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  pointer-events: all;
}

.alert-success { background-color: #22c55e; }
.alert-error   { background-color: #ef4444; }
.alert-warning { background-color: #f59e0b; }
.alert-info    { background-color: #3b82f6; }

.alert-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

.alert-message {
  flex: 1;
  line-height: 1.4;
}

.alert-close {
  flex-shrink: 0;
  background: none;
  border: none;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  padding: 0;
  transition: color 0.2s;
}

.alert-close:hover {
  color: #fff;
}

/* Transition */
.alert-enter-active {
  transition: all 0.35s ease;
}
.alert-leave-active {
  transition: all 0.3s ease;
}
.alert-enter-from {
  opacity: 0;
  transform: translateX(40px);
}
.alert-leave-to {
  opacity: 0;
  transform: translateX(40px);
}
.alert-move {
  transition: transform 0.3s ease;
}
</style>
