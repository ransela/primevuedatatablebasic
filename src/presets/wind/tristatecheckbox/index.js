export default {
  root: {
    class: ["cursor-pointer inline-flex relative select-none align-bottom", "w-4 h-4"]
  },
  box: ({props:e,context:r})=>({class:["flex","items-center","justify-center","w-4","h-4","rounded","border","text-surface-600",{"border-surface-300 bg-surface-0 dark:border-surface-700 dark:bg-surface-900":!r.active,"border-primary-500 bg-primary-500 dark:border-primary-400 dark:bg-primary-400":r.active},{"ring-2 ring-primary-500 dark:ring-primary-400":!e.disabled&&r.focused,"cursor-default opacity-60":e.disabled},{"peer-focus-visible:ring-2 peer-focus-visible:ring-primary-500 dark:peer-focus-visible:ring-primary-400":!e.disabled,"cursor-default opacity-60":e.disabled},"transition-colors","duration-200"]}),
  input: {
    class: ["peer", "w-full ", "h-full", "absolute", "top-0 left-0", "z-10", "p-0", "m-0", "rounded", "border", "opacity-0", "rounded-md", "outline-none", "border-2 border-surface-300 dark:border-surface-700", "appareance-none"]
  },
  checkicon: {
    class: ["text-normal", "w-3", "h-3", "text-white dark:text-surface-900", "transition-all", "duration-200"]
  },
  uncheckicon: {
    class: ["text-normal", "w-3", "h-3", "text-white dark:text-surface-900", "transition-all", "duration-200"]
  }
}