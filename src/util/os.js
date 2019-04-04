const hasOSReducedMotion = () => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export { 
    hasOSReducedMotion 
};