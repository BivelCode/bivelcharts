export type LifecycleHook = 'onInit' | 'onRender' | 'onResize' | 'onDestroy'

export type EventHandler<T = unknown> = (payload: T) => void
