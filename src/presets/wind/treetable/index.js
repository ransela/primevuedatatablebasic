export default {
  root: ({props:e})=>({class:["relative",{"flex flex-col h-full":e.scrollHeight==="flex"},"border-spacing-0 border-separate"]}),
  loadingoverlay: {
    class: ["absolute", "top-0 left-0", "z-20", "flex items-center justify-center", "w-full h-full", "bg-surface-100/40 dark:bg-surface-800/40", "transition duration-200"]
  },
  loadingicon: {
    class: "w-8 h-8 animate-spin"
  },
  wrapper: ({props:e})=>({class:[{"relative overflow-auto":e.scrollable,"overflow-x-auto":e.resizableColumns}]}),
  header: ({props:e})=>({class:["font-semibold",e.showGridlines?"border-b":"border-b border-x-0","py-3.5 px-3","bg-surface-0 dark:bg-surface-800","border-surface-300 dark:border-surface-600","text-surface-700 dark:text-white/80"]}),
  footer: {
    class: ["font-semibold", "border-t-0 border-t border-x-0", "p-4", "bg-surface-0 dark:bg-surface-800", "border-surface-200 dark:border-surface-700", "text-surface-700 dark:text-white/80"]
  },
  table: {
    class: ["border-collapse table-fixed w-full "]
  },
  thead: ({props:e})=>({class:[{"top-0 z-40 sticky":e.scrollable}]}),
  tbody: ({props:e})=>({class:[{block:e.scrollable}]}),
  tfoot: ({props:e})=>({class:[{block:e.scrollable}]}),
  headerrow: ({props:e})=>({class:[{"flex flex-nowrap w-full":e.scrollable}]}),
  row: ({context:e,props:r})=>({class:[{"flex flex-nowrap w-full":e.scrollable},"dark:text-white/80",{"bg-surface-50 dark:bg-surface-500/30":e.selected},{"bg-surface-0 text-surface-600 dark:bg-surface-800":!e.selected},{"hover:bg-surface-300/20 hover:text-surface-600":e.selectable&&!e.selected},"focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-primary-500 ring-inset dark:focus:ring-primary-400",{"transition duration-200":r.selectionMode&&!e.selected||r.rowHover}]}),
  headercell: ({context:e,props:r})=>({class:["font-semibold","text-sm",{"sticky z-40":e.scrollable&&e.scrollDirection==="both"&&e.frozen},{"flex flex-1 items-center":e.scrollable,"flex-initial shrink-0":e.scrollable&&e.scrollDirection==="both"&&!e.frozen},"text-left",{"border-r last:border-r-0":e==null?void 0:e.showGridlines},"border-0 border-b border-solid",(e==null?void 0:e.size)==="small"?"py-2.5 px-2":(e==null?void 0:e.size)==="large"?"py-5 px-4":"py-3.5 px-3",(r.sortable===""||r.sortable)&&e.sorted?"text-primary-500":"bg-surface-0 text-surface-700",(r.sortable===""||r.sortable)&&e.sorted?"dark:text-primary-400":"dark:text-white/80 dark:bg-surface-800","border-surface-200 dark:border-surface-700 ","focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",{"transition duration-200":r.sortable===""||r.sortable},{"overflow-hidden relative bg-clip-padding":e.resizable&&!e.frozen}]}),
  column: {
    headercell: ({context:e,props:r})=>({class:["font-semibold","text-sm",{"sticky z-40":e.scrollable&&e.scrollDirection==="both"&&e.frozen},{"flex flex-1 items-center":e.scrollable,"flex-initial shrink-0":e.scrollable&&e.scrollDirection==="both"&&!e.frozen},"text-left",{"border-r last:border-r-0":e==null?void 0:e.showGridlines},"border-0 border-b border-solid",(e==null?void 0:e.size)==="small"?"py-2.5 px-2":(e==null?void 0:e.size)==="large"?"py-5 px-4":"py-3.5 px-3",(r.sortable===""||r.sortable)&&e.sorted?"text-primary-500":"bg-surface-0 text-surface-700",(r.sortable===""||r.sortable)&&e.sorted?"dark:text-primary-400":"dark:text-white/80 dark:bg-surface-800","border-surface-200 dark:border-surface-700 ","focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",{"transition duration-200":r.sortable===""||r.sortable},{"overflow-hidden relative bg-clip-padding":e.resizable&&!e.frozen}]}),
    bodycell: ({context:e})=>({class:[{sticky:e.scrollable&&e.scrollDirection==="both"&&e.frozen},"text-sm",{"flex flex-1 items-center":e.scrollable,"flex-initial shrink-0":e.scrollable&&e.scrollDirection==="both"&&!e.frozen},"text-left","border-0 border-b border-solid",{"last:border-r-0 border-r border-b":e==null?void 0:e.showGridlines},"border-surface-200 dark:border-surface-700",{"bg-surface-0 dark:bg-surface-800":!e.selected},(e==null?void 0:e.size)==="small"?"py-2.5 px-2":(e==null?void 0:e.size)==="large"?"py-5 px-4":"py-3.5 px-3","space-nowrap",{"cursor-pointer":e.selectable}]}),
    rowtoggler: {
      class: ["relative", "inline-flex items-center justify-center", "text-left align-middle", "m-0 mr-2 p-0", "w-8 h-8", "border-0 rounded-full", "text-surface-500 dark:text-white/70", "bg-transparent", "hover:bg-surface-50 dark:hover:bg-surface-700", "focus-visible:outline-none focus-visible:outline-offset-0", "focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400", "transition duration-200", "overflow-hidden", "cursor-pointer select-none"]
    },
    sorticon: ({context:e})=>({class:["ml-2 inline-block",e.sorted?"fill-primary-700 dark:fill-white/80":"fill-surface-700 dark:fill-white/70"]}),
    sortbadge: {
      class: ["inline-flex items-center justify-center align-middle", "rounded-full", "w-[1.143rem] leading-[1.143rem]", "ml-2", "text-primary-700 dark:text-white", "bg-primary-50 dark:bg-primary-400/30"]
    },
    columnresizer: {
      class: ["block", "absolute top-0 right-0", "w-2 h-full", "m-0 p-0", "border border-transparent", "cursor-col-resize"]
    },
    rowCheckbox: {
      root: {
        class: ["relative", "inline-flex", "align-middle", "w-4", "h-4", "mr-2", "cursor-default", "select-none"]
      },
      box: ({props:e,context:r})=>({class:["flex","items-center","justify-center","w-4","h-4","rounded","border","text-surface-600",{"border-surface-300 bg-surface-0 dark:border-surface-700 dark:bg-surface-900":!r.checked,"border-primary-500 bg-primary-500 dark:border-primary-400 dark:bg-primary-400":r.checked},{"ring-2 ring-primary-500 dark:ring-primary-400":!e.disabled&&r.focused,"cursor-default opacity-60":e.disabled},{"peer-focus-visible:ring-2 peer-focus-visible:ring-primary-500 dark:peer-focus-visible:ring-primary-400":!e.disabled,"cursor-default opacity-60":e.disabled},"transition-colors","duration-200"]}),
      input: {
        class: ["peer", "w-full ", "h-full", "absolute", "top-0 left-0", "z-10", "p-0", "m-0", "rounded", "border", "opacity-0", "rounded-md", "outline-none", "border-2 border-surface-300 dark:border-surface-700", "appareance-none"]
      },
      icon: {
        class: ["text-normal", "w-3", "h-3", "text-white dark:text-surface-900", "transition-all", "duration-200"]
      }
    },
    transition: {
      enterFromClass: "opacity-0 scale-y-[0.8]",
      enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
      leaveActiveClass: "transition-opacity duration-100 ease-linear",
      leaveToClass: "opacity-0"
    }
  },
  resizehelper: {
    class: "absolute hidden w-[2px] z-20 bg-primary-500 dark:bg-primary-400"
  }
}