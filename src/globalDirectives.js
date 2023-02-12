const GlobalDirectives = {
    install(Vue) {
        Vue.directive('click-outside', {
            beforeMount: function (el, binding) {
                // Define ourClickEventHandler
                const ourClickEventHandler = event => {
                    if (!el.contains(event.target) && el !== event.target) {
                        // as we are attaching an click event listern to the document (below)
                        // ensure the events target is outside the element or a child of it
                        binding.value(event); // before binding it
                    }
                };
                // attached the handler to the element so we can remove it later easily
                el.__vueClickEventHandler__ = ourClickEventHandler;

                // attaching ourClickEventHandler to a listener on the document here
                document.addEventListener("click", ourClickEventHandler);
            },
            unmounted: function (el) {
                // Remove Event Listener
                document.removeEventListener("click", el.__vueClickEventHandler__);
            }
        });
        Vue.directive('columns-resizable', {
            mounted(el) {
                let nodeName = el.nodeName;
                if (['TABLE', 'THEAD'].indexOf(nodeName) < 0) {
                    el = el.querySelector('table'); // looking for the closest table
                    if (!el) return;
                    nodeName = 'TABLE';
                }

                const table = nodeName === 'TABLE' ? el : el.parentElement;
                const thead = table.querySelector('thead');
                const ths = thead.querySelectorAll('th');
                const barHeight = nodeName === 'TABLE' ? table.offsetHeight : thead.offsetHeight;

                const resizeContainer = document.createElement('div');
                table.style.position = 'relative';
                resizeContainer.style.position = 'relative';
                resizeContainer.style.width = table.offsetWidth + 'px';
                resizeContainer.className = "vue-columns-resizable";
                table.parentElement.insertBefore(resizeContainer, table);

                let moving = false;
                let movingIndex = 0;

                ths.forEach((th, index) => {
                    th.style.width = th.offsetWidth + 'px';

                    if (index + 1 >= ths.length) return;

                    const nextTh = ths[index + 1];
                    const bar = document.createElement('div');

                    bar.style.position = 'absolute';
                    bar.style.left = nextTh.offsetLeft - 4 + 'px';
                    bar.style.top = 0;
                    bar.style.height = barHeight + 'px';
                    bar.style.width = '8px';
                    bar.style.cursor = 'col-resize';
                    bar.style.zIndex = 1;
                    bar.className = 'columns-resize-bar';

                    bar.addEventListener('mousedown', () => {
                        moving = true;
                        movingIndex = index;
                        document.body.style.cursor = 'col-resize';
                        document.body.style.userSelect = 'none';
                    });

                    resizeContainer.appendChild(bar);
                });

                const bars = resizeContainer.querySelectorAll('.columns-resize-bar');

                document.addEventListener('mouseup', () => {
                    if (!moving) return;

                    moving = false;
                    document.body.style.cursor = '';
                    document.body.style.userSelect = '';

                    bars.forEach((bar, index) => {
                        const th = ths[index];
                        const nextTh = ths[index + 1];
                        th.style.width = th.offsetWidth + 'px';
                        bar.style.left = nextTh.offsetLeft - 4 + 'px';
                    });
                });

                const cutPx = str => +str.replace('px', '');

                const handleResize = e => {
                    if (moving) {
                        const th = ths[movingIndex];
                        const nextTh = ths[movingIndex + 1];
                        const bar = bars[movingIndex];
                        th.style.width = cutPx(th.style.width) + e.movementX + 'px';
                        nextTh.style.width = cutPx(nextTh.style.width) - e.movementX + 'px';
                        bar.style.left = nextTh.offsetLeft - 4 + e.movementX + 'px';
                    }
                };

                resizeContainer.addEventListener('mousemove', handleResize);
                table.addEventListener('mousemove', handleResize);
            },
        });

    }
};

export default GlobalDirectives;
