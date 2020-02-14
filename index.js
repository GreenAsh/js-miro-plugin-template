const up_icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 6C4 5.44772 4.44772 5 5 5H9C9.55228 5 10 5.44772 10 6C10 6.55228 9.55228 7 9 7H5C4.44772 7 4 6.55228 4 6Z" fill="#050038"/>
<path d="M12.2929 11.7929C11.9024 12.1834 11.9024 12.8166 12.2929 13.2071C12.6834 13.5976 13.3166 13.5976 13.7071 13.2071L15 11.9142V18C15 18.5523 15.4477 19 16 19C16.5523 19 17 18.5523 17 18V11.9142L18.2929 13.2071C18.6834 13.5976 19.3166 13.5976 19.7071 13.2071C20.0976 12.8166 20.0976 12.1834 19.7071 11.7929L16 8.08579L12.2929 11.7929Z" fill="#050038"/>
<path d="M5 9C4.44772 9 4 9.44772 4 10C4 10.5523 4.44772 11 5 11H9C9.55228 11 10 10.5523 10 10C10 9.44772 9.55228 9 9 9H5Z" fill="#050038"/></svg>`;
const down_icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16 15C15.4477 15 15 14.5523 15 14V6C15 5.44772 15.4477 5 16 5C16.5523 5 17 5.44772 17 6V14C17 14.5523 16.5523 15 16 15Z" fill="#050038"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.2929 10.7929C11.9024 11.1834 11.9024 11.8166 12.2929 12.2071L16 15.9142L19.7071 12.2071C20.0976 11.8166 20.0976 11.1834 19.7071 10.7929C19.3166 10.4024 18.6834 10.4024 18.2929 10.7929L16 13.0858L13.7071 10.7929C13.3166 10.4024 12.6834 10.4024 12.2929 10.7929Z" fill="#050038"/>
<path d="M4 18C4 18.5523 4.44772 19 5 19H9C9.55228 19 10 18.5523 10 18C10 17.4477 9.55228 17 9 17H5C4.44772 17 4 17.4477 4 18Z" fill="#050038"/>
<path d="M4 14C4 14.5523 4.44772 15 5 15H9C9.55228 15 10 14.5523 10 14C10 13.4477 9.55228 13 9 13H5C4.44772 13 4 13.4477 4 14Z" fill="#050038"/></svg>`;

const up_disabled_icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#cccccc"><path d="M4 6C4 5.44772 4.44772 5 5 5H9C9.55228 5 10 5.44772 10 6C10 6.55228 9.55228 7 9 7H5C4.44772 7 4 6.55228 4 6Z" fill="#cccccc"/>
<path d="M12.2929 11.7929C11.9024 12.1834 11.9024 12.8166 12.2929 13.2071C12.6834 13.5976 13.3166 13.5976 13.7071 13.2071L15 11.9142V18C15 18.5523 15.4477 19 16 19C16.5523 19 17 18.5523 17 18V11.9142L18.2929 13.2071C18.6834 13.5976 19.3166 13.5976 19.7071 13.2071C20.0976 12.8166 20.0976 12.1834 19.7071 11.7929L16 8.08579L12.2929 11.7929Z" fill="#cccccc"/>
<path d="M5 9C4.44772 9 4 9.44772 4 10C4 10.5523 4.44772 11 5 11H9C9.55228 11 10 10.5523 10 10C10 9.44772 9.55228 9 9 9H5Z" fill="#cccccc"/></svg>`;
const down_disabled_icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#cccccc"><path d="M16 15C15.4477 15 15 14.5523 15 14V6C15 5.44772 15.4477 5 16 5C16.5523 5 17 5.44772 17 6V14C17 14.5523 16.5523 15 16 15Z" fill="#cccccc"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.2929 10.7929C11.9024 11.1834 11.9024 11.8166 12.2929 12.2071L16 15.9142L19.7071 12.2071C20.0976 11.8166 20.0976 11.1834 19.7071 10.7929C19.3166 10.4024 18.6834 10.4024 18.2929 10.7929L16 13.0858L13.7071 10.7929C13.3166 10.4024 12.6834 10.4024 12.2929 10.7929Z" fill="#cccccc"/>
<path d="M4 18C4 18.5523 4.44772 19 5 19H9C9.55228 19 10 18.5523 10 18C10 17.4477 9.55228 17 9 17H5C4.44772 17 4 17.4477 4 18Z" fill="#cccccc"/>
<path d="M4 14C4 14.5523 4.44772 15 5 15H9C9.55228 15 10 14.5523 10 14C10 13.4477 9.55228 13 9 13H5C4.44772 13 4 13.4477 4 14Z" fill="#cccccc"/></svg>`
  
miro.onReady(async () => {
    const authorized = await miro.isAuthorized();
    if (!authorized) {
        return;
    }

    await miro.initialize({
      
        extensionPoints: {
            getWidgetMenuItems: async (widgets) => {
              if (!widgets || !widgets.length || widgets.length !== 1){
                return [];
              }
              const widget = widgets[0];
              const nearestWidgets = await findNearestWidgets(widget)
              
              const upClick = async (widgets) => {
                const uwidgets = await findNearestWidgets(widget)
                if (uwidgets.next !== false) {
                  await miro.board.figma.moveFront(widget, uwidgets.next);
                  if (nearestWidgets.prev === false || uwidgets.futureNext === false) {
                    await reselect(widget)
                  }
                }
                
                
              }
              
              const downClick = async (widgets) => {
                const dwidgets = await findNearestWidgets(widget)
                if (dwidgets.prev !== false) {
                  await miro.board.figma.moveBack(widget, dwidgets.prev);
                  if (nearestWidgets.next === false || dwidgets.futurePrev === false){
                    await reselect(widget)
                  }
                }
              }
              
                return [{
                    tooltip: 'Up',
                    svgIcon: nearestWidgets.next === false ? up_disabled_icon : up_icon,
                    onClick: nearestWidgets.next === false ? async () => {} : upClick
                }, {
                    tooltip: 'Down',
                    svgIcon: nearestWidgets.prev === false ? down_disabled_icon : down_icon,
                    onClick: nearestWidgets.prev === false ? async () => {} : downClick
                }];
            }
        }
    })
});

async function findNearestWidgets(widget){
  const defaultResult = { prev: false, next: false }
  if (!widget.bounds){
    return defaultResult;
  }
  let rect = boundsToRect(widget.bounds);
  let intersectedWidgets = await miro.board.widgets.__getIntersectedObjects(rect);
  intersectedWidgets = await miro.board.figma.sortWidgetsByZIndex(intersectedWidgets);
  for (var i = 0; i < intersectedWidgets.length; i++) {
    var iter = intersectedWidgets[i];
    if (iter.id === widget.id){
      return {
        futurePrev: i - 1 > 0 ? intersectedWidgets[i - 2] : false,
        prev: i > 0 ? intersectedWidgets[i - 1] : false,
        next: i + 1 < intersectedWidgets.length ? intersectedWidgets[i + 1] : false,
        futureNext: i + 2 < intersectedWidgets.length ? intersectedWidgets[i + 2] : false
      }
    }
  }
  return defaultResult;
}

function boundsToRect(bounds){
  return {
    x: bounds.left,
    y: bounds.top,
    width: bounds.width,
    height: bounds.height
  }
}

async function reselect(widget){
    if (!widget) {
        return
    }
    console.log('reselect');
    await miro.board.selection.clear();
    await miro.board.selection.selectWidgets(widget)
}
