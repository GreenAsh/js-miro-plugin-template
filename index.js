const up_icon = `<g id="Layer_1">
    <polygon points="396.6,352 416,331.3 256,160 96,331.3 115.3,352 256,201.5 "/>
  </g>`;

const down_icon = `<g id="Layer_1">
     <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 "/>
  </g>`
  
miro.onReady(async () => {
    const authorized = await miro.isAuthorized();
    if (!authorized) {
        return;
    }

    const canEditWidgets = await hasPermission('EDIT_CONTENT');
    if (!canEditWidgets) {
        return;
    }

    await miro.initialize({
        extensionPoints: {
            getWidgetMenuItems: async (widgets) => {
                return [{
                    tooltip: 'Up',
                    svgIcon: up_icon,
                    onClick: async (widgets) => {
                        consol.log('up')
                    }
                }, {
                    tooltip: 'Down',
                    svgIcon: down_icon,
                    onClick: async (widgets) => {
                        consol.log('down')
                    }
                }];
            }
        }
    })
});
